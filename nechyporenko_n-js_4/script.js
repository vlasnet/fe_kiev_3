'use strict';

function showRedBg() {
  let arrP = document.getElementsByTagName('p');
  for (let i=0; i<arrP.length; i++) {
    let oneP = arrP[i];

    oneP.className += 'p-red';
  }
}
showRedBg();

function addShadow() {
  let arrImg = document.getElementsByTagName('img');
  for (let i=0; i<arrImg.length; i++) {
    let oneImg = arrImg[i];

    oneImg.className += 'shadow';
  }
}
addShadow();

function addPNumber() {
    let arrP = document.getElementsByTagName('p');
    for (let i=0; i<arrP.length; i++) {
      let oneP = arrP[i];
      let b = oneP.innerHTML;

      oneP.innerHTML = i + 1 + '. ' + b;
    }
}
addPNumber();

var i=0;
function mathClicks() {
  i++;
  document.getElementById('clicks').innerHTML = i;
}

function mathExp() {
  let num = document.getElementById('number').value;
  let exp = document.getElementById('exp').value;
  let result = Math.pow(num, exp);

  alert('Result is ' + result);
}

let _tagName = document.getElementById('tagsName').value;


function showUnderline(_tagName) {
  let elem = document.getElementsByTagName(_tagName);

    for (let i=0; i<elem.length; i++) {
    let oneElem = elem[i];

    oneElem.style.textDecoration  = 'underline';
  }
}

function mathAge() {
  let age = parseInt( document.getElementById('user-age').value );

}
