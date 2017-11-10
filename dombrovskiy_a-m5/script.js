(function () {
  'use strict';

const keyboard = {
    layouts: {
        en: {
            topRow: ['qwertyuiop[]'],
            middleRow: ['asdfghjkl;'],
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
    currentLang: ''
};


function numberLangs() {
 switch (+prompt('Enter the Langs,(en - 0)(ru - 1)(ua - 2)?')) {
    case 0:
            keyboard.currentLang = 'en';
            break;
    case 1:
            keyboard.currentLang = 'ru';
            break;
    case 2:
            keyboard.currentLang = 'ua';
            break;
    case null:
            break;
    default:
            alert("Language not found, try again!");
            numberLangs();
  }
}

numberLangs();

function getRandomElement (obj, row) {
  let string = obj.layouts[obj.currentLang][row][0];
  let randomNumberForElement = (Math.floor(Math.random()*string.length));
  let randomElement = string.charAt(randomNumberForElement);
  console.log(randomElement);
}

function getRandCharInAlph() {
  let randomNumberForAlphabet = (Math.floor(Math.random() * 3) + 1);

  switch (randomNumberForAlphabet) {
    case 1:
          getRandomElement(keyboard, 'topRow');
          break
    case 2:
          getRandomElement(keyboard, 'middleRow');
          break
    case 3:
          getRandomElement(keyboard, 'bottomRow');
          break
  }
}


getRandCharInAlph(keyboard);

})();
