(function() {
  'use strict';

  const keyTrainer = {
    layouts: {
      en: {
        topRow: ['qwertyuiop[]'],
        middleRow: ['asdfghjkl;\''],
        bottomRow: ['zxcvbnm,./']
      },
      ru: {
        topRow: ['йцукенгшщзхъ'],
        middleRow: ['фывапролджэ'],
        bottomRow: ['ячсмитьбю.']
      },
      ua: {
        topRow: ['йцукенгшщзхї'],
        middleRow: ['фівапролджє'],
        bottomRow: ['ячсмитьбю.']
      }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: '',

    selectLanguage: function numberLangs() {
      switch ( +prompt('Enter the Langs,(en - 0)(ru - 1)(ua - 2)?')) {
        case 0:
          this.currentLang = 'en';
          break;
        case 1:
          this.currentLang = 'ru';
          break;
        case 2:
          this.currentLang = 'ua';
          break;
        case null:
          break;
        default:
          alert("Language not found, try again!");
          this.selectLanguage();
      }
    },

    randomElement: function getRandomElement(row) {
      let string = this.layouts[this.currentLang][row][0];
      let randomNumberForElement = (Math.floor(Math.random() * string.length));
      let randomElement = string.charAt(randomNumberForElement);
      return randomElement
    },

    randChar: function getRandCharInAlph() {
      let randomNumberForAlphabet = (Math.floor(Math.random() * 3) + 1);

      switch (randomNumberForAlphabet) {
        case 1:
          return this.randomElement('topRow');
          break
        case 2:
          return this.randomElement('middleRow');
          break
        case 3:
          return this.randomElement('bottomRow');
          break
      }
      return
    },

    nextChar: function nextCharecter() {
      let errors = 0;
    let howManyLetters = +prompt('how many letters yow wanna training?');
    if (howManyLetters > 0 && howManyLetters !== "") {
          for (let i = 0; i < howManyLetters; i++) {
              let randomLetter = this.randChar();
                let forPrompt = prompt(randomLetter);
                  if (randomLetter !== forPrompt) {
                    errors += 1;
                    }
                  }
                } else {
                  alert('enter the number')
                  this.nextChar();
                }
                // console.log('errors = ',errors)
                return errors, console.log('errors = ', errors);
              }
}

  keyTrainer.selectLanguage();
  keyTrainer.randChar();


  let bindNextChar = keyTrainer.nextChar.bind(keyTrainer);
  let button = document.getElementById('getNumbChar');
      button.addEventListener('click', bindNextChar);

})();
