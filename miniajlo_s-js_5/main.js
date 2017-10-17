'use strict';
// task 1
let task1 = {
    btn: document.querySelector('.task-1 .count_length'),
    result: document.querySelector('.task-1 .result'),
    action: function countLength() {
        let string = document.getElementById('some_text').value;
        task1.result.textContent = string.length;
    }
};
// task2

let imgsSrc = document.querySelector('.images_array');
let myImgs = ['images/1.jpg', 'images/2.jpeg', 'images/3.jpg'];

for (let i = 0; i < myImgs.length; i++) {
    let img = '<img src=' + myImgs[i] + ' />' + '  ';
    imgsSrc.insertAdjacentHTML('beforeEnd', img);
};

// task3
let task3 = {
    btn: document.querySelector('.create_link'),
    action: function() {
        let myLinks = document.getElementById('url'),
            result = document.getElementById('my-link');
        result.href = myLinks.value;
        result.innerHTML = result.hostname.replace('www.', "");
    }
};

let user = document.task5;
let taskFive = {
    btn: user.check,
    result: document.querySelector('.task-5 .result'),
    action: function checkValidForm() {
        let a = user.elements;
        for (let i = 0; i < a.length; i++) {
            a[i].value = a[i].value.trim();
            console.log(a[i].value);
        }


        if ((user.pass.value.length < 5) || (user.pass.value === '')) {
            taskFive.result.textContent = 'Пароль должен содержать более 5 символов!';
        };

        if ((~ user.email.value.indexOf('@')) || (~ user.email.value.indexOf(' ') !== -1)) {
            taskFive.result.innerHTML = taskFive.result.textContent + '<br>' + 'Введите корректно email!';
        };
    }
};

let task6 = {
    btn: document.querySelector('.task-6 .btn'),
    input: document.querySelector('.code'),
    result: document.querySelector('.task-6 .result'),
    action: function () {
        task6.result.textContent = task6.input.value.charCodeAt(0);
    }
};



function clickControl(control, action) {
    control.addEventListener('click', action);
};

clickControl(task1.btn, task1.action);
clickControl(task3.btn, task3.action);
clickControl(taskFive.btn, taskFive.action);
clickControl(task6.btn, task6.action);
