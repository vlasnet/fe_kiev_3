'use strict';
function tagStyle() {
    let myElem = document.querySelectorAll(".task-1 p");
    for (var i = 0; i < myElem.length; i++) {
    	myElem[i].style.backgroundColor = '#f00';
    }
};
