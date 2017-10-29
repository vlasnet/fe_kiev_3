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
let field = select('.coordinate-field');
let fieldPos = field.getBoundingClientRect();
let pos = selectAll('.task1 span');
field.addEventListener('mousemove', showPos);

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
let grayDivContainer = makeEl('div');
let grayDiv = makeEl('div');
grayDiv.style.cssText = `box-sizing: border-box;
                          width: 30px;
                          height: 30px;
                          margin-right: 2px;
                          margin-bottom: 2px;
                          background: #777;
                          transition: all .2s ease-out;
                          float: left;`;

for (let i = 0; i < 396; i++) {
    grayDivContainer.appendChild(grayDiv.cloneNode(false));
};

select('.task3').appendChild(grayDivContainer);

select('.task3>div').addEventListener('mouseover', squareToCircle);

function squareToCircle(event) {
    event.target.style.borderRadius = '15px';
};

//task4
let bgDivContainer = makeEl('div');
bgDivContainer.style.opacity = '.6';

let bgDiv = makeEl('div');
bgDiv.style.cssText = `width: 100%; height: 250px; background-size: contain;`

bgDivContainer.appendChild(bgDiv);

for (let i = 0; i < 5; i++) {
    let thumbnail = makeEl('img');
    thumbnail.src = `img/${i + 1}.png`;
    thumbnail.style.zoom = '.3';
    // thumbnail.style.opacity = '.9';
    bgDivContainer.appendChild(thumbnail);
};

select('.task4').appendChild(bgDivContainer);

bgDivContainer.addEventListener('click', setBg);

function setBg(event) {
    if (event.target.tagName == 'IMG') {
        select('.task4>div>div').style.backgroundImage = `url(${event.target.src})`;
    };
};

//task5
let square = makeEl('div');
square.style.cssText = `width: 50px; height: 50px; background-color: #777; margin-top: 0px; transition: all .5s linear;`;
select('.task5').appendChild(square);

select('.task5>div').addEventListener('click', slideDown);

function slideDown() {
    let divPos = select('.task5>div').style.marginTop;
    divPos = +divPos.replace(/px/, '') + 100 + 'px';
    select('.task5>div').style.marginTop = divPos;
};

//task6

let switchBox, switchBtn, switchBoxWidth, switchBtnPos, switchBtnState;
switchBox = select('.switch-container');
switchBtn = select('.switch-btn');

select('.task6 button').addEventListener('click', setSwitchLength);

setSwitchLength();

function setSwitchLength() {
    switchBoxWidth = '100px';
    switchBtnPos = ['10px'];
    switchBtnPos.length = select('.task6 input').value;
    switchBtn.style.left = switchBtnPos[0];
    switchBtnState = 0;

    for (let i = 1; i < switchBtnPos.length; i++) {
        switchBoxWidth = +switchBoxWidth.replace(/px/, '') + 100 + 'px';
        switchBox.style.width = switchBoxWidth;
        switchBtnPos[i] = +switchBtnPos[i - 1].replace(/px/, '') + 100 + 'px';
    };

    console.log('Switch button position = ' + switchBtnState);
};

switchBox.addEventListener('click', moveSwitchBtn);

function moveSwitchBtn() {
    if (switchBtnState < switchBtnPos.length - 1) {
        switchBtn.style.left = switchBtnPos[++switchBtnState];
        console.log('Switch button position = ' + switchBtnState);
    } else  {
        switchBtnState = 0;
        switchBtn.style.left = switchBtnPos[switchBtnState];
        console.log('Switch button position = ' + switchBtnState);
    };
};
