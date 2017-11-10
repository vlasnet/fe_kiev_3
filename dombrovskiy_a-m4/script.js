(function() {
  'use strict';

  const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
  let keyboard = [];

  function addKeyboardLayout(str) {
     keyboard = [
      [str.slice(0, 12)],
      [str.slice(12, 23)],
      [str.slice(23)]
    ]
    }

  addKeyboardLayout(alphabet);
  console.log(keyboard);


  function getRandCharInRow(row) {
    switch(row) {
      case 0: let randomNumber0 = (Math.floor(Math.random() * ((((keyboard[0])[0])).length - 1 + 1)) + 0);
              let randomElement0 = keyboard[0][0][randomNumber0];
              console.log('random from row_0 = ',randomElement0);
              break;
      case 1: let randomNumber1 = (Math.floor(Math.random() * ((((keyboard[1])[0])).length - 1 + 1)) + 0);
              let randomElement1 = keyboard[1][0][randomNumber1];
              console.log('random from row_1 = ',randomElement1);
              break;
      case 2: let randomNumber2 = (Math.floor(Math.random() * ((((keyboard[2])[0])).length - 1 + 1)) + 0);
              let randomElement2 = keyboard[2][0][randomNumber2];
              console.log('random from row_2 = ',randomElement2);
              break;
    }
  }

  getRandCharInRow(0)


  function getRandCharInAlph (str) {
    let randomNumberForAlphabet = (Math.floor(Math.random() * (str.length - 0 + 1) + 0));
    let randomElementFromAlphabet = str.charAt(randomNumberForAlphabet);
    console.log('random from Alphabet = ', randomElementFromAlphabet);
}

  getRandCharInAlph(alphabet);

})();
