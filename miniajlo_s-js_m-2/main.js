'use strict';
let sharm = 15,
    hurgada = 25,
    taba = 6;
(function() {
    let amount = document.querySelector('.vocation');
    amount.addEventListener('click', function chekFreePlace() {
        let number = prompt('Введите количество отдыхающих', '');
        if (number == '' || (number ^ 0) != number) {
            alert('Укажите количество отдыхающих');
        } else if (number > hurgada) {
            return checkSharm();
        } else if (number <= hurgada) {
            let conf = confirm('Есть места в гуппе hurgada, Вы подтверждаете поездку?');
            if (conf == true) {
                hurgada = hurgada - number;
                alert('Хорошо Вам отдохнуть!');
            } else if (conf != true && number <= sharm) {
                return checkSharm();
            }
        } else {
            alert('У нас нет такого количества мест!');
        }
        function checkSharm() {
            if (number > sharm) {
                return checkTaba();
            } else if (number <= sharm) {
                let conf = confirm('Есть места в гуппе sharm, Вы подтверждаете поездку?');
                if (conf == true) {
                    sharm = sharm - number;
                    alert('Хорошо Вам отдохнуть!');
                } else if (conf != true && number <= taba) {
                    return checkTaba();
                }
            } else {
                alert('Мест нет');
            }
        }
        function checkTaba() {
            if (number > taba) {
                alert('Мест нет!');
            } else if (number <= taba) {
                let conf = confirm('Есть места в гуппе taba, Вы подтверждаете поездку?');
                if (conf == true) {
                    taba = taba - number;
                    alert('Хорошо Вам отдохнуть!');
                } else {
                    alert('В других группах мест нет!');
                }
            }
        }
    });

})();
