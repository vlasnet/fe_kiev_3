/*jshint esversion: 6 */

const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";

const keyTrainer = {
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
    },

     inputLanguage: function() {
        let language;
        let flag = true;
      
        do {
            language = prompt("Введите код (0, 1 или 2) выбранного языка: en-0, ru-1, ua-2", "");

            if (language==null) {
                break;
            } else if (language == "0" || language == "1" || language == "2") {
                flag = false;
                this.currentLang = this.langs[language];
                console.log(`Вы выбрали язык: ${keyTrainer.currentLang}`);
            } else {
                alert(`Выбран недоступный язык: ${language} !`);
                continue;        
            }       
        } while (flag);  

        return  this.currentLang;
    },

    inputNumber: function() {
        let number = prompt("Введите количество символов для тренировки", '');

        if ((isNaN(number) || number <= 0 || number % 1 !== 0 || number > 33) && (number !== null)) {
            alert('Введите количество символов от 1 до 33');
            this.inputNumber();

        } else console.log(`Вы выбрали ${number} символов`);
        return number;
    },

    nextChar: function() {    
        let lang = this.inputLanguage();    
        let number = this.inputNumber();    
        let alphabet;
        let keys;
        let keyboardString;
        let letterPosition;
        let mistakes = 0;
        let checkedLetter;
        let inputtedLetter;

        switch(lang) {
            case "en": {
                alphabet = this.layouts.en;
            } break;
            case "ru": {
                alphabet = this.layouts.ru;
            } break;        
            case "ua": {
                alphabet = this.layouts.ua;
            } break;
        }
        
        keys = Object.keys(alphabet);

        do {
            keyboardString = alphabet[keys[Math.floor(0 + Math.random() * (keys.length))]];    
            letterPosition = Math.floor(0 + Math.random() * keyboardString.length);
            checkedLetter = keyboardString[letterPosition];
            inputtedLetter = prompt(`Введите символ: ${checkedLetter}`, '');

            if (inputtedLetter === null) {
                console.log("Тренировка прервана пользователем");
                break;
            } else if (inputtedLetter == checkedLetter) {
                console.log(`Введен правильный символ: ${checkedLetter}!`);
            } else if (inputtedLetter != checkedLetter) {
                console.log(`Введен неверный символ: ${inputtedLetter}! Проверяемый символ: ${checkedLetter}.`);
                mistakes++;
            }

            number--;
        } while (number > 0);
        

        return console.log(`Вы сделали ${mistakes} ошибок`);
    }
};

keyTrainer.addKeyboardLayout(alphabetEn, "en");
keyTrainer.addKeyboardLayout(alphabetRu, "ru");
keyTrainer.addKeyboardLayout(alphabetUa, "ua");

keyTrainer.nextChar();