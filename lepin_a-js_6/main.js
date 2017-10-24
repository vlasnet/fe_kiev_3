'use strict';

function select(elem) {
    return document.querySelector(elem);
};

function selectAll(elem) {
    return document.querySelectorAll(elem);
};

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
let folderDiv = document.createElement('div');
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
let greenDiv
select('.task3').style.clear = 'both';

for (let i = 0; i < 400; i++) {
    setTimeout(fnn, 1500);
    function fnn () {
    greenDiv = document.createElement('div');
    select('.task3').appendChild(greenDiv);

    greenDiv.style.cssText = `background: #6db63a;
    width: 30px;
    height: 30px;
    margin-right: 2px;
    margin-bottom: 2px;
    float: left;`;
    };

};
