const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = addKeyboardLayout(alphabet);

function addKeyboardLayout(alphabet) {
    let keysArr = [[], [], []];
    let findChar = (x) => alphabet.indexOf(x);

    for (let i = 0; i < alphabet.length; i++) {
        if (i <= 11) {
            keysArr[0][0] = alphabet.slice(0, findChar('a'));
        } else if (i >= 12 && i <= 22) {
            keysArr[1][0] = alphabet.slice(findChar('a'), findChar('z'));
        } else if (i >= 23) {
            keysArr[2][0] = alphabet.slice(findChar('z'));
        };
    };

    return keysArr;
};

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function getRandCharInRow(row) {
    row = row - 1;
    let max = keyboard[row][0].length;
    let min = 0;
    let randomNum = getRandomNum(min, max);
    return keyboard[row][0][randomNum];
};

function getRandCharInAlph() {
    let row = getRandomNum(0, 3);
    let max = keyboard[row][0].length;
    let min = 0;
    let randomNum = getRandomNum(min, max);
    return keyboard[row][0][randomNum];
};

let testFn = function(n) {
    let i;
    switch (n) {

        case undefined:
            i = 50;
            console.groupCollapsed('test getRandCharInAlph()');
            while (i > 0) {
                console.log('Random character = ' + getRandCharInAlph());
                i--;
            }
            console.groupEnd();
            break;

        case 1:
        case 2:
        case 3:
            i = 50;
            console.groupCollapsed('test getRandCharInRow(' + n + ')');
            while (i > 0) {
                console.log('Row ' + n + ' random character = ' + getRandCharInRow(n));
                i--;
            }
            console.groupEnd();
            break;

        default:
    };
};

testFn();
testFn(1);
testFn(2);
testFn(3);
