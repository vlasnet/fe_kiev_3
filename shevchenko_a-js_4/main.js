'use strict'

function clickControl(control, action) {
	control.addEventListener('click', action);
}

// taskOne

(function doRed() {
	let taskOne = document.querySelectorAll('.task-one p');
	for (let i = 0; i < taskOne.length; i++) {
		taskOne[i].style.backgroundColor = "#f00";
	}
}());

// TaskTwo

(function doShadow() {
	let taskTwo = document.querySelectorAll('img');
	for (var i = 0; i < taskTwo.length; i++) {
		taskTwo[i].style.boxShadow = "5px 5px 1px #000";
	}
}());

// TaskThree

(function addNumber() {
	let taskThree = document.querySelectorAll('.task-three p');
	for (var i = 0; i < taskThree.length; i++) {
		taskThree[i].innerText = (i + 1) + ". " + taskThree[i].innerText;
	}
}());

// TaskFour
let result = 0;

let taskFour = {
	btnOne: document.querySelector('.task-four__btn-one'),
	btnTwo: document.querySelector('.task-four__btn-two'),
	clickResult: document.querySelector('.task-four__result'),
	action: function () {
		result++;
		taskFour.clickResult.innerText = result;

	}
}

clickControl(taskFour.btnOne, taskFour.action);
clickControl(taskFour.btnTwo, taskFour.action);

// taskFive

let taskFive = {
	inputOne: document.querySelector('#num'),
	inputTwo: document.querySelector('#pow'),
	btn: document.querySelector('.btn_pow'),
	action: function () {
		let result = Math.pow(taskFive.inputOne.value, taskFive.inputTwo.value);
		alert(result);
	}
};

clickControl(taskFive.btn, taskFive.action);

// TaskSix

let taskSix = {
	inputOne: document.querySelector('#tagName'),
	btn: document.querySelector('.btn_use-underline'),
	action: function () {
		let someElements = document.querySelectorAll(taskSix.inputOne.value);
		console.log(someElements);
		for (var i = 0; i < someElements.length; i++) {
			someElements[i].style.textDecoration = 'underline';
		}
	}
}

clickControl(taskSix.btn, taskSix.action);


// TaskSeven and TaskEight

let taskSeven = {
	input: document.querySelector('#task7'),
	btn: document.querySelector('.task-seven__btn'),
	result: document.querySelector('.task-seven__result'),
	action: function() {
		if (taskSeven.input.value > 16) {
			taskSeven.result.innerText = 'Welcom';
		}

		else if (taskSeven.input.value === undefined || (!taskSeven.input.value)) {
			taskSeven.result.innerText = 'Enter your age';
		}

		else if (taskSeven.input.value <= 16) {
			taskSeven.result.innerText = 'You are still young';
		}

	}
}

clickControl(taskSeven.btn, taskSeven.action);


// TaskNine 

let someArr = [1,2,3,4];

function arrLength(arr) {
	if (arr) {
		return arr.length;
	}

	else {
		return 'Error';
	}
}

console.log(arrLength(someArr));
console.log(arrLength());

// TaskTen

let taskTen = {
	input: document.querySelector('#task10'),
	btn: document.querySelector('.task-ten__btn'),
	result: document.querySelector('.task-ten__result'),
	action: function() {
		taskTen.result.innerText = returnResult();
	}
}

function returnResult() {
	if (taskTen.input.value > 10) {
		return  Math.sqrt(taskTen.input.value);
	}

	else if (taskTen.input.value < 7) {
		return 'Your number < 7';
	}

	else if (+taskTen.input.value === 8 || +taskTen.input.value === 9) {
		return taskTen.input.value - 1;
	}
}

clickControl(taskTen.btn, taskTen.action);

// TaskEleven

let taskEleven = {
	randomNum: Math.round(Math.random() * 10),
	howManyAttempts: 1,
	inputOne: document.querySelector('#task11'),
	btn: document.querySelector('.task-eleven__btn'),
	result: document.querySelector('.task-eleven__result'),
	action: function() {
		
		if (taskEleven.inputOne.value == taskEleven.randomNum) {
			taskEleven.result.innerText = 'Well done! You are try ' + taskEleven.howManyAttempts + ' times';
		}

		else if (taskEleven.howManyAttempts >= 3) {
			taskEleven.result.innerText = 'Sorry, but you lose :(';
		}

		else if (taskEleven.inputOne.value > taskEleven.randomNum) {
			taskEleven.result.innerText = 'Need Less';
			taskEleven.howManyAttempts++;
		}

		else if (taskEleven.inputOne.value < taskEleven.randomNum) {
			taskEleven.result.innerText = 'Need more';
			taskEleven.howManyAttempts++;
		}

	}
}
//для проверки какое число выпало =)
console.log(taskEleven.randomNum);

clickControl(taskEleven.btn, taskEleven.action);
