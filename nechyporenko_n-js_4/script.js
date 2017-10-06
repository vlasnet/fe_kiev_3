'use strict';

let element = function findElement(elemId) {
  let el = document.getElementById(elemId);
  return el;
}

let arrElements = function findElemenstByTag(tagName) {
  let elT = document.getElementsByTagName(tagName);
  return elT;
}

//Task 1
function showRedBg() {
  let arrP = arrElements('p');

  for (let i=0; i<arrP.length; i++) {
    let oneP = arrP[i];

    oneP.className += 'p-red';
  };
};
showRedBg();

//Task 2
function addShadow() {
  let arrImg = arrElements('img');

  for (let i=0; i<arrImg.length; i++) {
    let oneImg = arrImg[i];

    oneImg.className += 'shadow';
  };
};
addShadow();

//Task 3
function addPNumber() {
  let arrP = arrElements('p');

  for (let i=0; i<arrP.length; i++) {
    let oneP = arrP[i];
    let b = oneP.innerHTML;

    oneP.innerHTML = i + 1 + '. ' + b;
  };
};
addPNumber();

//Task 4
var i=0;

function mathClicks() {
  i++;
  element('clicks').innerHTML = 'You clicked on buttons ' + i + ' times.';
};

//Task 5
function mathExp(n, e) {
  let num = element(n).value;
  let exp = element(e).value;
  let result = Math.pow(num, exp);

  alert('Result is ' + result);
};

//Task 6
function showUnderline(t) {
  let _tagName = element(t).value;
  let elem = arrElements(_tagName);

    for (let i=0; i<elem.length; i++) {
    let oneElem = elem[i];

    oneElem.style.textDecoration  = 'underline';
  };
};

//Task 7 & 8
function checkAge(a) {
  let age1 = parseInt( element(a).value );
  let message = '';

  if ( age1 === undefined || !age1 ) {
    message = 'Error';
  } else if (age1 > 16) {
    message = 'Welcome';
  } else {
    message = 'You are too young!';
  };

  element('enter').innerHTML = message;
};

//Task 9
let someArr = ['Apple', 'Pear', 'Mango'];

function arrLength(arr) {
  if (arr) {
		return arr.length;
	} else {
		return 'Error';
	};
};

function showArrLength() {
  element('arr').innerHTML = 'Aray is - ' + someArr;
  element('length').innerHTML = 'Array length ' + arrLength(someArr);
};

showArrLength();

//Task 10
function showResult(sd) {
let task10Result = {
  x: parseInt( element(sd).value ),
  res: function () {
    let y = this.x;
    if (y > 10) {
      return Math.sqrt(y);
    } else if (y < 7) {
      return 'Number ' + y + ' is less than 7';
    } else if (y === 7 || y === 10) {
      return 'Your Number =' + y + '. I don`t know what to do.<br>Please enter another number';
    } else if (y == 8 || y == 9) {
      return y - 1;
    }
  },
  show: function () {
    element('task10-result').innerHTML = this.res();
  }
};

task10Result.show();
}

//Task 11
let attempt = 3;
let rand = '';

element('attempts').innerHTML =  'You have ' + attempt + ' attempts';

function compareNum(uN) {
  let userNumber = parseInt( element(uN).value );

  if (userNumber < 0 || userNumber > 10) {
    element('task11-result').innerHTML = 'Enter a number from 0 to 10';
  } else {
    if (attempt == 3) {
      let  range = [0, 10];
      rand = range[0] + Math.random() * (range[1] + 1 - range[0]);
      rand = Math.floor(rand);
      console.log(rand);
    };

    let pcNum = rand;

    attempt--;

    if ( attempt < 0 ) {
      element('attempts').innerHTML =  'You lose!';
    } else {
      let taskResult = function() {
        if (userNumber !== pcNum && attempt == 0) {
          return 'You lose!';
        } else if (userNumber < pcNum) {
          return 'You did not guess. I made a number more than ' + userNumber + '.';
        } else if (userNumber > pcNum) {
          return 'You did not guess. I made a number less than ' + userNumber + '.';
        } else if (userNumber == pcNum) {
          attempt = 3;
          return 'You win! I made a number ' + userNumber + '.';
        }
      };

      element('task11-result').innerHTML = taskResult();
      element('attempts').innerHTML =  'You have ' + attempt + ' attempts';

    };
  };
};
