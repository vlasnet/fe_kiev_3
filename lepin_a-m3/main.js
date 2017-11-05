'use wordict';

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [[], [], []];
let word1, word2, word3;
let findChar = (x) => alphabet.indexOf(x);

keyboard[0][0] = alphabet.slice(0, findChar('a'));
keyboard[1][0] = alphabet.slice(findChar('a'), findChar('z'));
keyboard[2][0] = alphabet.slice(findChar('z'));

word1 = keyboard[1][0][5] + keyboard[0][0][2] + keyboard[1][0][8] + keyboard[1][0][8] + keyboard[0][0][8];
word2 = keyboard[1][0][6] + keyboard[1][0][0] + keyboard[2][0][3] + keyboard[1][0][0] + keyboard[1][0][1] + keyboard[2][0][2] + keyboard[0][0][3] + keyboard[0][0][7] + keyboard[0][0][9] + keyboard[0][0][4];
word3 = keyboard[0][0][4] + keyboard[0][0][3] + keyboard[1][0][0] + keyboard[0][0][7] + keyboard[2][0][5] + keyboard[0][0][2] + keyboard[0][0][3];

console.log(word1);
console.log(word2);
console.log(word3);
