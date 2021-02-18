#!/usr/local/bin/node

var mod1 = require('./modl.js');

mod1.setGlobal(34);
console.log(mod1);

var va1 = mod1.returnGlobal();
console.log(va1);

