'use strict';
const stringOne = 'qwertyuiop[]\\',
    stringTwo = 'asdfghjkl;\'',
    stringThree = 'zxcvbnm,./',
    stringOneLength = stringOne.length,
    stringTwoLength = stringTwo.length,
    stringThreeLength = stringThree.length,
    position1 = stringOne.indexOf('['),
    position2 = stringOne.indexOf(']');
console.group('Strings length:')
console.log (`first string length = ${stringOneLength}`);
console.log (`second string length = ${stringTwoLength}`);
console.log (`third string length = ${stringThreeLength}`);
console.groupEnd();
console.group('First symbol in strings:');
console.log (`First symbol in first string is: ${stringOne.charAt(0)}`);
console.log (`First symbol in second string is: ${stringTwo.charAt(0)}`);
console.log (`First symbol in third string is: ${stringThree.charAt(0)}`);
console.groupEnd();
console.group('Last symbol in strings:')
console.log (`Last symbol in first string is: ${stringOne.charAt(12)}`);
console.log (`Last symbol in second string is: ${stringTwo.charAt(10)}`);
console.log (`Last symbol in third string is: ${stringThree.charAt(9)}`);
console.groupEnd();
console.group('Symbols position:');
console.log (`Symbol '[' is on ${position1} position`);
console.log (`Symbol ']' is on ${position2} position`);
console.groupEnd();
