"use strict";
const { translate } = require("../src/translate");  
const process = require('process'); 

// Taking in arguements when we run the JS file
// node src/filename.js arg1 arg2 
var args = process.argv; 
  
console.log("number of arguments is "+args.length); 
console.log(args);

const wordFromPrompt = args[2];
console.log(translate(wordFromPrompt));

console.log(translate(args[3]));