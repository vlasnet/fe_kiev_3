const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const ru = "йцукенгшщзхъфывапролджэячсмитьбю.";
const ua = "йцукенгшщзхїфівапролджєячсмитьбю.";

const keyTrainer = {
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

    chooseLanguage: function() {
        let language = prompt('Введите строку клавиатуры: 0, 1 или 2, где 0-en, 1-ru, 2- ua', ' ');

        switch (language) {
            case '0':
                this.currentLang = 'en';
                alert('Вы выбрали английский язык');
                return en;
                break;

            case '1':
              this.currentLang = 'ru';
                alert('Вы выбрали русский язык');
                return ru;
                break;

            case '2':
                this.currentLang = 'ua';
                alert('Вы выбрали украинский язык');
                return ua;
                break;

            case null:
                break;

            default:
                alert('Выбран недоступный язык, попробуйте еще раз!');
                this.chooseLanguage();
        }
    },

    setNumberOfKeys: function() {
        let numberofkeys = prompt("Выберите количество символов для тренировки", '');

        if ((isNaN(numberofkeys) || numberofkeys <= 0 || numberofkeys % 1 !== 0 || numberofkeys > 33) && (numberofkeys !== null)) {
            alert('Введите количество символов от 1 до 33');
            this.setNumberOfKeys();

        } else console.log(`Вы выбрали ${numberofkeys} символа(ов)`);
        return numberofkeys;
    },

    nextChar: function() {
        let lang = this.chooseLanguage();
        let number = this.setNumberOfKeys();
        let rand;
        let resultedkeys;
        let errorscount = 0;
        let insertedkey;

        for (let i = 0; i < number; i++) {
            rand = Math.floor(Math.random() * lang.length);
            randomkey = lang[rand];
            console.log(randomkey);
            insertedkey = prompt(randomkey, '');

            if (randomkey == insertedkey) {
                console.log(`Введен корректный символ ${randomkey}`);

            } else if (insertedkey === null) {
                console.log('Тренировка прервана');
                break;

            } else if (randomkey !== insertedkey) {
                console.log(`Введен некорректный символ ${insertedkey} вместо символа ${randomkey}`);
                errorscount += 1;
            }

        }

        console.log(`У Вас ${errorscount} ошибок(ошибки)`);
    }

}

keyTrainer.addKeyboardLayout(en, 'en');
keyTrainer.addKeyboardLayout(ru, 'ru');
keyTrainer.addKeyboardLayout(ua, 'ua');
keyTrainer.nextChar();