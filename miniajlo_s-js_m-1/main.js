'use strict';
const stringOne = 'qwertyuiop[]\\',
    stringTwo = 'asdfghjkl;\'',
    stringThree = 'zxcvbnm,./',
    stringOneLength = stringOne.length,
    stringTwoLength = stringTwo.length,
    stringThreeLength = stringThree.length,
    position1 = stringOne.indexOf('['),
    position2 = stringOne.indexOf(']');
console.log(`stringOne length = ${stringOneLength}, stringTwo length = ${stringTwoLength}, stringThree length = ${stringThreeLength}`);
console.log(`First symbol: stringOne = ${stringOne.charAt(0)}, stringTwo = ${stringTwo.charAt(0)}, stringThree = ${stringThree.charAt(0)} `);
console.log(`Last symbol: stringOne = ${stringOne.charAt(12)}, stringTwo = ${stringTwo.charAt(10)}, stringThree = ${stringThree.charAt(9)}`);
console.log(`Symbols position: Symbol '[' is on ${position1} position,
Symbol ']' is on ${position2} position`);
