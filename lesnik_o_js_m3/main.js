'use strict'

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function splitArray(array) {
    return [array.slice(0, 12), array.slice(12, 23), array.slice(23)];
}

const keyboard = splitArray(alphabet);
console.log(keyboard);

const hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
console.log(hello);

const javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] +
    keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] +
    keyboard[0][4];
console.log(javascript);

const trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] +
    keyboard[2][5] + keyboard[0][2] + keyboard[0][3];
console.log(trainer);
