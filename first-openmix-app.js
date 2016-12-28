//Xavier's first app
function init(config) {
    // useless for the time being
    config.requireProvider('akamai_object_delivery');
    config.requireProvider('aws_ec2_us_east_va');
    config.requireProvider('cloudflare_cdn');
}

var round = 0;

function onRequest(request, response) {
    // cycles through all servers I want to cycle through.
    if (round === 0){
        // response.respond('akamai_object_delivery', '4.4.4.4');
        response.addARecord('1.1.1.1');
        response.addARecord('2.2.2.2');
        response.addARecord('3.3.3.3');
        response.addARecord('4.4.4.4');
        response.setTTL(20);
    }
    
    else if (round === 1) {
        // why is specifying the provider alias important?
        response.respond('aws_ec2_us_east_va', '8.8.8.8');
        response.setTTL(30);
    }
    
    else if (round === 2) {
        //response.respond('akamai_object_delivery', '8.8.4.4');
        //response.setTTL(20);

        response.setProvider('cloudflare_cdn');
        response.addCName('bar.foo.com')
        response.setTTL(25)
    }
    
    round = (round + 1) % 3;
}
