"use strict";
/**key to value relation, LETTER_TO_VALUE*/
const LETTER_TO_VALUE= {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};


/**Calculate every word's alphabets scores in a array
 * input: an array of words
 * return a new array that holds each word's score
 */ 
function scoreWords(words) {
  let wordsScores = [];
  for (let word of words) {
    wordsScores.push(scoreSingleWord(word));
  }

  return wordsScores;
}

/**Add each alphabet scores in a single word, 
 * input: string(a word)
 * return: number(the score of a word)
 * if word contains something else except alphabets, return null 
 */

function scoreSingleWord(word) {
  let singleWordScore = 0;
  for(let letter of word) {
    if(LETTER_TO_VALUE[letter.toUpperCase()] === undefined) {
      return null;
    } else {
      singleWordScore += LETTER_TO_VALUE[letter.toUpperCase()];
    }
  }

  return singleWordScore;
}


