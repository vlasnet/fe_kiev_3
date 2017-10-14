'use strict'

// Задание 1
function calculateStringLength() {
    let myString = document.getElementById('myString').value;
    document.getElementById('calculatedStringLength').innerHTML = myString.length;
}

// Задание 2
let imgList = ['my', 'pic', 'sport'];

function addImage() {

    for (let i = 0; i < imgList.length; i++) {
        let img = document.createElement('img');
        img.src = 'images/' + imgList[i] + '.jpg';
        img.width = '200';
        img.height = '200';
        img.alt = 'some picture';

        let imgContainer = document.getElementById('image_container');
        imgContainer.appendChild(img);
        console.log(img);
    }
}

// Задание 3
function printWithoutDomain() {
    let nameWithoutDomain = document.getElementById('nameWithoutDomain').value;
    nameWithoutDomain = nameWithoutDomain.slice(nameWithoutDomain.indexOf('//') + 2);
    alert(nameWithoutDomain);
}


// Задание 4
function printSiteName() {

    let siteName = document.getElementById('siteName').value;

    if (siteName) {
        if (siteName.indexOf('www') >= 0) {
            siteName = siteName.slice(siteName.indexOf('www') + 4);
        } else if (siteName.indexOf("//") >= 0) {
            siteName = siteName.slice(siteName.indexOf('//') + 2);
        }
        alert(siteName);

    } else alert("Введите сайт в формате http://site.ua, https://site.ua, http://www.site.ua, https://www.site.ua или site.ua");
}

// Задание 5
let elems = document.forms.userform.elements;

function validateForm() {
    let flag = false;
    trimFields();
    checkPassword();
    checkEmail();

    if (checkPassword() && checkEmail()) {
        flag = true;
    }
    console.log(flag);
    return flag;
}

function trimFields() {
    for (let i = 0; i < elems.length; i++) {
        elems[i].value = elems[i].value.trim();
    }
}

function checkPassword() {
    if (elems.password.value.length < 5) {
        document.getElementById('errorMessagePassword').innerHTML = "Пароль должен содержать не менее 5 символов";
        return false;
    } else {
        document.getElementById('errorMessagePassword').innerHTML = " ";
        return true;
    }
}

function checkEmail() {
    if (elems.email.value.indexOf("@") > 0 &&
        elems.email.value.indexOf("@") == elems.email.value.lastIndexOf("@") &&
        elems.email.value.indexOf("@") < elems.email.value.lastIndexOf(".")) {
        document.getElementById('errorMessageEmail').innerHTML = " ";
        return true;
    } else {
        document.getElementById('errorMessageEmail').innerHTML = "Введите корректный e-mail";
        return false;
    }
}

// Задание 6
function showCharCode() {
    alert(document.getElementById('symbolCode').value.charCodeAt(0));
}
