'use strict';
//Task1
const topCase = 'qwertyuiop[]';
const middleCase = 'asdfghjkl;\'';
const lowCase = 'zxcvbnm,./';
//Task2
const topCaseLength = topCase.length;
const middleCaseLength = middleCase.length;
const lowCaseLength = lowCase.length;
//Task3
console.log('Topcase string first sign:' + ' ' + topCase.charAt(0) + ';  ' + 'topcase string last sign:' + ' ' +
    topCase.charAt(topCaseLength - 1));
console.log('Middlecase string first sign:' + ' ' + middleCase.charAt(0) + ';  ' + 'middlecase string last sign:' + ' ' +
    middleCase.charAt(middleCaseLength - 1));
console.log('Lowcase string first sign:' + ' ' + lowCase.charAt(0) + ';  ' + 'lowcase string last sign:' + ' ' +
    lowCase.charAt(lowCaseLength - 1));
//Task4
let searchOne = topCase.indexOf('[');
console.log(searchOne);
let searchTwo = topCase.indexOf(']');
console.log(searchTwo);
//Task5
console.log(`Topcase string: ${topCase} `);
console.log(`Topcase string length: ${topCaseLength}`);
console.log(`Middlecase string: ${middleCase}`);
console.log(`Middlecase string length: ${middleCaseLength}`);
console.log(`Lowcase string: ${lowCase}`);
console.log(`Lowcase string length: ${lowCaseLength}`);