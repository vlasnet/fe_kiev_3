/*jshint esversion: 6 */

const button = select("#submit-btn");
const firstnameButton = select("#firstname-button");
const lastnameButton = select("#lastname-button");
const telButton = select("#tel-button");

function select(name) {
    return document.querySelector(name);
}

const validate = () => {
    let user = {};
    let firstname = select("#first_name").value;
    let lastname = select("#last_name").value;
    let tel = select("#tel").value;

    let firstnamePattern = /^(\s?[A-Z]{1}[a-z]+){1,3}$|^(\s?[А-ЯЁ]{1}[а-яё]+){1,3}$|^(\s?[А-ЩЮЯЄІЇҐ’'`]{1}[а-щьюяєіїґ’'`]+){1,3}$/;
    let lastnamePattern = /^(-?[A-Z]{1}[a-z]+){1,3}$|^(-?[А-ЯЁ]{1}[а-яё]+){1,3}$|^(-?[А-ЩЮЯЄІЇҐ’'`]{1}[а-щьюяєіїґ’'`]+){1,3}$/;
    let telPattern = /^(tel)\s\+{1}\d{3}\s\d{2}\s\d{2}\s\d{2}\s\d{3}$/;

    let firstnameFlag = firstnamePattern.test(firstname);
    let lastnameFlag = lastnamePattern.test(lastname);
    let telFlag = telPattern.test(tel);

    user.firstnameFlag = firstnameFlag;
    user.lastnameFlag = lastnameFlag;
    user.telFlag = telFlag;

    if (firstnameFlag) {
        user.firstname = firstname;
    } else {
        user.firstname = "Неверно введено имя";
    }

    if (lastnameFlag) {
        user.lastname = lastname;
    } else {
        user.lastfirstname = "Неверно введена фамилия";
    }

    if (telFlag) {
        user.tel = tel;
    } else {
        user.tel = "Неверно введен номер телефона";
    }

    console.log(`user: firstnameFlag = ${user.firstnameFlag} lastnameFlag = ${user.lastnameFlag} telFlag = ${user.telFlag} firstname = ${user.firstname} lastname = ${user.lastname} tel = ${user.tel}`);

    return user;
};

function showResults(results) {
    let ul = select(".results");

    ul.innerHTML = "";

    let firstnameLi = document.createElement('li');
    let lastnameLi = document.createElement('li');
    let telLi = document.createElement('li');

    firstnameLi.classList.add("firstnameLi");
    lastnameLi.classList.add("lastnameLi");
    telLi.classList.add("telLi");

    ul.appendChild(firstnameLi);
    ul.appendChild(lastnameLi);
    ul.appendChild(telLi);

    if (results.firstnameFlag) {
        firstnameLi.textContent = `SUCCESS: firstname passed validation`;
        firstnameLi.classList.add("success");
    } else {
        firstnameLi.textContent = `ERROR: firstname failed validation`;
        firstnameLi.classList.add("error");
    }

    if (results.lastnameFlag) {
        lastnameLi.textContent = `SUCCESS: lastname passed validation`;
        lastnameLi.classList.add("success");
    } else {
        lastnameLi.textContent = `ERROR: lastname failed validation`;
        lastnameLi.classList.add("error");
    }

    if (results.telFlag) {
        telLi.textContent = `SUCCESS: tel passed validation`;
        telLi.classList.add("success");
    } else {
        telLi.textContent = `ERROR: tel failed validation`;
        telLi.classList.add("error");
    }
}

button.addEventListener('click', validate);
button.addEventListener('click', () => showResults(validate()));
firstnameButton.addEventListener('click', () => {
    let firstnameDiagramm = select("#firstname-diagramm");
    firstnameDiagramm.classList.toggle("hide");
});
lastnameButton.addEventListener('click', () => {
    let lastnameDiagramm = select("#lastname-diagramm");
    lastnameDiagramm.classList.toggle("hide");
});
telButton.addEventListener('click', () => {
    let telDiagramm = select("#tel-diagramm");
    telDiagramm.classList.toggle("hide");
});

// let phonePattern = /^(tel)\s\+{1}\d{3}\s\d{2}\s\d{2}\s\d{2}\s\d{3}$/;
// var temp = ["tel +380 44 20 30 205", "+380 44 20 30 205 tel", "let +380 44 20 30 205", "+380 44 20 30 205", "380 44 20 30 205","20 30 205"];

// let testPhone = () => {
//     temp.forEach((phone) => {
//         console.log(phone);
//         let result = phonePattern.test(phone);
//         console.log(`result = ${result}`);
//     });
// };

// testPhone();

// let namePattern = /^(\s?[A-Z]{1}[a-z]+){1,3}$|^(\s?[А-ЯЁ]{1}[а-яё]+){1,3}$|^(\s?[А-ЩЮЯЄІЇҐ’'`]{1}[а-щьюяєіїґ’'`]+){1,3}$/;

// var nameTemp = ["Li", "Ян", "Ія", "Anders", "Андерс", "Anders Bolen Ditrich", "Мамаев Сибиряк", "Мар’янів", "Мар’ян Лубківський Лубківський", "Эльвіраы", "A123", "A1131^$%#*", "aNders", "anderS", "ANDERS", "anders", "андерС", "АНДЕРС", "андерс", "Андерs", "Andеrs", "Anders-Bolen", "мар’яніВ", "Мар’яніВ"];
// let testName = () => {
//     nameTemp.forEach((nameX) => {
//         let result = namePattern.test(nameX);
//         console.log(`${nameX} = ${result}`);
//     });
// };

// testName();

// let surnamePattern = /^(-?[A-Z]{1}[a-z]+){1,3}$|^(-?[А-ЯЁ]{1}[а-яё]+){1,3}$|^(-?[А-ЩЮЯЄІЇҐ’'`]{1}[а-щьюяєіїґ’'`]+){1,3}$/;

// var surnameTemp = ["Su", "Эя", "Їв", "Anders", "Андерс", "Anders-Bolen", "Мамаев-Сибиряк", "Мар’янів", "Мар’ян-Лубківський", "aNders", "anderS", "ANDERS", "anders", "андерС", "АНДЕРС", "андерс", "Андерs", "Andеrs", "Anders-bolen", "мар’яніВ", "Мар’яніВ"];
// let testSurname = () => {
//     surnameTemp.forEach((nameX) => {
//         let result = surnamePattern.test(nameX);
//         console.log(`${nameX} = ${result}`);
//     });
// };

// testSurname();