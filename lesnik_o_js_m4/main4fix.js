'use strict'

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

// TASK 1
function addKeyboardLayout(alphabet) {
    return [Array.from(alphabet.slice(0, 12)), Array.from(alphabet.slice(12, 23)), Array.from(alphabet.slice(23))];
}

let keyboard = addKeyboardLayout(alphabet);
console.log("Массив массивов клавиатурных строк", keyboard);

// TASK 2
// Варінт 1 - як проговорили, цей варіант не відповідає умовам завдання,
// бо не приймає аргументом числа 1, 2, 3, але не видаляла


// function getRandCharInRow() {
//     let rowNumber = prompt('Введите строку клавиатуры: 1, 2 или 3', ' ');

//     switch (rowNumber) {
//         case '1':
//             let arr1 = Array.from(alphabet.slice(0, 12));
//             let rand1 = Math.floor(Math.random() * arr1.length);
//             console.log("Случайный символ для верхнего ряда клавиатуры:", arr1[rand1]);
//             return arr1[rand1];

//             break;

//         case '2':
//             let arr2 = Array.from(alphabet.slice(12, 23));
//             let rand2 = Math.floor(Math.random() * arr2.length);
//             console.log("Случайный символ для среднего ряда клавиатуры:", arr2[rand2]);
//             return arr2[rand2];

//             break;

//         case '3':
//             let arr3 = Array.from(alphabet.slice(23));
//             let rand3 = Math.floor(Math.random() * arr3.length);
//             console.log("Случайный символ для нижнего ряд клавиатуры:", arr3[rand3]);
//             return arr3[rand3];
//             break;

//         default:
//             alert('Неизвестное значение, введите 1, 2 или 3');
//     }
// }
// getRandCharInRow();


// Варіант 2 - з іf та перевірками на числа, інші ніж 1, 2, 3

// function getRandCharInRow2(row) {
//     row = row - 1;   

//     if (row == 0) {
//         let arr1 = Array.from(alphabet.slice(0, 12));
//         let rand1 = Math.floor(Math.random() * arr1.length);
//         return arr1[rand1];

//     } else if (row == 1) {
//         let arr2 = Array.from(alphabet.slice(12, 23));
//         let rand2 = Math.floor(Math.random() * arr2.length)
//         return arr2[rand2];

//     } else if (row == 2) {
//         let arr3 = Array.from(alphabet.slice(23));
//         let rand3 = Math.floor(Math.random() * arr3.length);
//         return arr3[rand3];

//     } else alert('Неизвестное значение, введите 1, 2 или 3');
// }

// let result2 = getRandCharInRow2(3);
// console.log("result2", result2);


// Варіант 3 - найкоротший, але без перевірки на введення цифр, інших ніж 1, 2, 3

function getRandCharInRow3(row) {
    row = row - 1;
    let random = Math.floor(Math.random() * keyboard[row].length);
    return keyboard[row][random];
}

let resultCharInRow = getRandCharInRow3(3);
console.log("Случайная буква из выбранной Вами строки ", resultCharInRow);

// TASK 3
function getRandCharInAlph(arr) {
    let rand4 = Math.floor(Math.random() * arr.length);
    return arr[rand4];

}
let resultCharInAlph = getRandCharInAlph(alphabet);
console.log("Случайная буква из всего алфавита:", resultCharInAlph);