'use strict';

let lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
  ru: "йцукенгшщзхъфывапролджэячсмитьбю.",
  ua: "йцукенгшщзхїфівапролджєячсмитьбю."
};
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
// console.log(keyboard);

(function choseLanguage() {
  let userLang = prompt('Please chose your language: en - 0, ru - 1, ua - 2');

  if (userLang == null) {
    return;
  } else if (userLang != '' && userLang >= 0 && userLang <= 2 && Number.isInteger(+userLang)) {
    keyboard.currentLang = keyboard.langs[userLang];
    getRandCharInAlph();
  } else {
    alert('This language is not available. Please, chose language: en - 0, ru - 1, ua - 2');
    choseLanguage();
  };
})();

function getRandCharInAlph() {
  let choosenLang = keyboard.layouts[keyboard.currentLang];
  let letters = [];

  for (let key in choosenLang) {
    letters = letters.concat(choosenLang[key]);
  };

  let randInAll = letters[Math.floor(Math.random() * letters.length)];

  // console.log(choosenLang);
  console.log(`Random character in "${keyboard.currentLang}" alphabet is "${randInAll}"`);
  alert(`Random character in "${keyboard.currentLang}" alphabet is "${randInAll}"`);
};
