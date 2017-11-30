'use strict'

const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const ru = "йцукенгшщзхъфывапролджэячсмитьбю.";
const ua = "йцукенгшщзхїфівапролджєячсмитьбю.";

const keyboard = {
    layouts: {},
    langs: [],
    currentLang: '',

    addKeyboardLayout: function(alphabet, lang) {

        this.langs.push(lang);
        this.layouts[lang] = {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }

        this.layouts[lang].topRow = Array.from(alphabet.slice(0, 12));
        this.layouts[lang].middleRow = Array.from(alphabet.slice(12, 23));
        this.layouts[lang].bottomRow = Array.from(alphabet.slice(23));
    },
}

keyboard.addKeyboardLayout(en, 'en');
keyboard.addKeyboardLayout(ru, 'ru');
keyboard.addKeyboardLayout(ua, 'ua');
console.log("keyboard", keyboard);

function chooseLanguage() {
    let language = prompt('Введите строку клавиатуры: 0, 1 или 2, где 0-en, 1-ru, 2- ua', ' ');

    switch (language) {
        case '0':
            keyboard.currentLang = 'en';
            alert('Вы выбрали английский язык');
            break;

        case '1':
            keyboard.currentLang = 'ru';
            alert('Вы выбрали русский язык');
            break;

        case '2':
            keyboard.currentLang = 'ua';
            alert('Вы выбрали украинский язык');
            break;

        case null:
            break;

        default:
            alert('Выбран недоступный язык, попробуйте еще раз!');
            chooseLanguage();
    }
}
chooseLanguage();


function getRandCharInAlph(lang) {
    let rand4 = Math.floor(Math.random() * lang.length);
    return lang[rand4];
}

let resultCharInAlph = getRandCharInAlph(ua);
console.log("Случайная буква из выбранного алфавита:", resultCharInAlph);
