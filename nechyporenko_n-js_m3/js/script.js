'use strict';

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let arrAlphabet = alphabet.split('');
let keyboard = [];

for(let i = 0, m = 0, n = 12; i < 3; i += 1) {
  keyboard.push(arrAlphabet.slice(m, n));
  m = n;
  n = m + n - 1;
}

let word1 = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];

let word2 = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] +
    keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] +
    keyboard[0][4];

let word3 = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] +
    keyboard[2][5] + keyboard[0][2] + keyboard[0][3];

console.log(keyboard);
console.log(`${word1} ${word2} ${word3}!`);
console.log(`First word is ${word1}`);
console.log(`Second word is ${word2}`);
console.log(`Third word is ${word3}`);
