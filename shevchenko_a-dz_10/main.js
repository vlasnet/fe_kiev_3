'use strict';

// Для читабельности выделил результат

let bigRedResult = document.querySelectorAll('.result');
for (var i = 0; i < bigRedResult.length; i++) {
	bigRedResult[i].style.color = '#f00';
	bigRedResult[i].style.fontWeight = 'bold';
	bigRedResult[i].style.width = '500px';
}

// Задание 1

let taskOne = {
	inputOne: document.querySelector('.task-1 #bornYear'),
	btn: document.querySelector('.task-1 .btn'),
	result: document.querySelector('.task-1 .result'),
	action: function (){
		taskOne.result.innerHTML = countHowOld(checkYearsFormat());
	}
};

function checkYearsFormat() {
	if (taskOne.inputOne.value.length == 4) {
		return taskOne.inputOne.value;
	}

	else if ((taskOne.inputOne.value.length == 2) && (+taskOne.inputOne.value > 17)) {
		return  '19' + taskOne.inputOne.value;

	}

	else if ((taskOne.inputOne.value.length == 2) && (+taskOne.inputOne.value <= 17)) {
		return '20' + taskOne.inputOne.value;

	}

	else {
		return false;
	}
}

function countHowOld(date) {
	let howOld = 2017 - date;

	if (!date) {
		return 'Не может такого быть';
	}

	else {
		return howOld;
	}
}

function clickControl(control, action) {
	control.addEventListener('click', action);
}

clickControl(taskOne.btn, taskOne.action);

// Задание 2

let taskTwo = {
	inputOne: document.querySelector('.task-2 #firstNum'),
	inputTwo: document.querySelector('.task-2 #secondNum'),
	btn: document.querySelector('.task-2 .btn'),
	result: document.querySelector('.task-2 .result'),
	action: function () {
		taskTwo.result.innerHTML = compareNumbers(taskTwo.inputOne.value, taskTwo.inputTwo.value);
	}
};

function compareNumbers(a, b) {
	if (a > b) {
		return a;
	}

	else if (a === b) {
		return 'Числа одинаковые';
	}
	
	else {
		return b;
	}
}

clickControl(taskTwo.btn, taskTwo.action);

// Задание 3

let taskThree = {
	inputOne: document.querySelector('.task-3 #apartmentNumber'),
	btn: document.querySelector('.task-3 .btn'),
	result: document.querySelector('.task-3 .result'),
	action: function () {
		taskThree.result.innerHTML = checkEntrance(taskThree.inputOne.value);
	}
};

function checkEntrance(apartmentNumber){
	if (apartmentNumber >= 1 && apartmentNumber < 21) {
		return '1 подъезд';
	}
	else if (apartmentNumber >= 21 && apartmentNumber < 65) {
		return '2 подъезд';
	}

	else if (apartmentNumber >= 65 && apartmentNumber < 80) {
		return '3 подъезд';
	}

	else {
		return 'Скорее всего, вы живете не в этом доме';
	}
}

clickControl(taskThree.btn, taskThree.action);

// Задание 4

let taskFour = {
	inputOne: document.querySelector('.task-4 #userName'),
	inputTwo: document.querySelector('.task-4 #userPass'),
	btn: document.querySelector('.task-4 .btn'),
	result: document.querySelector('.task-4 .result'),
	action: function () {
		taskFour.result.innerHTML = checkUser(taskFour.inputOne.value, taskFour.inputTwo.value);
	}
};

function checkUser(name, pass){
	if ((name === 'ivan' && pass === '333') || (name === 'ssss' && pass === '666') || (name === 'gibs' && pass === '0000')) {
		return 'Добро пожаловать';
	}

	else {
		return 'ошибка';
	}
}

clickControl(taskFour.btn, taskFour.action);

// Задание 5

let taskFive = {
	inputOne: document.querySelector('.task-5 #num1'),
	inputTwo: document.querySelector('.task-5 #num2'),
	inputThree: document.querySelector('.task-5 #num3'),
	btn: document.querySelector('.task-5 .btn'),
	result: document.querySelector('.task-5 .result'),
	action: function () {
		taskFive.result.innerHTML = Math.max(taskFive.inputOne.value, taskFive.inputTwo.value,  taskFive.inputThree.value);
	}
};

clickControl(taskFive.btn, taskFive.action);

// Задание 6

let taskSix = document.querySelector('.task-6 .result');

function oddNum() {
	let result = [];
	for (let i = 1; i <= 101; i++) {
		if (i % 2 == 0) { result.push(' ' + i)}
	}
	return result;
}

taskSix.innerHTML = oddNum();

// Задание 7

let taskSeven = document.querySelector('.task-7 .result');

function reverseNum() {
	let result = [];
	for (let i = 200; i >= 0; i--) {
		result.push(' ' + i)
	}
	return result;
}

taskSeven.innerHTML = reverseNum();

// Задание 8


let taskEight = document.querySelector('.task-8 .result');

function sumNum() {
	let result = 0;
	for (let i = 1; i <= 100; i++) {
		result += i;
	}
	return result;
}

taskEight.innerHTML = sumNum();

// Задание 9

let taskNine = {
	inputOne: document.querySelector('.task-9 #num'),
	inputTwo: document.querySelector('.task-9 #pow'),
	btn: document.querySelector('.task-9 .btn'),
	result: document.querySelector('.task-9 .result'),
	action: function () {
		taskNine.result.innerHTML = powNum(taskNine.inputOne.value, taskNine.inputTwo.value);
	}
};

function powNum(num, pow) {
	let result = num;
	if (pow === 0) {
		return 1;
	}

	else if (pow < 1) {
		return 'Введите число больше 0';
	}

	else if (pow === 1) {
		return num;
	}

	else {
		for (var i = 2; i <= pow ; i++) {
			result *= num;
		}
		return result;
	}
}

clickControl(taskNine.btn, taskNine.action);

// Задание 10

let taskTen = document.querySelector('.task-10 .result');

function createTable() {
	let result = [];
	for (let i = 1; i < 10; i++) {
		result.push('<br>' + i + ' * ' + '7 = ' + (i * 7));

	}
	return result;
}

taskTen.innerHTML = createTable();

// Задание 11

let taskEleven = document.querySelector('.task-11 .result');

function multiNum() {
	let result = 1;
	for (let i = 1; i <= 50; i++) {
		result *= i;
	}
	return result;
}

taskEleven.innerHTML = multiNum();

// Задание 12

let taskTwelve = document.querySelector('.task-12 .result');

function createTable2() {
	let result = [];
	for (let i = 1000; i < 2001; i++) {
		result.push(' ' + '&#' + i);

	}
	return result;
}

taskTwelve.innerHTML = createTable2();
