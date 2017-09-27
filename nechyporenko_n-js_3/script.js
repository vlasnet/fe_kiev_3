'use strict';

let arr = ['Mercedes-Benz', 'Bentley Motors', 'Bugatti', 'Lamborghini', 'Maserati' ];

function showArr() {
  for (let i = 0; i < arr.length; i++) {
    document.getElementById('new').innerHTML = arr;
  }
}

function addElement() {
  let i = parseInt(document.getElementById('index').value);
  let elementValue = document.getElementById('value').value;

  arr[i] = elementValue;

  document.getElementById('second-task').innerHTML = arr;
}

document.getElementById('pop').innerHTML = 'Удалить ' + arr[arr.length - 1];
document.getElementById('third-task-result').innerHTML = arr;

function deleteLast() {
  arr.pop();

  document.getElementById('third-task-result').innerHTML = arr;

  let magicButton = ( (arr.length - 1) >= 0) ?
  document.getElementById('pop').innerHTML = 'Удалить ' + arr[arr.length - 1] :
  document.getElementById('pop').innerHTML = 'O_o! Вы разбили все машины!';
}

let newArr = ['Mercedes-Benz', 'Bentley Motors', 'Bugatti', 'Lamborghini', 'Maserati' ];
document.getElementById('four-task-result').innerHTML = newArr;

function deleteFirst() {
  newArr.shift();

  document.getElementById('four-task-result').innerHTML = newArr;

  if ( (newArr.length) <= 0) {
    document.getElementById('shift').innerHTML = 'O_o! Вы опять все разбили!';
  }
}

function addLast() {
  
}
