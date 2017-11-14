'use strict';

const firstKeysLine = 'qwertyuiop[]';
const secondKeysLine = 'asdfghjkl;\'';
const thirdKeysLine = 'zxcvbnm,./';

const lengthFirstLine = firstKeysLine.length;
const lengthSecondLine = secondKeysLine.length;
const lengthThirdLine = thirdKeysLine.length;

console.log (`lengthFirstLine = ${lengthFirstLine}`);
console.log (`lengthSecondLine = ${lengthSecondLine}`);
console.log (`lengthThirdLine = ${lengthThirdLine}`);

console.log(`First Symbol of the first keys line is ${firstKeysLine.charAt(0)}`);
console.log(`Last Symbol of the first keys line is ${firstKeysLine.charAt(lengthFirstLine - 1)}`);
console.log(`First Symbol of the second keys line is ${secondKeysLine.charAt(0)}`);
console.log(`Last Symbol of the second keys line is ${secondKeysLine.charAt(lengthSecondLine - 1)}`);
console.log(`First Symbol of the third keys line is ${thirdKeysLine.charAt(0)}`);
console.log(`Last Symbol of the third keys line is ${thirdKeysLine.charAt(lengthThirdLine - 1)}`);

const symbolIndex1 = firstKeysLine.indexOf('[');
const symbolIndex2 = firstKeysLine.indexOf(']');

console.log (`symbolIndex1 = ${symbolIndex1}`);
console.log (`symbolIndex2 = ${symbolIndex2}`);
