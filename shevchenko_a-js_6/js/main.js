'use strict';

//task-1

(function () {
	let div    = document.querySelector('.task-1'),
		result = document.querySelector('.task-1_result');

	div.addEventListener('mousemove', function (e) {
		let rect = this.getBoundingClientRect();
		// console.log(e.clientX - rect.x, e.clientY - rect.y);
		result.innerText = 'x: ' + (e.clientX - rect.x) + 'px ' + 'y: ' + (e.clientY - rect.y) + 'px';
	})
})();

// task-2

(function () {
	let folder = document.querySelector('.task-2');
	
	folder.addEventListener('dblclick', function () {
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
	let containerForBoxes = document.createElement('div');

	for (let i = 0; i < 300; i++) {
		let newDiv = document.createElement('div');
		
		newDiv.classList.add('box');
		containerForBoxes.appendChild(newDiv);
	}

	taskThree.appendChild(containerForBoxes);

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
			div.style.backgroundImage = 'url(' + this.src + ')';
		})
	}
})();

//task-5

(function(){
	let div = document.querySelector('.task-5'),
	count = 0,
	px = 'px';
	
	div.addEventListener('click', function() {
		let position = div.style;

		count += 100;
		position.top = count + px;
	})
})();

//task-6

(function () {
	let toggle = document.querySelector('.toggle');
	let container = document.querySelector('.container');
	let count = 0;
	let px = 'px';
	toggle.addEventListener('click', function () {
		switch (count) {
			case 0: 
				toggle.style.left = (count + 1) * 100 - 50 + px;
				count ++;
				console.log(count);
			break;
			case 1: toggle.style.left = (count + 1) * 100 - 50 + px;
				count ++;
				console.log(count);
			break;
			case 2: toggle.style.left = (count + 1) * 100 - 50 + px;
				count ++;
				console.log(count);
			break;
			case 3: toggle.style.left = (count + 1) * 100 - 50 + px;
				count ++;
				console.log(count);
			break;
			case 4: toggle.style.left = (count + 1) * 100 - 50 + px;
				count ++;
				console.log(count);
			break;
			case 5: toggle.style.left = (count + 1) * 100 - 50 + px;
				count ++;
				console.log(count);
			break;
			case 6: toggle.style.left = (count + 1) * 100 - 50 + px;
				count ++;
				console.log(count);
			break;
			case 7: toggle.style.left = 0;
				count = 0;
				console.log(count);
			break;
		}
	})
})();
