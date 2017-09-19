function yearsOld() {
  'use strict';

  var start = document.getElementById("yearsOld").value;
  var parag = document.getElementById("task_1");
  var date = new Date();
  var answer =  date.getFullYear() - start;

  parag.innerHTML = answer;
}

function biggerNumb() {
  'use strict';

  var start = document.getElementById("firstYears").value;
  var end = document.getElementById("lastYears").value;
  var answer = document.getElementById('task_2');

if (start > end ) {
  answer.innerHTML = start;
} else if (end > start) {
  answer.innerHTML = end;
} else {
  answer.innerHTML = "Числа равны";
}
}

function entrance() {
  'use strict';

  var apartments = document.getElementById('number').value;
  var answer = document.getElementById('task_3');

    if (apartments > 0 && apartments <= 20) {
  		answer.innerHTML = "1";
  	} else if (apartments >= 21 && apartments <= 64) {
  		answer.innerHTML = "2";
  	} else if (apartments >= 65 && apartments <= 80) {
  		answer.innerHTML = "3";
  	}
}

function logIn() {
  'use strict';

  var login = document.getElementById('login').value;
  var pass = document.getElementById('password').value;
  var answer = document.getElementById('task_4');

  if ( login == 'ivan' && pass == 333 ) {
      answer.innerHTML = "Hello ivan";
    } else if (login == 'ssss' && pass == 666 ) {
      answer.innerHTML = "Hello ssss";
    } else if (login == 'gibs' && pass == '0000' ) {
      answer.innerHTML = "Hello gibs";
  } else {
      answer.innerHTML = "Error";
  }
}

function comparison(){
  'use strict';

  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;
  var third = document.getElementById('third').value;
  var answer = document.getElementById('task_5');

  if(first > second){
    if(first > third){
      answer.innerHTML = first;
    }
  } else if(second > third){
    answer.innerHTML = second;
  } else {
    answer.innerHTML = third;
}
}

function half() {
    'use strict';

  var answer = document.getElementById('task_for_1');
  for(var i = 0; i <= 100; i++ ) {
    if(i%2==0){
      answer.innerHTML = answer.innerHTML + i + ",";
    }
  }
}

function twoHundred() {
    'use strict';

  var answer = document.getElementById('task_for_2');
  for (var i = 200; i >= 0; i--){
    answer.innerHTML += i + ",";
  }
}

function sum() {
    'use strict';

  var answer = document.getElementById('task_for_3');
	var sum = 0;
	for (var i = 1; i <= 100; i++) {
		 sum = sum + i; }
	 answer.innerHTML = sum;
}

function pow() {
  'use strict';

  var answer = document.getElementById('task_for_4');
  var num = document.getElementById('num').value;
  var exp = document.getElementById('exponent').value;

  if (exp > 0) {
    var val = num;
    for (var i = 1; i < exp; i++ ) {
      val *= num;
    }
  	answer.innerHTML = val;
	} else if ( exp < 0 ) {
  	var val = num;
    exp = (-1) * exp;
    for ( var i = 1; i < exp; i++ ) {
      val *= num;
    }
  	answer.innerHTML = (1 / val);
	} else {
  	answer.innerHTML = 1;
	}
}

function table() {
  'use strict';

  var answer = document.getElementById('task_for_5');
  var number = document.getElementById('numberForTable').value;

  for (var i = 1; i < 10; i++){
    var ended = i * number;
    answer.innerHTML += (i + " * " + number + " = " + ended + '<br>');
  }
}

function multiplication() {
    'use strict';

  var answer = document.getElementById('task_for_6');
	var sum = 1;
	for (var i = 1; i <= 50; i++) {
		 sum = sum * i; }
	 answer.innerHTML = sum;
}

function symbol() {
  'use strict';

  var answer = document.getElementById('task_for_7');

  for(var i = 1000; i <=2000; i++){
    answer.innerHTML += ('&#' + i + ' ');
  }
}
