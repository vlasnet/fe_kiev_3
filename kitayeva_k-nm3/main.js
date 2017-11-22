const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function slice(arr) {
    return [arr.slice(0,12), arr.slice(12,23), arr.slice(23)];
}
const keyboard = slice(alphabet);
console.log(keyboard);
const hello = keyboard[1][5] + keyboard[0][2] +  keyboard[1][8] +  keyboard[1][8] + keyboard[0][8];
console.log(hello);
const javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
console.log(javascript);
const trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];
console.log(trainer);