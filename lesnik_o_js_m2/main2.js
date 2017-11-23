'use strict'

let resorts = {
    sharm: 15,
    hurgada: 25,
    taba: 6
};

function checkSpace() {

    let numberOfVisitors = prompt('Введите количество участников', 2);

    if (isNaN(numberOfVisitors) || numberOfVisitors <= 0 || numberOfVisitors % 1 !==0) {
        alert('Проверьте количество путешествующих');
    } else
        for (let prop in resorts) {
            if (numberOfVisitors <= resorts[prop]) {
                let confirmmessage = confirm(`Есть место на курорте в ${prop}, бронируем?`);

                if (confirmmessage == true) {
                    resorts[prop] -= numberOfVisitors;
                    alert(`Поздравляем, вы едете в ${prop}!`);
                    break;
                }
            } else alert(`На курорте ${prop} недостаточно мест`);
        }
}
document.getElementById('vacationstart').addEventListener('click', checkSpace);
