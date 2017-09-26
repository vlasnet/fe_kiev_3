'use strict';
//Task1
let birthInput = document.getElementById('birthdayId');
let userBirthday;
let userAge;
function submitDateOfBirth() {
    if (birthInput.value <= 17 && birthInput.value.length == 2) {
        userBirthday = '20' + birthInput.value;
        userAge = 2017 - +userBirthday;
        console.log('user is ' + userAge + ' years old');
    } else if (birthInput.value > 17 && birthInput.value.length == 2) {
        userBirthday = '19' + birthInput.value;
        userAge = 2017 - +userBirthday;
        console.log('user is ' + userAge + ' years old');
    } else if (birthInput.value < 2017 && birthInput.value.length == 4) {
        userBirthday = birthInput.value;
        userAge = 2017 - +userBirthday;
        console.log('user is ' + userAge + ' years old');
    }
    else {
        console.log('false');
    }
}

//Task2
let numberX = document.getElementById('numberX');
let numberY = document.getElementById('numberY');
function ShowMaxOfTwoNumber() {
    if (numberX.value !== '' && numberY.value !== '') {
        if (+numberX.value === +numberY.value) {
            console.log('numbers are equal')
        } else if (+numberX.value > +numberY.value) {
            console.log('The major number is ' + numberX.value);
        } else {
            console.log('The major number is ' + numberY.value);
        }
    }
}

//Task3
let flat = document.getElementById('flat');

function getEntranceNumber() {
    let flatNumber = flat.value;
    if (flatNumber > 0 && flatNumber <= 21) {
        console.log('Flat ' + flatNumber + ' is in first entrance');
    } else if (flatNumber > 0 && flatNumber <= 65) {
        console.log('Flat ' + flatNumber + ' is in second entrance');
    } else if (flatNumber > 0 && flatNumber <= 81) {
        console.log('Flat ' + flatNumber + ' is in third entrance');
    }
    else {
        console.log('false');
    }
}

//Task4
let loginInput = document.getElementById('login');
let passInput = document.getElementById('pass');

function verificationUser() {
    if (loginInput.value === 'ivan' && passInput.value === '333') {
        console.log('Welcome!');
    } else if (loginInput.value === 'ssss' && passInput.value === '666') {
        console.log('Welcome!');
    } else if (loginInput.value === 'gibs' && passInput.value === '0000') {
        console.log('Welcome!');
    } else {
        console.log('Error!')
    }
}


//Task5
function calcMaxNumber() {
    let x = document.getElementById("myNumber1").value;
    let y = document.getElementById("myNumber2").value;
    let z = document.getElementById("myNumber3").value;
    document.getElementById("maxNumber").innerHTML = Math.max(x, y, z);
}

//Task6
let txtArea = document.getElementById('txtArea');
for (let i = 0; i < 101; i++) {
    if (i % 2 === 0) {
        txtArea.insertAdjacentHTML('beforeEnd', i + '  ');
    } else {
        continue;
    }
}

//Task7
let txtArea2 = document.getElementById('txtArea2');
for (i = 200; i >= 0; i--) {
    txtArea2.insertAdjacentHTML('beforeEnd', i + ' ');
}

//Task8
let txtArea3 = document.getElementById('txtArea3');
let sum = 0;
for (i = 0; i < 101; i++) {
    sum = sum + i;
    if (i === 100) {
        txtArea3.insertAdjacentHTML('beforeEnd', sum);
    }
}

//Task 9
let numC = document.getElementById('numberC');
let exp = document.getElementById('exponent');
let powOf = document.getElementById('powerOf');

function powOfNumber() {
    let pow = +numC.value;
    for (i = 1; i < +exp.value; i++) {
        pow = pow * +numC.value;
        if (i === +exp.value - 1) {
            powOf.innerHTML = (pow + ' is the power of ' + numC.value + '<sup>' + exp.value + '</sup>');
        }
    }
}

//Task 10
let sevenOutput = document.getElementById('multiply-table');
let seven = 7;
let result;
for (let i = 1; i < 10; i++) {
    result = seven * i;
    sevenOutput.insertAdjacentHTML('beforeEnd', '7 x ' + i + ' = ' + result + '<br>');
}

//Task 11
let product = 1;
for (let i = 1; i < 51; i++) {
    product = product * i;
    if (i === 50) {
        document.getElementById('product-of-number').insertAdjacentHTML('beforeEnd', product);
    }
}

//Task12
for (let i = 1000; i < 2001; i++) {
    document.getElementById('symbols').insertAdjacentHTML('beforeEnd', '&amp;#' + i + '; ');
}


