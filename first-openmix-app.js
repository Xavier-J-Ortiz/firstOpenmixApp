function init(config) {
    
    config.requireProvider('akamai_object_delivery');
    config.requireProvider('aws_ec2_us_east_va');
    config.requireProvider('cloudflare_cdn');
}

var round = 0;

function onRequest(request, response) {
    
    if (round == 0){
        response.respond('akamai_object_delivery', '4.4.4.4');       
    }
    
    else if (round == 1) {
        response.respond('aws_ec2_us_east_va', '8.8.8.8'); 
    }
    
    else if (round == 2) {
        response.respond('aws_ec2_us_east_va', '8.8.4.4'); 
    }
    
    else {
        
    }
    
    response.setTTL(20);
    round = (round + 1) % 3;
    
}

