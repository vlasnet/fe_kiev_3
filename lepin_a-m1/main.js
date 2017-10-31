'use strict';

// task1
const str1 = 'qwertyuiop[]';
const str2 = "asdfghjkl;'\\";
const str3 = 'zxcvbnm,./';

// task2
const str1len = str1.length;
const str2len = str2.length;
const str3len = str3.length;

// task3
console.log('first symbol in str1 = ', str1[0], ', second symbol in str1 = ', str1.charAt(str1len - 1));
console.log('first symbol in str2 = ', str2[0], ', second symbol in str2 = ', str2.charAt(str2len - 1));
console.log('first symbol in str3 = ', str3[0], ', second symbol in str3 = ', str3.charAt(str3len - 1));

// task4
let openSB = str1.indexOf('[');
let closeSB = str1.indexOf(']');

// task5
let pre = document.createElement('pre');
pre.innerHTML = `str1 = ${str1}<br>
str2 = ${str2}<br>
str3 = ${str3}<br>
str1len = ${str1len}<br>
str2len = ${str2len}<br>
str3len = ${str3len}<br>
first symbol in str1 = ${str1[0]}, last symbol in str1 = ${str1.charAt(str1len - 1)}<br>
first symbol in str2 = ${str2[0]}, last symbol in str2 = ${str2.charAt(str2len - 1)}<br>
first symbol in str3 = ${str3[0]}, last symbol in str3 = ${str3.charAt(str3len - 1)}<br>
openSB = ${openSB}<br>
closeSB = ${closeSB}`;

document.querySelector('body').appendChild(pre);
console.trace()
