'use strict'

// Как обычно, для отслеживания кликов =)

function clickControl(control, action) {
	control.addEventListener('click', action);
}


// Задание 1

let taskOne = {
	input:  document.querySelector('.taskOne__input'),
	btn:    document.querySelector('.taskOne__btn'),
	result: document.querySelector('.taskOne__result'),
	action: function () {
		taskOne.result.innerText = taskOne.input.value.length;
	}
};

clickControl(taskOne.btn, taskOne.action);

// Задание 2

let taskTwo = {
	imgs:   document.querySelectorAll('.taskTwo__img'),
	action: function() {
		for (var i = 0; i < taskTwo.imgs.length; i++) {
			taskTwo.imgs[i].src = 'img/key-features-' + (i + 1) + '.png';
		}
	}
};

taskTwo.action();

// Задание 3 и 4 (зачем делать двойную работу? =) )

let taskThree = {
	input:  document.querySelector('.taskThree__input'),
	btn:    document.querySelector('.taskThree__btn'),
	result: document.querySelector('.taskThree__result'),
	action: function () {
		if (~taskThree.input.value.indexOf('http://www.')) {
			taskThree.result.innerText = taskThree.input.value.slice(11);
		}

		else if (~taskThree.input.value.indexOf('https://www.')) {
			taskThree.result.innerText = taskThree.input.value.slice(12);
		}

		else if (~taskThree.input.value.indexOf('http://')) {
			taskThree.result.innerText = taskThree.input.value.slice(7);
		}

		else if (~taskThree.input.value.indexOf('https://')) {
			taskThree.result.innerText = taskThree.input.value.slice(8);
		}

		else {
			taskThree.result.innerText = taskThree.input.value;

		}
	}
};

clickControl(taskThree.btn, taskThree.action);

// Задание 5

let taskFiveForm = document.taskFive;

let user = {};

let taskFive = {
	btn: taskFiveForm.submit,
	result: document.querySelector('.taskFive__result'),
	action: function() {
		let a = taskFiveForm;
		for (var i = 0; i < taskFiveForm.length - 1; i++) {
			 let a = taskFiveForm[i].value
			if (a) {
				// демонстрация того, что пробелы удалены
				user[i] = removeSpaces(a.split('')).join('');
			}
			else return false;
		}

		if ((user[2].length > 5) && (~user[3].indexOf('@')) && (!(~user[3].indexOf(' ')))) {
			return true;
		}
		else return false;
	}
};

function removeSpaces(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[0] == ' ') {
			arr.shift();

		}
	}
	for (var i = 0; i < arr.length; i++) {
		if (arr[arr.length - 1] == ' ') {
			arr.pop();
		}
	}
	return arr;
}

clickControl(taskFive.btn, function () {
	taskFive.result.innerText = taskFive.action();		

	// демонстрация того, что пробелы удалены
	console.log(user);

});

// Задание 6

let taskSix = {
	input:  document.querySelector('.taskSix__input'),
	btn:    document.querySelector('.taskSix__btn'),
	result: document.querySelector('.taskSix__result'),
	action: function() {
		taskSix.result.innerText = taskSix.input.value.charCodeAt(0);
	}
}

clickControl(taskSix.btn, taskSix.action);
