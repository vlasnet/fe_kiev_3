'use strict'

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
    return [Array.from(alphabet.slice(0, 12)), Array.from(alphabet.slice(12, 23)), Array.from(alphabet.slice(23))];
}

const keyboard = addKeyboardLayout(alphabet);
console.log("keyboard", keyboard);

function getRandCharInRow(arr1, arr2, arr3) {
    let rowNumber = prompt('Введите строку клавиатуры: 1, 2 или 3', ' ');

    switch (rowNumber) {
        case '1':
            let rand = Math.floor(Math.random() * arr1.length);
            console.log("Случайный символ для верхнего ряда клавиатуры:", arr1[rand]);
            break;

        case '2':
            let rand2 = Math.floor(Math.random() * arr2.length);
            console.log("Случайный символ для среднего ряда клавиатуры:", arr2[rand2]);
            break;

        case '3':
            let rand3 = Math.floor(Math.random() * arr3.length);
            console.log("Случайный символ для нижнего ряд клавиатуры:", arr3[rand3]);
            break;

        default:
            alert('Неизвестное значение, введите 1, 2 или 3');
    }
}
getRandCharInRow(keyboard[0], keyboard[1], keyboard[2]);

function getRandCharInAlph(arr) {
    let rand4 = Math.floor(Math.random() * arr.length);
    console.log("Случайный символ для keyboard:", arr[rand4]);
}
getRandCharInAlph(alphabet);
