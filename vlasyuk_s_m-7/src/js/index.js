/*jshint esversion: 6 */

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};

const topRow = 12;
const middleRow = 11;
const bottomRow = 10;
const keyboard = document.querySelector('.keyboard');

let keyboardTopRow;
let keyboardMiddleRow;
let keyboardBottomRow;

function createKeyboardRow(name) {
    let div = document.querySelector(name);

    if (div) {
        return div;
    } else {
        div = document.createElement('div');
        div.classList.add('keyboardRow');
        keyboard.appendChild(div);
        return div;
    }
}

function createButton(rowName, position) {
    let button = document.createElement('button');

    button.classList.add('btn');
    button.innerHTML = lang.en[position];
    rowName.appendChild(button);
}

function createLayout() {

    keyboardTopRow = createKeyboardRow(keyboardTopRow);
    for (let i = 0; i < topRow; i++) {
        createButton(keyboardTopRow, i);
    }

    keyboardMiddleRow = createKeyboardRow(keyboardMiddleRow);
    for (let i = topRow, j = topRow + middleRow; i < j; i++) {
        createButton(keyboardMiddleRow, i);
    }

    keyboardBottomRow = createKeyboardRow(keyboardBottomRow);
    for (let i = topRow + middleRow, j = lang.en.length; i < j; i++) {
        createButton(keyboardBottomRow, i);
    }
}

let testButton = document.querySelector('.testFunction');
testButton.addEventListener("click", createLayout);