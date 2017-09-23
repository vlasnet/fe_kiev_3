"use strict";
// First Task
function function_age() {
  let birth_year = document.getElementById('year-of-user-birth').value;
  if (birth_year.length==4 && birth_year<=2017) {
    document.getElementById('user-age').innerHTML = 'Ваш возраст '+(2017-birth_year);
  } else if (birth_year.length==2 && birth_year>1 && birth_year<17 ) {
    document.getElementById('user-age').innerHTML = 'Ваш возраст '+(17-birth_year);
  } else {
    document.getElementById('user-age').innerHTML = 'Введите правильный формат года 1987 или 02 (если 2002)';
  }
}

//Second Task
function OnlyDigits()
{
if ((event.keyCode < 45 || event.keyCode > 57) ) event.returnValue = false;
}

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
