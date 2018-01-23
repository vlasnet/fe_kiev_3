/*jshint esversion: 6 */

const FIRST_ROW = "qwertyuiop[]";
const SECOND_ROW = "asdfghjkl;'";
const THIRD_ROW = "zxcvbnm,./";

const FIRST_ROW_LENGTH = FIRST_ROW.length;
const SECOND_ROW_LENGTH = SECOND_ROW.length;
const THIRD_ROW_LENGTH = THIRD_ROW.length;

console.log("Первый символ первой строки: " + FIRST_ROW.charAt(0) + "\nПоследний символ первой строки: " + FIRST_ROW.charAt(FIRST_ROW_LENGTH - 1));
console.log("Первый символ второй строки: " + SECOND_ROW.charAt(0) + "\nПоследний символ второй строки: " + SECOND_ROW.charAt(SECOND_ROW_LENGTH - 1));
console.log("Первый символ третьей строки: " + THIRD_ROW.charAt(0) + "\nПоследний символ третьей строки: " + THIRD_ROW.charAt(THIRD_ROW_LENGTH - 1));

var firstElementPosition, secondElementPosition;

firstElementPosition = FIRST_ROW.indexOf("[");
secondElementPosition = FIRST_ROW.indexOf("]");

document.getElementById("result").innerText = `
FIRST_ROW = ${FIRST_ROW}
SECOND_ROW = ${SECOND_ROW}
THIRD_ROW = ${THIRD_ROW}

FIRST_ROW_LENGTH = ${FIRST_ROW_LENGTH} символов
SECOND_ROW_LENGTH = ${SECOND_ROW_LENGTH} символов
THIRD_ROW_LENGTH = ${THIRD_ROW_LENGTH} символов

Первый символ первой строки: ${FIRST_ROW.charAt(0)}
Последний символ первой строки: ${FIRST_ROW.charAt(FIRST_ROW_LENGTH - 1)}
Первый символ второй строки: ${SECOND_ROW.charAt(0)}
Последний символ второй строки: ${SECOND_ROW.charAt(SECOND_ROW_LENGTH - 1)}
Первый символ третьей строки: ${THIRD_ROW.charAt(0)}
Последний символ третьей строки: ${THIRD_ROW.charAt(THIRD_ROW_LENGTH - 1)}

Позиция символа [ = ${firstElementPosition}
Позиция символа ] = ${secondElementPosition}
`; 