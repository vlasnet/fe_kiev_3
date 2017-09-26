"use strict";
// First Task
function countAge() {
  let birthYear = parseInt( document.getElementById('year-of-user-birth').value );
  let year = new Date();
  let currentYear = year.getFullYear();

  if ( birthYear > 1900 && birthYear <= currentYear ) {
    document.getElementById('user-age').innerHTML = 'Ваш возраст ' + (currentYear - birthYear);
  } else if  ( birthYear > 1 && birthYear <= (currentYear-2000) ) {
    document.getElementById('user-age').innerHTML = 'Ваш возраст ' + (currentYear - 2000 - birthYear);
  } else if ( birthYear > (currentYear - 2000) && birthYear < 99) {
    document.getElementById('user-age').innerHTML = 'Ваш возраст '+( currentYear - (birthYear + 1900) );
  } else {
    document.getElementById('user-age').innerHTML = 'А Вы долгожитель...' + (currentYear - birthYear) + ' Введите правильный формат года 1900+ или 02 (если 2002)';
  }
}

//Second Task
function findMax() {
  let x = parseInt( document.getElementById('first-argument').value );
  let y = parseInt( document.getElementById('second-argument').value );

  if (x > y) {
    document.getElementById('compare-result').innerHTML = 'Первое число больше - ' + x;
  } else if (x < y) {
    document.getElementById('compare-result').innerHTML = 'Второе число больше - ' + y;
  } else if (x == y) {
    document.getElementById('compare-result').innerHTML = 'Числа равны - ' + x;
  }
}

//Third Task
function getEntrance() {
  let appartment_number = parseInt( document.getElementById('appartment').value );

   if (appartment_number >= 1 && appartment_number <= 20) {
    document.getElementById('entrance').innerHTML = 'Квартира находится в первом подъезде.'
  } else if (appartment_number >= 21 && appartment_number <= 64) {
    document.getElementById('entrance').innerHTML = 'Квартира находится во втором подъезде.'
  } else if (appartment_number >= 65 && appartment_number <= 80) {
    document.getElementById('entrance').innerHTML = 'Квартира находится в третьем подъезде.'
  } else {
    document.getElementById('entrance').innerHTML = 'В этом доме только 80 квартир. Введите верный номер квартиры.';
  }
}

//Four Task
function checkPermission() {
  let username = document.getElementById('username').value;
  let pass = document.getElementById('password').value;

  if ((username === 'ivan' && pass === '333') || (username === 'ssss' && pass === '666') || (username === 'gibs' && pass === '0000')) {
    document.getElementById('is-authorized').innerHTML = 'Добро пожаловать';
  } else {
    document.getElementById('is-authorized').innerHTML = 'Ошибка';
  }
}

// Fife Task
function getMax() {
 let a = parseInt( document.getElementById('a').value );
 let b = parseInt( document.getElementById('b').value );
 let c = parseInt( document.getElementById('c').value );

 let max = Math.max(a, b, c);

document.getElementById('compare-again-result').innerHTML = 'Максимальное число -' + max;
}

//Task for cicles
//2.1
let evenNumbers = [];

for (let i = 0; i < 101; i += 2) {
  evenNumbers.push(' ' + i);
}
document.getElementById('even').innerHTML = evenNumbers;

//2.2
let countdown = [];

for (let i = 200; i >= 0; i--) {
  countdown.push(' ' + i);
}
document.getElementById('decrease').innerHTML = countdown;

//2.3
let sum = 0;

for (let i = 0; i < 100; i++) {
  sum += i;
}
document.getElementById('increase').innerHTML = sum;

//2.4
function getExp() {
  let num = parseInt(document.getElementById('num').value);
  let exp = parseInt(document.getElementById('exp').value);
  let expResult = 1;

  for (let i = 0; i < exp; i++) {
    expResult *=num;
  }
  document.getElementById('exponent-result').innerHTML = expResult;
}

//2.5
let multTable = [];

for (let i = 1; i <= 10; i++) {
  multTable.push('<br>' + i + '*7=' + i*7);
}
document.getElementById('multiplication-table').innerHTML = multTable;

//2.6
let multiplicationResult  = 1;

for (let i = 1; i <= 50; i++) {
  multiplicationResult *= i;
}
document.getElementById('multiplication').innerHTML = multiplicationResult;
//2.7
let symbolsCode = [];

for (let i = 1000; i <= 2000; i++) {
  symbolsCode.push('&#' + i + ';');
}
document.getElementById('symbols').innerHTML = symbolsCode;
