'use strict';

const alphabet = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./';

function addKeyboardLayout(alphabet) {
	let keyboard = [[], [], []];

	for (let i = 0; i < alphabet.length; i++) {
		if (i >= 0 && i < 12) {
			keyboard[0].push(alphabet[i]);
		} else if (i >= 12 && i < 23) {
			keyboard[1].push(alphabet[i]);
		} else {
			keyboard[2].push(alphabet[i]);
		}
	}

	return keyboard;
};

let keyboard = addKeyboardLayout(alphabet);

function addRandomIndex(max) {
	 return Math.floor(Math.random() * max);

};

function getRandCharInRow(row) {
	return keyboard[row][addRandomIndex(keyboard[row].length)];
};

function getRandCharInAlph() {
	return alphabet[addRandomIndex(alphabet.length)];
};

console.log(keyboard);
console.log(`Random char in row #0 >> ${getRandCharInRow(0)}`);
console.log(`Random char in row #1 >> ${getRandCharInRow(1)}`);
console.log(`Random char in row #2 >> ${getRandCharInRow(2)}`);
console.log(`Random char in alphabet >> ${getRandCharInAlph()}`);
