'use strict';

// захотелось попробовать ООП))) Такое огромное количество вложеных проверок это нормально?
let resorts = {
    sharm: 15,
    hurgada: 25,
    taba: 6,
    findGroup: function () {
        let groupSize = +prompt('Введите количество участников группы...', '0');

        if (Number.isInteger(groupSize) && groupSize > 0) {
            for (let prop in resorts) {
                if (resorts.hasOwnProperty(prop) && typeof resorts[prop] === 'number') {

                    if (groupSize <= resorts[prop]) {
                        if (confirm(`Доступен маршрут: ${prop}. Хотите забронировать места?`)) {
                            resorts[prop] -= groupSize;
                            alert(`Поздравляем! Вы успешно забронировали места по маршруту ${prop}`);
                            break;
                        };
                    } else {
                        alert(`По маршруту ${prop} не достаточно свбодоных мест.`);
                    };

                };
            };
        } else {
            alert('Ошибка ввода! Моно вводить только целое положительное число.');
        };
    }
};

document.querySelector('button').addEventListener('click', resorts.findGroup);
