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
    return keyboard;
    }

  addKeyboardLayout(alphabet);

  function getRandCharInRow(row) {
    let lengthRow = (keyboard[row][0]).length;
    let randowmNumberForRow = (Math.floor(Math.random() * lengthRow));
    let randomCharFromRow = keyboard[row][0].charAt(randowmNumberForRow);
    console.log(randomCharFromRow);
    return randomCharFromRow;
  }

  getRandCharInRow(2)

  function getRandCharInAlph (str) {
    let randomNumberForAlphabet = (Math.floor(Math.random() * str.length));
    let randomElementFromAlphabet = str.charAt(randomNumberForAlphabet);
    console.log('random from Alphabet = ', randomElementFromAlphabet);
    return randomElementFromAlphabet;
}

  getRandCharInAlph(alphabet);

})();
