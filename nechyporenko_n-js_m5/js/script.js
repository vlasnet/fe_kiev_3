'use strict';

//Task 1
let en, ru, ua;

let lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
  ru: "йцукенгшщзхъфывапролджэячсмитьбю.",
  ua: "йцукенгшщзхїфівапролджєячсмитьбю."
}

function createLayout() {
  debugger;
  let layout = {};
  for (let key in lang) {
    let top = lang[key].split('').slice(0, 12);
    let middle = lang[key].split('').slice(12, 23);
    let bottom = lang[key].split('').slice(23);
    key = {
      topRow: top,
      middleRow: middle,
      bottomRow: bottom
    };
    debugger;
    layout = {
      key: key,
  };
console.log(key);
  return layout;
}
}
createLayout();
console.log(layout)
// let keyboard = createLayout();
//
// function Layout(top, middle, bottom) {
//   this.topRow = top;
//   this.middleRow = middle;
//   this.bottomRow = bottom;
// };
//
// function createLayout() {
//   for (let key in lang) {
//     let top = lang[key].split('').slice(0, 12);
//     let middle = lang[key].split('').slice(12, 23);
//     let bottom = lang[key].split('').slice(23);
//     key = new Layout(top, middle, bottom);
//     lang[key] = key;
//     console.log(lang);
//     return lang;
//   };
// };

// let keyboard = createLayout();

// console.log(createLayout())

//
// const keyboard = {
//     layouts: {
//         en: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ru: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ua: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         }
//     },
//     langs: ['en', 'ru', 'ua'],
//     currentLang: ''
// };
//
//
// const keyboard = {
//     layouts: {
//         en: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ru: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ua: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         }
//     },
//     langs: ['en', 'ru', 'ua'],
//     currentLang: ''
// };





//Task 2 & 3
// let buttons = {
//     btn_task2: (event) => {
//         let row = prompt('Enter number of row from 1 to 3:');
//
//         if (row != '' && row > 0 && row <= 3) {
//             return getRandCharInRow(row);
//         } else {
//             alert('You entered wrong number of row. Please, enter number of row from 1 to 3');
//             buttons.btn_task2();
//         }
//     },
//     btn_task3: (event) => {
//         return getRandCharInAlph();
//     }
// };
//
//
// function getRandIndex(max) {
//     let randIndex = Math.floor(Math.random() * (max + 1));
//     return randIndex;
// };
//
// function getRandCharInRow(row) {
//     row -= 1;
//     let charIndex = getRandIndex(keyboard[row].length);
//
//     console.log(`Random Char in the ${row+1} row is "${keyboard[row][charIndex]}"`);
//     return keyboard[row][charIndex];
// };
//
// function getRandCharInAlph() {
//     let allKeyboardArr = Array.from(keyboard.join("")).filter(n => n != ',');
//     let randInAll = getRandIndex(allKeyboardArr.length);
//
//     console.log(`Random character in all Alphabet is "${allKeyboardArr[randInAll]}"`);
//     return allKeyboardArr[randInAll];
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
