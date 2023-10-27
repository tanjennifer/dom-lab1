"use strict";

const translate = (word) => {
    // return word + "way";
    let vowels = ["a", "e", "i", "o", "u"];
    let wordAsArray = word.toLowerCase().split("");

 
    if (vowels.includes(wordAsArray[0])) {
        return word + "way";
    } else {
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(wordAsArray[i])) {
            return `${wordAsArray.slice(i, wordAsArray.length).join("")}${wordAsArray.slice(0, i).join("")}ay`
            
        }

        }
    }

    
};

module.exports = {translate};

//regular expressions

// let i = word.match(/[aeiou]/i);
//   console.log(i.index);
//   return i === 0
//     ? `${word}way`
//     : `${word.slice(i.index, word.length)}${word.slice(0, i.index)}ay`;
