
var us = require('underscore');

us.each(['apple', 'cherry'], function(fruit) {
    console.log(fruit);
});

us.mixin({
    betterWithNode: function(str) {
        return str + ' is better with ndoe';
    }
});

console.log(us.betterWithNode('chocolate'));

