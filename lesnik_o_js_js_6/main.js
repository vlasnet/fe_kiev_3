'use strict'

// Task 1

// Вариант 1
// document.querySelector('#divforCLick').onmousemove = function(event) {
//     event = event || window.event;
//     document.querySelector('#coordX').innerHTML = event.offsetX;
//     document.querySelector('#coordY').innerHTML = event.offsetY;
// }
// Вариант 2

document.querySelector('#divforCLick').onmousemove = function(event) {

var elem = document.querySelector('#divforCLick');
var coords = elem.getBoundingClientRect();

document.querySelector('#coordX').innerHTML = parseInt(event.clientX-coords.x);
document.querySelector('#coordY').innerHTML = parseInt(event.clientY-coords.y);
 }



// Task 2
function openFolder() {

    let folderImage = document.getElementById("closedFolder");

    if (folderImage.classList) {
        folderImage.classList.toggle("openfolder")
    } else {
        var classes = folderImage.className.split(" ");
        var i = classes.indexOf("openfolder");
        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("closedFolder");
        folderImage.className = classes.join(" ");
    }
}

// Task 3
let containerofDivs = document.getElementById('containerofDivs');
let fragment = document.createDocumentFragment();
let div;

for (let i = 0; i <= 300; i++) {
    div = document.createElement('div');
    div.setAttribute("onmouseover", "changeDiv(this)");
    fragment.appendChild(div);
    div.style.cssText = "width: 28px; height: 28px; background-color: lightgreen; border: 1px solid green; margin: 2px;";
}

containerofDivs.appendChild(fragment);

function changeDiv(element) {
    element.style.borderRadius = "50%";
    element.style.transition = "2s";
}

// Task 4
let divforChange = document.getElementById("divforChange");
let images = document.getElementsByClassName('imgselected');

for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("onclick", "changeBackground(this)");
}

function changeBackground(element) {
    divforChange.style.backgroundImage = 'url(' + element.src + ')';
    divforChange.style.backgroundSize = "contain";
}

// Task 5

let movingblock = document.getElementById('movingblock');
let topsize = 0;

function moveblock() {
    topsize += 100;
    movingblock.style.top = topsize + 'px';
}

movingblock.addEventListener("click", moveblock);

// Task 6
let innbutton = document.getElementById('innbutton');
let leftdistance = 0;
let position = 0;

function changePosition() {
    leftdistance += 50;
	if (leftdistance > 105) {
        leftdistance = 0;
    }
    position+=1;

    if (position > 2) {
    	position = 0;
    }
    console.log(position);
    innbutton.style.left = leftdistance + 'px';
}
innbutton.addEventListener("click", changePosition);
 