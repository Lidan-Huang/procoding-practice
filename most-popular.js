"use strict";

// function mostPopular(s) {
//   let ltr_obj = {};
//   let common = [];
//   let high = 0;
//   for (let letter of s) {
//     const count = (ltr_obj[letter] || 0) + 1;
//     ltr_obj[letter] = count;
//     if (count > high) {
//       common = [letter];
//       high = count;
//     } else if (count == high) {
//       common.push(letter);
//     }
//   }

//   return common;
// }

/** calculate most popular letters in a string, return an array of that popular letters */ 

function mostPopular(letters) {
  let lettersObj = getFrequency(letters);
  let highestCount = maxCount(lettersObj);
  // let keys = Object.keys(lettersObj);
  let common = [];

  for(let key in lettersObj) {
    if(lettersObj[key] === highestCount) {
      common.push(key);
    }
  }
  return common;
}


/** make a string into an object and return it*/ 
function getFrequency(letters) { 
  let letterFrequency = {};
  // for(let letter of letters) {
  //   let keysOfLetters = Object.keys(letterFrequency);
  //   if(! keysOfLetters.includes(letter)) {
  //     letterFrequency[letter] = 1;
  //   } else {
  //     letterFrequency[letter] += 1;
  //   }
  // }
  for(let letter of letters) {
    if(letterFrequency[letter] === undefined) {
      letterFrequency[letter] = 1;
    } else {
      letterFrequency[letter] ++;
    }
  }
  return letterFrequency;
}


/** find the largest value in an object and return it*/ 
function maxCount(obj) {
  // let maxCount = 0;
  // for(let key of Object.keys(obj)) {
  //   if(obj[key] > maxCount) {
  //     maxCount = obj[key];
  //   }
  // }

  // for(let key in obj) {
  //   if(obj[key] > maxCount) {
  //     maxCount = obj[key];
  //   }
  // }

  // return maxCount;
  
  // let maxCount = Math.max(...Object.values(obj));
  // return maxCount;
  return Math.max(...Object.values(obj));
}

// Math.max(...Object.values(obj));