'use strict'
//Task1
let array = ['Sunday', ' Monday', ' Tuesday', ' Wednesday', ' Thursday', ' Friday', ' Saturday'];
function showResult() {
    document.getElementById('showArray').innerHTML = array;
}

//Task2
function getValue() {
    let array = ['Sunday', ' Monday', ' Tuesday'];
    let indexValue = document.getElementById('index').value;
    let elementValue = document.getElementById('value').value;
    array.splice(indexValue, 0, elementValue);
    let string = array.join('; ');
    document.getElementById("showArrayOutput").innerHTML = string;
}
// Task3

function popArray() {
    array.pop();
    let getArray = array.join('; ');
    document.getElementById('showPopArray').innerHTML = getArray;
}
// Task4

function shiftArray() {
    array.shift();
    let getShiftArray = array.join('; ');
    document.getElementById('showShiftArray').innerHTML = getShiftArray;
}
// Task5

function getPushValue() {
    let pushValue = document.getElementById('insertText').value;
    array.push(pushValue);
    let getPush = array.join('; ');
    document.getElementById('showPushArray').innerHTML = getPush;
}
//Task6
function unshiftArray() {
    let unshiftValue = document.getElementById('unshiftText').value;
    array.unshift(unshiftValue);
    let getUnshiftArray = array.join('; ');
    document.getElementById('showUnshiftArray').innerHTML = getUnshiftArray;
}

