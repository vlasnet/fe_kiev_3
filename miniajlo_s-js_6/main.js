'use strict';
// task-1
(function() {
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
(function() {
    let elem = document.querySelector('.folder');
    elem.addEventListener('dblclick', function() {
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
(function() {
    let divContainer = document.querySelector('.container');
    for (let i = 0; i < 350; i++) {
        let div = '<div class="box">' +
        ' ' +
        '</div>';
        divContainer.insertAdjacentHTML('beforeEnd', div);
        // Или так:
        // let div = document.createElement('div');
        // div.classList.add('box');
        // divContainer.appendChild(div);
    }
        let box = document.querySelectorAll('.box');
        for (let i = 0; i < box.length; i++) {
            box[i].addEventListener('mouseover', function() {
                box[i].style.borderRadius = '50%';
            });
        };
})();

// task-4
$(function () {
        $(".img_container img").click(function(){
            $(".img_slide").css("backgroundImage", "url('" + $(this).attr("src") + "')");
        })
    })

    // task-5
    let distance = 100;
    (function () {
        let box = document.querySelector('.move');
        box.addEventListener('click', function () {
            let 
        })
    })();
