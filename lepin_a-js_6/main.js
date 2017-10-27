'use strict';

function select(elem) {
    return document.querySelector(elem);
};

function selectAll(elem) {
    return document.querySelectorAll(elem);
};

function makeEl(el) {
    return document.createElement(el);
}

// task1
let field = selectAll('.coordinate-field');
let fieldPos = field[0].getBoundingClientRect();
let pos = selectAll('.task1 span');
field[0].addEventListener('mousemove', showPos);

function showPos (event) {
    pos[0].innerHTML = Math.ceil(event.clientX - fieldPos.x);
    pos[1].innerHTML = Math.ceil(event.clientY - fieldPos.y);
}

// task2
let folderDiv = makeEl('div');
let state = folderDiv.state = 'closed';
folderDiv.style.cssText = `background: url("img/folder-closed.png");
                     width: 128px;
                     height: 128px;
                     cursor: pointer;
                     opacity: .45;`;

select('.task2').appendChild(folderDiv);
select('.task2>div').addEventListener('dblclick', toggleFolderState);

function toggleFolderState() {
    if (state === 'closed') {
        folderDiv.style.background = 'url("img/folder-opened.png")';
        state = 'opened';
    } else {
        folderDiv.style.background = 'url("img/folder-closed.png")';
        state = 'closed';
    };
};

// task3
let greenDivContainer = makeEl('div');
let greenDiv = makeEl('div');
greenDiv.style.cssText = `box-sizing: border-box;
                          width: 30px;
                          height: 30px;
                          margin-right: 2px;
                          margin-bottom: 2px;
                          background: #6db63a;
                          transition: all .2s ease-out;
                          float: left;`;

for (let i = 0; i < 396; i++) {
    greenDivContainer.appendChild(greenDiv.cloneNode(false));
};

select('.task3').appendChild(greenDivContainer);

select('.task3>div').addEventListener('mouseover', squareToCircle);

function squareToCircle(event) {
    event.target.style.borderRadius = '15px';
};

//task4
let bgDivContainer = makeEl('div');
bgDivContainer.style.background = '#fff';

let bgDiv = makeEl('div');
bgDiv.style.cssText = `width: 100%; height: 250px; background-size: contain;`

bgDivContainer.appendChild(bgDiv);

for (let i = 0; i < 5; i++) {
    let thumbnail = makeEl('img');
    thumbnail.src = `img/${i + 1}.jpg`;
    thumbnail.style.zoom = '.3';
    bgDivContainer.appendChild(thumbnail);
};

select('.task4').appendChild(bgDivContainer);

bgDivContainer.addEventListener('click', setBg);

function setBg(event) {
    if (event.target.tagName == 'IMG') {
        select('.task4>div>div').style.backgroundImage = `url(${event.target.src})`;
    }
}
