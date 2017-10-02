'use strict';

//task-1

(function () {
	let div    = document.querySelector('.task-1'),
		result = document.querySelector('.task-1_result');

	div.addEventListener('mousemove', function (e) {
		let rect = this.getBoundingClientRect();
		// console.log(e.clientX - rect.x, e.clientY - rect.y);
		result.innerText = 'x: ' + (e.clientX - rect.x) + 'px' + 'y: ' + (e.clientY - rect.y) + 'px';
	})
})();

// task-2

(function () {
	let folder = document.querySelector('.task-2');
	
	folder.addEventListener('click', function () {
		if (folder.dataset.toggle == 'close') {
			folder.classList.remove('close-folder');
			folder.classList.add('open-folder');
			folder.dataset.toggle = 'open';
		} else if (folder.dataset.toggle == 'open') {
			folder.classList.remove('open-folder');
			folder.classList.add('close-folder');
			folder.dataset.toggle = 'close';
		}
	})
})();

//task-3

(function () {
	let taskThree = document.querySelector('.task-3');
	
	for (let i = 0; i < 300; i++) {
		let newDiv = document.createElement('div');
		
		taskThree.appendChild(newDiv);
		newDiv.classList.add('box');
	}
	let box = document.querySelectorAll('.box');
	for (let i = 0; i < box.length; i++) {
		box[i].addEventListener('mouseover', function() {
			box[i].style.borderRadius = '50%';
	})
	}
})();

//task-4

(function () {
	let imgs = document.querySelectorAll('.task-4_img');
	let div = document.querySelector('.task-4');

	for (let i = 0; i < imgs.length; i++) {
		imgs[i].addEventListener('click', function() {
			div.style.background = 'url(' + this.src + ') no-repeat';
			div.style.backgroundSize = 'contain';
		})
	}
})();

//task-5

(function(){
	let div = document.querySelector('.task-5');
		let count = 1;
	div.addEventListener('click', function() {

		div.style.transform = 'translateY('+ count * 100 + 'px)';
		count++;
	})
})();

//task-6

(function () {
	let toggle = document.querySelector('.toggle');
	let container = document.querySelector('.container');
	let count = 0;
	toggle.addEventListener('click', function () {
		if (count === 0) {
			container.style.textAlign = 'center';
			count++;
			console.log(count);
		} else if (count === 1) {
			container.style.textAlign = 'right';
			count++;
			console.log(count);
		} else {
			container.style.textAlign = 'left';
			count = 0;
			console.log(count);
		}
	})
})();