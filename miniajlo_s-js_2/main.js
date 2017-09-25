'use strict';
let task1 = {
	input1: document.querySelector ('#yearOfBorn'),
	btn: document.querySelector('.task-1 .btn'),
	result: document.querySelector('.task-1 .result'),
	action: function (){
		task1.result.innerHTML = countYearsOld(formatInput());
	}
};

function fomatInput() {
	if (task1.input1.value.length === 4) {
		return task1.input1.value;
	}

	else if ((task1.input1.value.length === 2) && (task1.input1.value <= 17)) {
		return '20' + task1.input1.value;
	}

	else if ((task1.input1.value.length === 2) && (task1.input1.value > 17)) {
		return  '19' + task1.input1.value;
	}

	else {
		return false;
	}
}

function countYearsOld(year) {
	let yearsOld = 2017 - year;

	if (!year) {
		return 'Что-то пошло не так';
	}

	else {
		return yearsOld;
	}
}

function clickControl(control, action) {
	control.addEventListener('click', action);
}

clickControl(task1.btn, task1.action);

//task 2

let task2 = {
	input1: document.querySelector('.task-2 .number1'),
	input2: document.querySelector('.task-2 .number2'),
	btn: document.querySelector('.task-2 .btn'),
	result: document.querySelector('.task-2 .result'),
	action: function () {
		task2.result.innerHTML = biggerNumber(task2.input1.value, task2.input2.value);
	}
};

function biggerNumber(a, b) {
	if (a > b) {
		return a;
	}

	else if (a === b) {
		return 'Числа равны';
	}

	else {
		return b;
	}
}

clickControl(task2.btn, task2.action);

//task 3

let task3 = {
	input1: document.querySelector ('.task-3 .flat-number'),
	btn: document.querySelector('.task-3 .btn'),
	result: document.querySelector('.task-3 .result'),
	action: function (){
		task3.result.innerHTML = whatEnterance(task3.input1.value);
	}
};

function whatEnterance(appNumber){
	if (appNumber >= 1 && appNumber < 21) {
		return 'Ваша квартира в 1 подъезде';
	}
	else if (appNumber > 20 && appNumber <= 64) {
		return 'Ваша квартира во 2 подъезде';
	}

	else if (appNumber >= 65 && appNumber < 81) {
		return 'Ваша квартира в 3 подъезде';
	}
	else {
		return 'Похоже что вы живете в другом доме))'
	}
}

clickControl(task3.btn, task3.action);

// task 4
let task4 = {
	input1: document.querySelector('.user-name'),
	input2: document.querySelector('.user-pass'),
	btn: document.querySelector('.task-4 .btn'),
	result: document.querySelector('.task-4 .result'),
	action: function (){
		task4.result.innerHTML = enterance(task4.input1.value, task4.input2.value);
	}
};

function enterance(name, pass){
	if ((name === 'ivan' && pass === '333') || (name === 'ssss' && pass === '666') || (name === 'gibs' && pass === '0000')) {
		return 'Добро пожаловать!';
	}
	 else {
 	 	alert ('ошибка');
	}
}

clickControl(task4.btn, task4.action);

// task 5

let task5 = {
	input1: document.querySelector('.task-5 .number1'),
	input2: document.querySelector('.task-5 .number2'),
	input3: document.querySelector('.task-5 .number3'),
	btn: document.querySelector('.task-5 .btn'),
	result: document.querySelector('.task-5 .result'),
	action: function () {
		task5.result.innerHTML = Math.max(task5.input1.value, task5.input2.value, task5.input3.value);
	}
};

clickControl(task5.btn, task5.action);

// task 6

let task6 = document.querySelector('.task-6 .result');

let oddNum = [];
for (let i = 0; i <= 100; i += 2) {
 oddNum.push (' ' + i);
}
task6.innerHTML = oddNum;

// task 7

let task7 = document.querySelector('.task-7 .result');
let countdown = [];
for (var i = 200; i >= 1; i--) {
	countdown.push (' ' + i);
}
task7.innerHTML = countdown;

// task 8

let task8 = document.querySelector('.task-8 .result')
let result = 0;
for (let i = 0; i <= 100; i++) {
	result += i;
	}

task8.innerHTML = result;

// task 9
let task9 = {
	input1: document.querySelector('.task-9 .number'),
	input2: document.querySelector('.task-9 .degree'),
	btn: document.querySelector('.task-9 .btn'),
	result: document.querySelector('.task-9 .result'),
	action: function () {
	// 	task9.result.innerHTML = degreedNumber(task9.input1.value, task9.input2.value);
	// }
		task9.result.innerHTML = Math.pow(task9.input1.value,task9.input2.value);
	}

	// еще пробовал:
	// task9.result.innerHTML = Math.pow(task9.input1.value ** task9.input2.value);
	
// }
	// (по спецификации es7)
};

// function degreedNumber(num, pow) {
// 	let result = num;
// 	if (pow === 0) {
// 		return 1;
// 	} else if (pow === 1) {
// 		return num;
// 	}
// 	else {
// 		for (let i = 1; i < pow; i++) {
// 			result *= num;
// 		}
// 		return result
// 	}
// }

clickControl(task9.btn, task9.action)

// task 10
let task10 = document.querySelector('.task-10 .result');

let table = [];
for (let i = 1; i <= 10; i++) {
 table.push ('<br>' + i + '*' + 7 + '=' + (i*7));
}
task10.innerHTML = table;

// task 11

let task11 = document.querySelector('.task-11 .result')
let multiplication = 1;
for (let i = 1; i <= 50; i++) {
	multiplication *= i;
	}

task11.innerHTML = multiplication;

// task 12
let task12 = document.querySelector('.task-12 .result');

let characters = [];
for (let i = 1000; i <= 2000; i++) {
 characters.push (' &#' + i +';');
}
task12.innerHTML = characters;
