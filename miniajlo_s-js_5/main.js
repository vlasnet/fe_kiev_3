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
// task 2



function clickControl(control, action) {
    control.addEventListener('click', action);
};

clickControl(task1.btn, task1.action);
