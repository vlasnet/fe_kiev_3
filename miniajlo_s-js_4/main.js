'use strict';
function tagStyle() {
    let myElem = document.querySelectorAll('.task-1 p');
    for (let i = 0; i < myElem.length; i++) {
        myElem[i].style.backgroundColor = '#f00';
    }
};
tagStyle();

function addShadow() {
    let myImg = document.querySelectorAll('.task-1 img');
    for (let i = 0; i < myImg.length; i++) {
        myImg[i].style.boxShadow = '0 0 10px #f00';
    }
};

addShadow();

function setNumbers() {
    let blocks = document.querySelectorAll('.task-1 p');
    for (let a = 0; a < blocks.length; a++) {
        blocks[a].innerHTML = (a + 1) + '. ' + blocks[a].innerHTML;
    }

};

setNumbers();

// task 4
let pressed = 0,
    btns = {
        countOne: document.querySelector('.btn_count-one'),
        countTwo: document.querySelector('.btn_count-two')
    },

    action = {
        count: function() {
            document.querySelector('.counter').textContent = ++pressed
        }
    };

// Task 5
let task5 = {
    input1: document.querySelector('.task-5 .number'),
    input2: document.querySelector('.task-5 .degree'),
    btn: document.querySelector('.task-5 .btn_pow'),
    action: function(powed) {
        powed = Math.pow(task5.input1.value, task5.input2.value);
        alert(powed);
    }
};

// Task 6
let task6 = {

    btn: document.querySelector('.style-tag'),

    action: function() {
        let tag = document.getElementById('tagStyle').value;
        let tagStyle = document.querySelectorAll(tag);
        for (let i = 0; i < tagStyle.length; i++) {
            tagStyle[i].style.textDecoration = 'underline';
        }
    }
};

// Task 7
let task7 = {
    btn: document.querySelector('.enter'),
    action: function() {
        let age = document.getElementById('user_age').value;
        if (age > 16) {
            alert('Добро пожаловать!');
        } else if (age === undefined || age === "") {
            alert('Введите ваш возраст!');
            /* Хотел тут еще ввести проверку на число, но не разобрался как это сделать*/
        } else if (age <= 16) {
            alert('Вы еще молоды...');
        };
    }
};

// task 9
let myArray = [1, 2, 3, 4];
function someArrayLength(myArr) {
    if (myArr) {
        return myArr.length
    } else {
        return 'Ошибка. Введите аргумент'
    };
}
console.log('Длина массива: ' + someArrayLength(myArray));
// task 10
let task10 = {
    btn: document.querySelector('.task-10 .ok'),
    result: document.querySelector('.task-10 .result'),
    action: function() {
        task10.result.textContent = takeResult();
    }
};

function takeResult() {
    let someNum = parseInt(document.getElementById('number').value);
    if (someNum > 10) {
        return Math.sqrt(someNum);
    } else if (someNum < 7) {
        return 'Число меньше семи';
    } else if (someNum === 8 || someNum === 9) {
        return someNum - 1;
    };
};
// task 11
let prNum = Math.floor((Math.random() * 10) + 1);
console.log('Загаданое число: ' + prNum);
let task11 = {

    btn: document.getElementById('guess'),
    temps: 0,
    action: function guessNumber() {
        let num = document.getElementById('myNum').value,
            out = document.getElementById('out'),
            tempOut = document.getElementById('temps');
        if (num === '') {
            alert('Введите число')
        }
        else if (num == prNum) {
                out.innerHTML = 'Поздравляем, вы угадали число!';
                task11.temps++;
                tempOut.innerHTML = 'Чтобы угадать число, вы использовали ' + task11.temps + ' попытки.';

            }
        else if (task11.temps == 2) {
            out.innerHTML = 'Game Over! ' +
                'Загаданое число было: ' + prNum;
            task11.temps++;
            tempOut.innerHTML = 'Вы использовали все попытки.';
        } else if (num < prNum) {
            out.innerHTML = 'Вы ввели число, меньше чем нужно';
            task11.temps++;
            tempOut.innerHTML = 'Использовано ' + task11.temps + ' попытки.';

        } else if (num > prNum) {
            out.innerHTML = 'Вы ввели число, больше чем нужно';
            task11.temps++;
            tempOut.innerHTML = 'Вы использовали ' + task11.temps + ' попытки.';
        };
    }
};

function clickControl(control, action) {
    control.addEventListener('click', action);
}

clickControl(task5.btn, task5.action);
clickControl(task6.btn, task6.action);
clickControl(task7.btn, task7.action);
clickControl(task10.btn, task10.action);
clickControl(task11.btn, task11.action);
clickControl(btns.countOne, action.count);
clickControl(btns.countTwo, action.count);
