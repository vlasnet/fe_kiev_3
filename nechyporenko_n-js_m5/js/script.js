'use strict';

let lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
  ru: "йцукенгшщзхъфывапролджэячсмитьбю.",
  ua: "йцукенгшщзхїфівапролджєячсмитьбю."
}
let langName = [];

function createLayout() {
  for (let key in lang) {
      lang[key] = {
      topRow: lang[key].split('').slice(0, 12),
      middleRow: lang[key].split('').slice(12, 23),
      bottomRow: lang[key].split('').slice(23)
      };
      langName.push(`${key}`);
  }
  return lang;
};

let keyboard = {
    layouts: createLayout(),
    langs: langName,
    currentLang: ''
};
console.log(keyboard);

function choseLanguage() {
  // debugger;
  let userLang = prompt('Please chose your language: en - 0, ru - 1, ua - 2');

  if (userLang != '' && userLang >= 0 && userLang <= 2 && Number.isInteger(+userLang)) {
      keyboard.currentLang = keyboard.langs[userLang];
      getRandCharInAlph(keyboard.currentLang);
  } else if (userLang == null){
    return;
  } else {
      alert('This language is not available. Please, chose language: en - 0, ru - 1, ua - 2');
      choseLanguage();
  }
}

function getRandIndex(max) {
    let randIndex = Math.floor(Math.random()*max);
    return randIndex;
};

function getRandCharInAlph(lg) {
    let allKeyboardArr = Array.from(keyboard.layout.lg.topRow.concat(keyboard.layout.lg.middleRow.concat(keyboard.layout.lg.bottomRow)));
    let randInAll = getRandIndex(allKeyboardArr.length);
    console.log(`Random character in all Alphabet is "${allKeyboardArr[randInAll]}"`);
    return allKeyboardArr[randInAll];
};

choseLanguage();
//
// function getRandCharInRow(row) {
//     row -= 1;
//     let charIndex = getRandIndex(keyboard[row].length);
//
//     console.log(`Random Char in the ${row+1} row is "${keyboard[row][charIndex]}"`);
//     return keyboard[row][charIndex];
// };
//
// document.body.addEventListener("click", function(event) {
//     let target = event.target;
//     for (let key in buttons) {
//         if (target.classList.contains(key)) {
//             buttons[key](event);
//         };
//     };
// });
