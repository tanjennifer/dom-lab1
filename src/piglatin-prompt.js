"use strict";

// This is the main point. I can import/add/require different JS packages/modules/files/functions
// from other places and use their JS functions in this file
const { translate } = require("../src/translate");  
const promptly = require('promptly');


// Using the Promptly package to ask the user to input a word
const promptAndConvert = (async () => {
    const myWord = await promptly.prompt('Word to convert: ');
    console.log(myWord);

    console.log(translate(myWord));

})();


// make our prompt function exportable
module.exports = { promptAndConvert };