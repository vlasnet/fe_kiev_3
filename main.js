'use strict';

let keyTrainer = {

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
    checkNumberToTrain: function () {
        let number = prompt('Укажите количество символов для тренировки');
        if (!((number ^ 0) != number) && number > 0) {
            this.numberToTrain = number;
            console.log(keyTrainer.numberToTrain);
            return this;
        } else if (number === null) {
            return;
        } else {
            alert('Введите количество символов для тренирови');
            return checkNumberToTrain()
        }
    },
    nextChar: function (a) {
        let mistakes = 0;
        alert(`Утановите расскладку клавиатуры ${this.currentLang}`);
        for (let i = 0; i < a.length; i++) {
            let symbol = prompt(`введите символ: ${a[i]}`);
            if (symbol === null) {
                let toBreak = confirm('Вы хотите прервать тренировку?');
                if (toBreak === true) {
                    return false;
                } else {
                    i--;
                    continue;
                }
            } else if (symbol !== a[i]) {
                mistakes++;
            }
        }
        alert(`вы сделали ${mistakes} ошибок`);
    },
    getRandCharInAlph: function () {
        let alphabet = '',
            choosenLang = this.layouts[this.currentLang];

        if (this.currentLang != '') {
            for (let key in choosenLang) {
                alphabet += choosenLang[key];
            }

            for (let i = 0; i < this.numberToTrain; i++) {
                let rand = Math.floor(Math.random() * (alphabet.length - 1) + 1);
                randArray.push(alphabet[rand]);
                console.log(alphabet[rand]);
            }
            return this;
        } else {
            return false;
        }
    },
    currentLang: '',
    chooseLanguage: function() {
        switch (prompt('Выберите ваш язык en-0, ru-1, ua-2', '')) {
            case '0':
                this.currentLang = 'en';
                return this;
                break;
            case '1':
                this.currentLang = 'ru';
                return this;
                break;
            case '2':
                this.currentLang = 'ua';
                return this;
                break;
            case null:
                break;
            default:
                alert('Выберите язык!');
                return this.chooseLanguage();
        }
    }
};

let randArray = [];
keyTrainer.chooseLanguage()
              .checkNumberToTrain()
                  .getRandCharInAlph()
                      .nextChar(randArray);