'use strict';
// task-1
(function () {
let result = document.querySelector('.task_1-result');
let elem = document.getElementById("container");
function onMousemove(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    result.textContent = "X Position: " + x + ", Y Position: " + y;
};

elem.addEventListener("mousemove", onMousemove, false);
})();

// task-2
(function () {
    let elem = document.querySelector('.folder');
    elem.addEventListener('dblclick', function () {
        if (elem.classList.contains('closed')) {
            elem.classList.toggle('closed');
            elem.classList.toggle('open');
        } else {
            elem.classList.toggle('open');
            elem.classList.toggle('closed');
        }
    })

})();

// task-3
(function () {
    let div = document.querySelector('.container');
    

})();
