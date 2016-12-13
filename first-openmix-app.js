function init(config) {
    // foo, bar and baz are provider aliases
    config.requireProvider('akamai_object_delivery');
    config.requireProvider('aws_ec2_us_east_va');
    config.requireProvider('cloudflare_cdn');
}