"use strict";
// First Task
function function_age() {
  let birthYear = parseInt(document.getElementById('year-of-user-birth').value);
  let year = new Date();
  let currentYear = year.getFullYear();
  if (birthYear>1900 && birthYear<=currentYear) {
    document.getElementById('user-age').innerHTML = 'Ваш возраст '+(currentYear-birthYear);
  } else if (birthYear>1 && birthYear<=(currentYear-2000)) {
    document.getElementById('user-age').innerHTML = 'Ваш возраст '+(currentYear-2000-birthYear);
  } else if (birthYear>(currentYear-2000) && birthYear<99) {
    document.getElementById('user-age').innerHTML = 'Ваш возраст '+(currentYear-(birthYear+1900));
  } else {
    document.getElementById('user-age').innerHTML = 'А Вы долгожитель...'+(currentYear-birthYear)+' Введите правильный формат года 1900+ или 02 (если 2002)';
  }
}

//Second Task
function function_compare() {
 let x = document.getElementById('first-argument').value;
 let y = document.getElementById('second-argument').value;
 if (x>y) {
  document.getElementById('compare-result').innerHTML = 'Первое число больше - '+x;
}
else if (x<y) {
  document.getElementById('compare-result').innerHTML = 'Второе число больше - '+y;
}
else if (x==y) {
  document.getElementById('compare-result').innerHTML = 'Числа равны - '+x;
}
}

//Third Task
function function_entrance() {
  let appartment_number = document.getElementById('appartment').value;
   if (appartment_number>=1 && appartment_number<=20) {
    document.getElementById('entrance').innerHTML = 'Квартира находится в первом подъезде.'
  } else if (appartment_number>=21 && appartment_number<=64) {
    document.getElementById('entrance').innerHTML = 'Квартира находится во втором подъезде.'
  } else if (appartment_number>=65 && appartment_number<=80) {
    document.getElementById('entrance').innerHTML = 'Квартира находится в третьем подъезде.'
  } else {
    document.getElementById('entrance').innerHTML = 'В этом доме только 80 квартир. Введите верный номер квартиры.';
  }
}

//Four Task
function function_authorization() {
let username = document.getElementById('username').value;
let pass = document.getElementById('password').value;
if ((username === 'ivan' && pass === '333') || (username === 'ssss' && pass === '666') || (username === 'gibs' && pass === '0000')) {
 document.getElementById('is-authorized').innerHTML = 'Добро пожаловать';
} else {
  document.getElementById('is-authorized').innerHTML = 'Ошибка';
}
}

// Fife Task
function function_compare_again() {
 let a = document.getElementById('a').value;
 let b = document.getElementById('b').value;
 let c = document.getElementById('c').value;
 if (a>b && a>c) {
  document.getElementById('compare-again-result').innerHTML = 'Первое число больше - '+a;
} else if (b>a && b>c) {
  document.getElementById('compare-again-result').innerHTML = 'Второе число больше - '+b;
} else if (c>a && c>b) {
  document.getElementById('compare-again-result').innerHTML = 'Третье число больше - '+c;
} else if (a==b && a==c) {
  document.getElementById('compare-again-result').innerHTML = 'Числа равны - '+a;
} else if (a==b && a>c) {
  document.getElementById('compare-again-result').innerHTML = 'Первое и второе число равны, и они максимальны - '+a;
} else if (a==c && a>c) {
  document.getElementById('compare-again-result').innerHTML = 'Первое и третье число равны, и они максимальны - '+a;
} else if (b==c && b>a) {
  document.getElementById('compare-again-result').innerHTML = 'Второе и третье число равны, и они максимальны - '+b;
}
}

//Task for cicles
//2.1
let numEven = [];
  for (let i=0; i < 101; i+=2) {
    numEven.push(' '+i);
  }
document.getElementById('even').innerHTML = numEven;

//2.2
let numDec = [];
  for (let i=200; i >= 0; i--) {
    numDec.push(' '+i);
  }
document.getElementById('decrease').innerHTML = numDec;

//2.3
let numSum = 0;
  for (let i=0; i < 100; i++) {
    numSum += i;
  }
document.getElementById('increase').innerHTML = numSum;

//2.4
function function_exponent_calculation() {
let num = parseInt(document.getElementById('num').value);
let numE = 1;
let exp = parseInt(document.getElementById('exp').value);
  for (let i=0; i<exp; i++) {
    numE = numE*num;
  }
document.getElementById('exponent-result').innerHTML = numE;
}
//2.5
let multTable = [];
for (let i=1; i<=10; i++) {
  multTable.push('<br>'+i+'*7='+i*7);
}
document.getElementById('multiplication-table').innerHTML = multTable;
//2.6
let numMult = 1;
for (let i=1; i<=50; i++) {
  numMult *= i;
}
document.getElementById('multiplication').innerHTML = numMult;
//2.7
let symbolsCode = [];
for (let i=1000; i<=2000; i++) {
  symbolsCode.push('&#'+i);
}
document.getElementById('symbols').innerHTML = symbolsCode;
