//#!/opt/node/bin/node

var globalValue;

exports.setGlobal = function(val) {
    globalValue = val;
};

exports.returnGlobal = function() {
    console.log(global);
    return globalValue;
};

