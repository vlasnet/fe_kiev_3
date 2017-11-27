'use strict';

//Task 1
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [];

function addKeyboardLayout(symbols) {
    for (let i = 0, m = 0, n = 12; i < 3; i += 1) {
        keyboard.push(symbols.split('').slice(m, n));
        m = n;
        n = m + n - 1;
    };
    return keyboard;
}

console.log(addKeyboardLayout(alphabet));

//Task 2 & 3
let buttons = {
    btn_task2: (event) => {
        let row = prompt('Enter number of row from 1 to 3:');

        if (row != '' && row > 0 && row <= 3) {
            return getRandCharInRow(row);
        } else {
            alert('You entered wrong number of row. Please, enter number of row from 1 to 3');
            buttons.btn_task2();
        }
    },
    btn_task3: (event) => {
        return getRandCharInAlph();
    }
};


function getRandIndex(max) {
    let randIndex = Math.floor(Math.random() * (max + 1));
    return randIndex;
};

function getRandCharInRow(row) {
    row -= 1;
    let charIndex = getRandIndex(keyboard[row].length);

    console.log(`Random Char in the ${row+1} row is "${keyboard[row][charIndex]}"`);
    return keyboard[row][charIndex];
};

function getRandCharInAlph() {
    let allKeyboardArr = Array.from(keyboard.join("")).filter(n => n != ',');
    let randInAll = getRandIndex(allKeyboardArr.length);

    console.log(`Random character in all Alphabet is "${allKeyboardArr[randInAll]}"`);
    return allKeyboardArr[randInAll];
};

document.body.addEventListener("click", function(event) {
    let target = event.target;
    for (let key in buttons) {
        if (target.classList.contains(key)) {
            buttons[key](event);
        };
    };
});
