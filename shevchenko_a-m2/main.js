'use strict';

(function (){
	let routes = {
		sharm: 15,
		hurgada: 25,
		taba: 6
	};

	function creatOffer(userAnswer) {
		let preOffer = [];

		if (userAnswer < routes.sharm) {
			preOffer.push('sharm');
		};
		if (userAnswer < routes.hurgada) {
			preOffer.push('hurgada');
		};
		if (userAnswer < routes.taba) {
			preOffer.push('taba');
		} else {
			alert('Мест нет!');
		};

		for (let i = 0; i < preOffer.length; i++) {
			if (confirm(`Едем в ${preOffer[i]}?`)) {
				routes[preOffer[i]] -= userAnswer;
				return;
			} else {
				alert('Может в другой раз');
			};
		};
	}

	(function checkAnswer() {
		let userAnswer = parseInt(prompt('Введите количество участников', `Целое число, больше нуля и не больше ${Math.max(routes.sharm, routes.hurgada, routes.taba)}`));
		
		if (userAnswer <= 0 || isNaN(userAnswer) || userAnswer === undefined) {
			alert('Ошибка, будьте внимательнее, при вводе количества участников;)');
		} else {
			creatOffer(userAnswer);
		}
	})();

})();
