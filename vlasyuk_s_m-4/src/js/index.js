/*jshint esversion: 6 */ 

const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
let keybord;

document.querySelector(".task1").addEventListener("click", 
                (function(){alert(`Алфавит: ${alphabetEn} 
                \nпервая строка клавиатуры: ${addKeyboardLayout(alphabetEn)[0]}; 
                \nвторая строка клавиатуры: ${addKeyboardLayout(alphabetEn)[1]}; 
                \nтретья строка клавиатуры: ${addKeyboardLayout(alphabetEn)[2]}`);})); 

document.querySelector(".task2").addEventListener("click", (function(){alert(`Случайная буква из второй строки: ${getRandCharInRow(1)}`);}));

document.querySelector(".task3").addEventListener("click", (function(){alert(`Алфавит: ${alphabetEn}
    \nСлучайная буква из всего алфавита: ${getRandCharInAlph()}`);}));

function addKeyboardLayout(alphabet) {
    keybord = [[alphabet.slice(0, 12)],[alphabet.slice(12, 23)],[alphabet.slice(23)]];
    
    return keybord;  
}

function getRandCharInRow(row) {
    addKeyboardLayout(alphabetEn);

    let letterPosition = Math.floor(0 + Math.random() * (keybord[row].toString().split("").length));
    return keybord[row].toString().split("")[letterPosition];
}

function getRandCharInAlph() {
    addKeyboardLayout(alphabetEn);

    let letterPosition = Math.floor(0 + Math.random() * (keybord.toString().split("").length));
    return keybord.toString().split("")[letterPosition];
}
