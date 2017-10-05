'use strict';
//Task 1
function showArr() {
  let arr = ['Mercedes-Benz', 'Bentley Motors', 'Bugatti', 'Lamborghini', 'Maserati' ];

  for (let i = 0; i < arr.length; i++) {
    document.getElementById('new').innerHTML = arr;
  }
}

//Task 2
function addElement() {
  let arr = ['Mercedes-Benz', 'Bentley Motors', 'Bugatti', 'Lamborghini', 'Maserati' ];
  let i = parseInt(document.getElementById('index').value);
  let elementValue = document.getElementById('value').value;

  arr[i] = elementValue;

  document.getElementById('task_2').innerHTML = arr;
}

//Task 3
let arr3 = ['Mercedes-Benz', 'Bentley Motors', 'Bugatti', 'Lamborghini', 'Maserati' ];

let task3 = document.getElementById('task_3');

task3.innerHTML = arr3;

let buttonValue = document.getElementById('pop');
let i = arr3.length - 1;
buttonValue.innerHTML = 'Удалить ' + arr3[i];

function deleteLast() {
  arr3.pop();
  task3.innerHTML = arr3;

  let i = arr3.length - 1;
  let magicButton = (i >= 0) ?
  buttonValue.innerHTML = 'Удалить ' + arr3[i] :
  buttonValue.innerHTML = 'O_o! Вы разбили все машины!';
}

//Task 4
let arr4 = ['Mercedes-Benz', 'Bentley Motors', 'Bugatti', 'Lamborghini', 'Maserati' ];
let task4 = document.getElementById('task_4');

task4.innerHTML = arr4;

function deleteFirst() {
  arr4.shift();

  task4.innerHTML = arr4;

  if ( (arr4.length) <= 0) {
    document.getElementById('shift').innerHTML = 'O_o! Вы опять все разбили!';
  }
}

//Task 5
let arr5 = ['Mercedes-Benz', 'Bentley Motors', 'Bugatti', 'Lamborghini', 'Maserati' ];
let task5 = document.getElementById('task_5');

task5.innerHTML = arr5;

function addLast() {
  let lastElement = document.getElementById('lastElement').value;

  arr5.push(lastElement);
  task5.innerHTML = arr5;
}

//Task 6
let arr6 = ['Mercedes-Benz', 'Bentley Motors', 'Bugatti', 'Lamborghini', 'Maserati' ];
let task6 = document.getElementById('task_6');

task6.innerHTML = arr6;

function addFirst() {
  let firstElement = document.getElementById('firstElement').value;

  arr6.unshift(firstElement);
  task6.innerHTML = arr6;
}
