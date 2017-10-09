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


// // task3
//
// let url = document.querySelector('.url');
// url.href = url.value;
// console.log(url.hostname);




function clickControl(control, action) {
    control.addEventListener('click', action);
};

clickControl(task1.btn, task1.action);
