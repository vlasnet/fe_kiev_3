'use strict';

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [];
let btn = document.querySelector('.strings');

function addKeyboardLayout(a) {
    keyboard.push(a.slice(0, 12));
    keyboard.push(a.slice(12, 23));
    keyboard.push(a.slice(23));
    return keyboard;
}
addKeyboardLayout(alphabet);
console.log('Alphabet: ' + keyboard);

// task - 2
function getRandCharInRow(row) {
    row = row - 1;
    console.log('Указаная строка состоит из: ' + keyboard[row]);
    let max = keyboard[row].length - 1,
        rand = Math.floor((Math.random() * max) + 1);
    console.log('Длина выбраной строки ' + max);
    console.log('Выбран символ с индексом ' + rand);
    console.log('Выбранный символ: ' + keyboard[row][rand]);
}
btn.addEventListener('click', function() {
    let number = prompt('Введите номер строки от 1 до 3');
    if (number > 0 && number <= 3 && number != '') {
        return getRandCharInRow(number);
    } else {
        alert('Вы ввели не существующую строку!')
    }
});

// task - 3

let symbol = document.querySelector('.symbol');
symbol.addEventListener('click', function getRandCharInAlph() {
    let row = Math.floor(Math.random() * 3);
    console.log('Выбрана строка: ' + (row + 1));
    let rand = Math.floor((Math.random() * (keyboard[row].length - 1)));
    console.log('Из строки: ' + (row + 1) + ' выбран символ с индексом: ' + (rand + 1));
    return console.log('Выбранный символ: ' + keyboard[row][rand]);
});
