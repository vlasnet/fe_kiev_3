'use strict';
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [];
keyboard.push(alphabet.slice(0, 12));
keyboard.push(alphabet.slice(12, 23));
keyboard.push(alphabet.slice(23, ));
console.log (keyboard);
console.log (`Вторая строка клавиатуры: ${keyboard[1]}`);

let hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] +
keyboard[0][8];
console.log(hello);

let javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] +
keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] +
keyboard[0][4];
console.log(javascript);

let trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] +
keyboard[2][5] + keyboard[0][2] + keyboard[0][3];
console.log(trainer);
