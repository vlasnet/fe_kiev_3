'use strict'


function clickControl(control, action) {
	control.addEventListener('click', action);
}


// Task 1

let taskOne = {
	input:  document.querySelector('.taskOne__input'),
	btn:    document.querySelector('.taskOne__btn'),
	result: document.querySelector('.taskOne__result'),
	action: function () {
		taskOne.result.innerText = taskOne.input.value.length;
	}
};

clickControl(taskOne.btn, taskOne.action);

// Task 2

(function () {
	let imgs = document.querySelectorAll('.taskTwo__img');
	for (let i = 0; i < imgs.length; i++) {
			imgs[i].src = 'img/key-features-' + (i + 1) + '.png';
		}
})();

// Task 3 and Task 4

let taskThree = {
	input:  document.querySelector('.taskThree__input'),
	btn:    document.querySelector('.taskThree__btn'),
	result: document.querySelector('.taskThree__result'),
	action: function () {
		let url = document.createElement('a');
		url.href = taskThree.input.value;
		taskThree.result.innerText = url.hostname.replace(/^www\./,"");
	}
};

clickControl(taskThree.btn, taskThree.action);

// Task 5

let taskFiveForm = document.taskFive;

let user = {};

let taskFive = {
	btn: taskFiveForm.submit,
	result: document.querySelector('.taskFive__result'),
	action: function() {
		for (var i = 0; i < taskFiveForm.length - 1; i++) {
			let a = taskFiveForm[i].name;
			user[a] = taskFiveForm[i].value.trim();
		}

		if ((user.pass.length > 5) && (~user.email.indexOf('@')) && (!(~user.email.indexOf(' ')))) {
			taskFive.result.innerText = taskFive.action();
		}
		else return false;
	}
};

(function specialSubmitControl() {
	taskFiveForm.addEventListener('submit', function(event) {
		taskFive.action();
		if (!taskFive.action()) {
			event.preventDefault();
			return taskFive.result.innerText = taskFive.action();
		}
	}, false)
})();

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
