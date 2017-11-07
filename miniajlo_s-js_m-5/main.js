'use strict';
const keyboard = {
    layouts: {
        en: {
            topRow: ['qwertyuiop[]\\'],
            middleRow: ['asdfghjkl;\''],
            bottomRow: ['zxcvbnm,./']
        },
        ru: {
            topRow: ['йцукенгшщзхъ\\'],
            middleRow: ['фывапролджэ'],
            bottomRow: ['ячсмитьбю.']
        },
        ua: {
            topRow: ['йцукенгшщзхїґ'],
            middleRow: ['фівапролджє'],
            bottomRow: ['ячсмитьбю/']
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};



(function chooseLanguage() {
    switch (prompt('Выберите ваш язык en-0, ru-1, ua-2', '')) {
        case '0':
            keyboard.currentLang = 'en';
            break;
        case '1':
            keyboard.currentLang = 'ru';
            break;
        case '2':
            keyboard.currentLang = 'ua';
            break;
        case null:
            break;
        default:
            alert('Выберите язык!');
            return chooseLanguage();
    }
})();


let alphabet = '';
let choosenLang = keyboard.layouts[keyboard.currentLang];

function getRandCharInAlph() {
    if (keyboard.currentLang != '') {
        for (let key in choosenLang) {
            alphabet += choosenLang[key];
        }
        let rand = Math.floor(Math.random() * (alphabet.length - 1));
        console.log(`Случайный символ из выбранного алфавита: ${alphabet[rand]}`);
    } else {
        return false;
    }
}

getRandCharInAlph();
