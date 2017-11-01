'use strict';
const stringOne = 'qwertyuiop[]\\',
    stringTwo = 'asdfghjkl;\'',
    stringThree = 'zxcvbnm,./',
    stringOneLength = stringOne.length,
    stringTwoLength = stringTwo.length,
    stringThreeLength = stringThree.length,
    position1 = stringOne.indexOf('['),
    position2 = stringOne.indexOf(']');
console.log(`stringOne length = ${stringOneLength}, stringTwo length = ${stringTwoLength}, stringThree length = ${stringThreeLength}`);
console.log(`First symbol: stringOne = ${stringOne.charAt(0)}, stringTwo = ${stringTwo.charAt(0)}, stringThree = ${stringThree.charAt(0)} `);
console.log(`Last symbol: stringOne = ${stringOne.charAt(12)}, stringTwo = ${stringTwo.charAt(10)}, stringThree = ${stringThree.charAt(9)}`);
console.log(`Symbols position: Symbol '[' is on ${position1} position,
Symbol ']' is on ${position2} position`);

// module 2
(function() {
    let sharm = 15,
        hurgada = 25,
        taba = 6,
        amount = document.querySelector('.vocation');
    amount.addEventListener('click', function() {
        let number = prompt('Введите количество отдыхающих', '');
        if (number.value <= hurgada) {
            let confirm = confirm('Есть места в гуппе hurgada, Вы подтверждаете поездку?');
            if (confirm = true) {
                hurgada = hurgada - number.value;
                alert('Хорошо Вам отдохнуть!');
            } else if (number.value <= sharm) {
                confirm('Есть места в гуппе sharm, Вы подтверждаете поездку?');
                if (confirm == true) {
                    sharm = sharm - number.value;
                    alert('Хорошо Вам отдохнуть!');
                } else if (number.value <= taba) {
                    confirm('Есть места в гуппе taba, Вы подтверждаете поездку?');
                    if (confirm == true) {
                        taba = taba - number.value;
                        alert('Хорошо Вам отдохнуть!');
                    } else {
                        alert('Мест нет');
                    }
                } else {
                    alert('Мест нет');
                }
            }
        } else {
            alert('У нас нет такого количества мест!')
        }
    })
})();
