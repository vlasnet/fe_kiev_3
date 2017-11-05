const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const ru = "йцукенгшщзхъфывапролджэячсмитьбю.";
const ua = "йцукенгшщзхїфівапролджєячсмитьбю.";

const keyboard = {
    layouts: {},
    langs: [],
    currentLang: '',
    addKeyboardLayout: function (alphabet, lang) {
        let findChar = (x) => alphabet.indexOf(x);
        this.langs.push(lang);
        this.layouts[lang] = {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
        this.layouts[lang].topRow[0] = alphabet.slice(0, findChar('a'));
        this.layouts[lang].middleRow[0] = alphabet.slice(findChar('a'), findChar('z'));
        this.layouts[lang].bottomRow[0] = alphabet.slice(findChar('z'));
    }
}

keyboard.addKeyboardLayout(en, 'en');
keyboard.addKeyboardLayout(ru, 'ru');
keyboard.addKeyboardLayout(ua, 'ua');

function chooseLang () {
    switch (prompt('Choose a language... \n 0-en, 1-ru, 2-ua' , '')) {
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
            alert("You've choosen an unavailable language.");
            chooseLang();
    }
}

chooseLang();

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandCharInAlph() {
    let langObj = keyboard.layouts[keyboard.currentLang];
    let result = [];

    for (let key in langObj) {
        if (langObj.hasOwnProperty(key)) {
            result += langObj[key].reduce((acc, next) => acc + next);
        }
    }

    return result.charAt(getRandomNum(0, result.length));
}

let testFn = function() {
    let i = 50;

    console.groupCollapsed('test getRandCharInAlph()');
    while (i > 0) {
        console.log('Random character = ' + getRandCharInAlph());
        i--;
    }
    console.groupEnd();
}

testFn();
