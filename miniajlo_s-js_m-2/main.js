'use strict';
let sharm = 15,
    hurgada = 25,
    taba = 6;
(function() {
    let amount = document.querySelector('.vocation');
    amount.addEventListener('click', function chekFreePlace() {
        let number = prompt('Введите количество отдыхающих', '');
        if (number == '' || ((number ^ 0) != number) || number < 0) {
            alert('Ошибка! Вы не корректно ввели количество отдыхающих');
            return chekFreePlace();
        } else if (number <= hurgada) {
            let conf = confirm('Есть места на поездку в Hurgada, Вы подтверждаете поездку?');
            if (conf == true) {
                hurgada = hurgada - number;
                alert('Хорошо Вам отдохнуть!');
            } else if (conf != true) {
                return checkSharm();
            }
        } else {
            alert('У нас нет такого количества мест!');
        }
        function checkSharm() {
            if (number <= sharm) {
                let conf = confirm('Есть места на поездку в Sharm, Вы подтверждаете поездку?');
                if (conf == true) {
                    sharm = sharm - number;
                    alert('Хорошо Вам отдохнуть!');
                } else if (conf != true) {
                    return checkTaba();
                }
            } else {
                alert('Мест нет!');
            }
        }
        function checkTaba() {
            if (number > taba) {
                alert('Мест нет!');
            } else if (number <= taba) {
                let conf = confirm('Есть места на поездку в Taba, Вы подтверждаете поездку?');
                if (conf == true) {
                    taba = taba - number;
                    alert('Хорошо Вам отдохнуть!');
                } else {
                    alert('Мест нет!');
                }
            }
        }
    });

})();
// Второй вариант

(function() {
    let city = {
        Hurgada: 25,
        Sharm: 15,
        Taba: 6
    }
    let vocation = document.querySelector('.vocation_two');
    vocation.addEventListener('click', function orderTour() {
        let number = prompt('Введите количество отдыхающих', ''),
            counter = 0
        for (let key in city) {
            console.log(city[key]);
            if (!((number ^ 0) != number) && number > 0) {
                if ((city[key] - number) > 0) {
                    let conf = confirm(`Есть места на поездку в ${key}`);
                    if (conf == true) {
                        city[key] = city[key] - number;
                        alert(`Хорошего Вам отдыха в ${key}`);
                        console.log(`В ${key} осталось мест: ${city[key]}`);
                        break;
                    } else if (counter < 2) {
                        counter++;
                        continue;
                    } else {
                        alert('Мест нет!');
                    }
                } else {
                    alert('Мест нет!');
                }
            } else {
                alert('Вы не корректно ввели количество человек!');
                return orderTour();
            }
        }
    });
})();
