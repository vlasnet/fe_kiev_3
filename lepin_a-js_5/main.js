'use strict';

//task 1
calcLengthBtn.onclick = function calcStrLength () {
    let strLength = inputElem.value.length;
    strLengthOut.innerHTML = 'Длина строки = ' + strLength;
};

//task 2
let imgArr = [];

for (var i = 1; i <= 5; i++) {
    imgArr.push('/home/lepin/work/aleksandrlepin.github.io/js-module-5/img/' + i + '.png');
};

showImg.onclick = function () {
    for (var i = 0; i < imgArr.length; i++) {
        let imgElem = document.createElement('img');
        imgElem.src = imgArr[i];
        imgOutput.appendChild(imgElem);
    };
};

//task 3
showDomain.onclick = function () {
    let url = inputUrl.value;
    let domain = url.slice(url.indexOf('//') + 2);
    domainOutput.innerHTML = domain;
};

//task 4
showSite.onclick = function () {
    let url = inputUrl2.value;
    let site;
    if (url.indexOf('//www.') !== -1) {
        site = url.slice(url.indexOf('//www.') + 6);
    } else if (url.indexOf('//') !== -1) {
        site = url.slice(url.indexOf('//') + 2);
    };
    siteOutput.innerHTML = site;
};

//task 5
auth.checkForm.onclick = function () {
    let errors = 0;
    let output = auth.querySelector('pre');
    auth.querySelector('pre').innerHTML = '';
    for (let key in auth) {
        if (auth.hasOwnProperty(key)) {
            let inputValue = auth[key].value;
            while (inputValue.indexOf(' ') !== -1) {
                inputValue = inputValue.replace(' ', '');
            };
            auth[key].value = inputValue;
        };
    };

    if (auth.userSurName.value === '' || auth.userName.value === '') {
        errors++;
        output.insertAdjacentText('beforeEnd', 'Вы не ввели имя или фамилию.\n');
    };

    if (auth.userPassword.value.length < 5) {
        errors++;
        output.insertAdjacentText('beforeEnd', 'Пароль должен быть больше 4 символов.\n');
    };

    let emailCheck = 0;
    let emailCheckPos = 0;
    while (auth.userEmail.value.indexOf('@', emailCheckPos) !== -1) {
        emailCheck++;
        emailCheckPos = auth.userEmail.value.indexOf('@', emailCheckPos) +1;
    };

    if (emailCheck > 1 || emailCheck < 1) {
        errors++;
        output.insertAdjacentText('beforeEnd', 'Почтовый адрес должен содержать только один символ @\n');
    };

    if (errors === 0) {
        output.innerHTML = 'Вы успешно прошли авторизацию!';
    } else {
        output.insertAdjacentText('beforeEnd', 'Исправьте ошибки и попробуйте снова.');
    };
};

//task 6
char.showCharCode.onclick = function () {
    char.querySelector('pre').innerHTML = char.charInput.value.charCodeAt(0);
};
