"use strict";

/** Calculate most popular letters in a string
 * input: string(a word), like "aba"
 * return: an array of the most popular letter(s), like ['a']
 */ 

function mostPopular(letters) {
  let lettersFrequency = getFrequency(letters);
  let highestCount = maxCount(lettersFrequency);
  let common = [];

  for(let key in lettersFrequency) {
    if(lettersFrequency[key] === highestCount) {
      common.push(key);
    }
  }
  return common;
}


/** Make a string into an object
 *  input: a string, like 'aba'
 *  return: an object, like {'a': 2, 'b': 1}
 */ 
function getFrequency(letters) { 
  let letterFrequency = {};
  
  for(let letter of letters) {
    if(letterFrequency[letter] === undefined) {
      letterFrequency[letter] = 1;
    } else {
      letterFrequency[letter] ++;
    }
  }
  return letterFrequency;
}


/** Find the largest value in an object 
 * input: an object, like {'a': 2, 'b': 1}
 * return: the max value, like 2 
 */ 
function maxCount(lettersFrequency) {
  return Math.max(...Object.values(lettersFrequency));
}