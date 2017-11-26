//Task-1
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
    return [Array.from(alphabet.slice(0,12)), Array.from(alphabet.slice(12,23)), Array.from(alphabet.slice(23))];
}
const keyboard = addKeyboardLayout(alphabet);
console.log('keyboard',keyboard);

//Task-2
function getRandCharInRow(row) {
    row = row - 1;
    console.log('Указаная строка состоит из: ' + keyboard[row]);
    let max = keyboard[row].length - 1,
        rand = Math.floor((Math.random() * max) + 1);   let rand1 = Math.floor(Math.random() * row.length);
    return keyboard[row][rand];
}
button.addEventListener('click', function() {
    let number = prompt('Введите номер строки от 1 до 3');
    if (number > 0 && number <= 3 && number != '') {
        return getRandCharInRow(number);
    } else {
        alert('Такой строки нет')
    }
});

//Task-3
function getRandCharInAlph(row) {
    let randSymb = Math.floor(Math.random() * row.length);
    return row [randSymb];
}
getRandCharInAlph(alphabet);


