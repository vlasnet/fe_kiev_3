function getYear() {
  'use strict';

  var start = document.getElementById("yearsOld").value;
  var span = document.getElementById("task_1");
  var date = new Date();
  var answer = date.getFullYear() - start;

  span.innerHTML = answer;
}

function getBiggerNumber() {
  'use strict';

  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var answer = document.getElementById('task_2');

  if (firstNumber > secondNumber) {
    answer.innerHTML = firstNumber;
  } else if (secondNumber > firstNumber) {
    answer.innerHTML = secondNumber;
  } else {
    answer.innerHTML = "Числа равны";
  }
}

function getEntrance() {
  'use strict';

  var apartments = document.getElementById('number').value;
  var answer = document.getElementById('task_3');

  if (apartments > 0 && apartments <= 20) {
    answer.innerHTML = "1";
  } else if (apartments >= 21 && apartments <= 64) {
    answer.innerHTML = "2";
  } else if (apartments >= 65 && apartments <= 80) {
    answer.innerHTML = "3";
  } else {
    answer.innerHTML = "Такого подьезда нет";
  }
}

function getAccount() {
  'use strict';

  var login = document.getElementById('login').value;
  var pass = document.getElementById('password').value;
  var answer = document.getElementById('task_4');

  if (login == 'ivan' && pass == 333) {
    answer.innerHTML = "Hello ivan";
  } else if (login == 'ssss' && pass == 666) {
    answer.innerHTML = "Hello ssss";
  } else if (login == 'gibs' && pass == '0000') {
    answer.innerHTML = "Hello gibs";
  } else {
    answer.innerHTML = "Error";
  }
}

function getNumber() {
  'use strict';

  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;
  var third = document.getElementById('third').value;
  var answer = document.getElementById('task_5');

  if (first > second) {
    if (first > third) {
      answer.innerHTML = first;
    }
  } else if (second > third) {
    answer.innerHTML = second;
  }else{
    answer.innerHTML = third;
  }
}

function getPairedNumbers() {
  'use strict';

  var answer = document.getElementById('task_for_1');
  for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      answer.innerHTML += i + ",";
    }
  }
}

function getTwoHundred() {
  'use strict';

  var answer = document.getElementById('task_for_2');
  for (var i = 200; i >= 0; i--) {
    answer.innerHTML += i + ",";
  }
}

function getAmount() {
  'use strict';

  var answer = document.getElementById('task_for_3');
  var amount = 0;
  for (var i = 1; i <= 100; i++) {
    amount += i;
  }
  answer.innerHTML = amount;
}

function getPower() {
  'use strict';

  var answer = document.getElementById('task_for_4');
  var number = document.getElementById('numbers').value;
  var exponent = document.getElementById('exponent').value;
  var value = number;

  if (exponent > 0) {
    for (var i = 0; i < exponent; i++) {
      value *= number;
    }
    answer.innerHTML = value;

  } else if (exponent < 0) {

    exponent = (-1) * exponent;
    for (var k = 1; k < exponent; k++) {
      value *= number;
    }
    answer.innerHTML = (1 / value);

  } else {
    answer.innerHTML = 1;

  }
}

function getTable() {
  'use strict';

  var answer = document.getElementById('task_for_5');
  var number = document.getElementById('numberForTable').value;

  for (var i = 1; i < 10; i++) {
    var table = i * number;
    answer.innerHTML += (i + " * " + number + " = " + table + '<br>');
  }
}

function getMultiplication() {
  'use strict';

  var answer = document.getElementById('task_for_6');
  var amount = 1;
  for (var i = 1; i <= 50; i++) {
    amount *= i;
  }
  answer.innerHTML = amount;
}

function getSymbol() {
  'use strict';

  var answer = document.getElementById('task_for_7');

  for (var i = 1000; i <= 2000; i++) {
    answer.innerHTML += ('&#' + i + ' ');
  }
}

var a = {};
var b = {};

console.log(a = b);
