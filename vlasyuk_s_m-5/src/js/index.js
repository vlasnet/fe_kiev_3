/*jshint esversion: 6 */

const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const keyboard = {
    layouts: {},
    langs: [],
    currentLang: '',
    addKeyboardLayout: function (alphabet, lang) {
        
        this.langs.push(lang);

        this.layouts[lang] = {
        topRow: Array.from(alphabet.slice(0, 12)),
        middleRow: Array.from(alphabet.slice(12, 23)),
        bottomRow: Array.from(alphabet.slice(23))
        };
    }
};

keyboard.addKeyboardLayout(alphabetEn, "en");
keyboard.addKeyboardLayout(alphabetRu, "ru");
keyboard.addKeyboardLayout(alphabetUa, "ua");

console.log(keyboard);

document.querySelector(".task").addEventListener("click", getRandCharInAlph);

function inputLanguage() {
    let language;
    let flag = true;
  
    do {
        language = prompt("Введите код (0, 1 или 2) выбранного языка: en-0, ru-1, ua-2", "");

        if (language==null) {
            break;
        } else if (language == "0" || language == "1" || language == "2") {
            flag = false;
            keyboard.currentLang = keyboard.langs[language];
            alert(`Вы выбрали язык: ${keyboard.currentLang}`);
        } else {
            alert(`Выбран недоступный язык: ${language} !`);
            continue;        
        }       
    } while (flag);  

    return  keyboard.currentLang;
}

function getRandCharInAlph() {
    let lang = inputLanguage();
    let alphabet;
    let keys;
    let keyboardString;
    let letterPosition;

    switch(lang) {
        case "en": {
            alphabet = keyboard.layouts.en;
        } break;
        case "ru": {
            alphabet = keyboard.layouts.ru;
        } break;        
        case "ua": {
            alphabet = keyboard.layouts.ua;
        } break;
    }
    
    keys = Object.keys(alphabet);
    keyboardString = alphabet[keys[Math.floor(0 + Math.random() * (keys.length))]];    
    letterPosition = Math.floor(0 + Math.random() * keyboardString.length);

    return alert(keyboardString[letterPosition]);
}
