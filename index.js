
var Service = require('./lib/service');
var Browser = require('./lib/browser');

// create a new service advertisement
// default is unique true
// opt: { port: ###, [unique: false] }
module.exports.service = function(name, opt) {
    return new Service(name, opt);
};

// create a new service browser
module.exports.browser = function(service_name) {
    return new Browser(service_name);
};

