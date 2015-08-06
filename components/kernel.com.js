var EventEmitter = require("events").EventEmitter;
var util = require("util");

var Kernel = function() {
    
};

// make the Kernel emit events
util.inherits(Kernel, EventEmitter);

// we're exporting the Kernel to the rest of the app
module.exports = Kernel;