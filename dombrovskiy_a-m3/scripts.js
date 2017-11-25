(function () {
  'use strict';

  const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
  // let indexZero = alphabet.slice(0, 12); //qwertyuiop[]
  // let indexOne = alphabet.slice(12, 23); //asdfghjkl;'
  // let indexTwo = alphabet.slice(23); //zxcvbnm,./
  //
  // let keyboard = [indexZero, indexOne, indexTwo];
  // let firstWord = `${keyboard[1][5]}`
  // + `${keyboard[0][2]}`
  // + `${keyboard[1][8]}`
  // + `${keyboard[1][8]}`
  // + `${keyboard[0][8]}`;
  // console.log(firstWord);
  //
  // let secondWord = `${keyboard[1][6]}`
  // + `${keyboard[1][0]}`
  // + `${keyboard[2][3]}`
  // + `${keyboard[1][0]}`
  // + `${keyboard[1][1]}`
  // + `${keyboard[2][2]}`
  // + `${keyboard[0][3]}`
  // + `${keyboard[0][7]}`
  // + `${keyboard[0][9]}`
  // + `${keyboard[0][4]}`;
  // console.log(secondWord);
  //
  // let thirdWord = `${keyboard[0][4]}`
  // + `${keyboard[0][3]}`
  // + `${keyboard[1][0]}`
  // + `${keyboard[0][7]}`
  // + `${keyboard[2][5]}`
  // + `${keyboard[0][2]}`
  // + `${keyboard[0][3]}`;
  // console.log(thirdWord);

  let keyboard = [
    [alphabet.slice(0, 12)],
    [alphabet.slice(12, 23)],
    [alphabet.slice(23)]
  ];

  let firstWord = ((keyboard[1])[0]).charAt('5') +
   ((keyboard[0])[0]).charAt('2') +
   ((keyboard[1])[0]).charAt('8') +
    ((keyboard[1])[0]).charAt('8') +
   ((keyboard[0])[0]).charAt('8');
  console.log(firstWord);

  let secondWord = ((keyboard[1])[0]).charAt('6') +
  ((keyboard[1])[0]).charAt('0') +
  ((keyboard[2])[0]).charAt('3') +
  ((keyboard[1])[0]).charAt('0') +
  ((keyboard[1])[0]).charAt('1') +
  ((keyboard[2])[0]).charAt('2') +
  ((keyboard[0])[0]).charAt('3') +
  ((keyboard[0])[0]).charAt('7') +
  ((keyboard[0])[0]).charAt('9') +
  ((keyboard[0])[0]).charAt('3');
  console.log(secondWord);

  let thirdWord = ((keyboard[0])[0]).charAt('4') +
  ((keyboard[0])[0]).charAt('3') +
  ((keyboard[1])[0]).charAt('0') +
  ((keyboard[0])[0]).charAt('7') +
  ((keyboard[2])[0]).charAt('5') +
  ((keyboard[0])[0]).charAt('2') +
  ((keyboard[0])[0]).charAt('3');
  console.log(thirdWord);

})();
