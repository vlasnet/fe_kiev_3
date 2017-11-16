'use strict'

// Task 1

const toprow = "qwertyuiop[]";
const midrow = "asdfghjkl;'\\";
const bottomrow = "zxcvbnm,./";

// Task 2

const toprowLength = toprow.length;
const midrowLength = midrow.length;
const bottomrowLength = bottomrow.length;

console.log("toprowLength", toprowLength);
console.log("midrowLength", midrowLength);
console.log("bottomrowLength", bottomrowLength);

// Task 3

console.log("Строка верхнего уровня: перввый символ \"" + toprow.charAt(0) + "\", последний символ \"" + toprow.charAt(toprowLength - 1) + "\" ");
console.log("Строка среднего уровня: перввый символ \"" + midrow.charAt(0) + "\", последний символ \"" + midrow.charAt(midrowLength - 1) + "\" ");
console.log("Строка нижнего уровня: перввый символ \"" + bottomrow.charAt(0) + "\", последний символ \"" + bottomrow.charAt(bottomrowLength - 1) + "\" ");

// Task 4

let fisrstSymbolSearch = toprow.indexOf('[');
console.log("Позиция в строке верхнего уровня", fisrstSymbolSearch);

let secondSymbolSearch = toprow.indexOf(']');
console.log("Позиция в строке верхнего уровня", secondSymbolSearch);

//дальше выовожу только в консоль
console.log("Позиция в строке среднего уровня", midrow.indexOf('['));
console.log("Позиция в строке среднего уровня", midrow.indexOf(']'));

console.log("Позиция в строке нижнего уровня", bottomrow.indexOf('['));
console.log("Позиция в строке нижнего уровня", bottomrow.indexOf(']'));

// Task 5

console.log(`Строка первого уровня: ${toprow}, ее длина: ${toprowLength} символов;`);
console.log(`Строка среднего уровня: ${midrow}, ее длина: ${midrowLength} символов;`);
console.log(`Строка нижнего уровня: ${bottomrow}, ее длина: ${bottomrowLength} символов;`);

//Шаблонные строки/интепрполяция очень понравилась, буду использовать,
// но это ведь эксперементальная технология пока что, не поддерживается в Saferi и IE