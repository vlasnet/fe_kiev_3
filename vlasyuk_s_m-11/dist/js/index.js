/*jshint esversion: 6 */
let url = "http://fecore.net.ua/rest/";

let getUsersBtn = select("#get-users");
let addUserBtn = select("#add-user");
let removeUserBtn = select("#remove-user");
let updateUserBtn = select("#update-user");

let resultField = select(".result-field");
const tBody = select("#js-tbody");
const htmlTpl = select("#table-row").textContent.trim();
const compiled = _.template(htmlTpl);

function getUsers() {

    console.log(`Feyching URL: ${url}`);

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error fetching data. Response status: " + response.status + " : " + res.statusText);
        })
        .then(json => {
            let users = [];
            for (let key in json) {
                users.push(json[key]);
            }
            handler(users);
        })
        .catch(err => {
            console.error("Error: ", err);
        });
}

function addUser() {
    let addUserName = select(".add-user-name").value;
    let addUserScore = select(".add-user-score").value;

    let addUrl = `${url}?action=1&name=${addUserName}&score=${addUserScore}`;
    console.log(`Feyching URL: ${addUrl}`);

    fetch(addUrl)
        .then(response => {
            if (response.ok) {
                response.json();
            } else {
                throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
            }
        })
        .then(getUsers);
}

function removeUser() {

    let removeUserId = select(".remove-user-id").value;

    let removeUrl = `${url}?action=3&id=${removeUserId}`;
    console.log(`Feyching URL: ${removeUrl}`);

    fetch(removeUrl)
        .then(response => {
            if (response.ok) {
                response.json();
            } else {
                throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
            }
        })
        .then(getUsers);
}

function updateUser() {
    let updateUserId = select(".update-user-id").value;
    let updateUserName = select(".update-user-name").value;
    let updateUserScore = select(".update-user-score").value;

    let updateUrl = `${url}?action=2&id=${updateUserId}&name=${updateUserName}&score=${updateUserScore}`;

    console.log(`Feyching URL: ${updateUrl}`);

    fetch(updateUrl)
        .then(response => {
            if (response.ok) {
                response.json();
            } else {
                throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
            }
        })
        .then(getUsers);
}

function select(name) {
    return document.querySelector(name);
}

function clearResultField() {
    tBody.innerHTML = "";
}

const handler = (users) => {
    let htmlString = "";

    users.forEach(user => {
        htmlString += compiled(user);
    });
    tBody.innerHTML = htmlString;
};

getUsersBtn.addEventListener("click", getUsers);
addUserBtn.addEventListener("click", addUser);
removeUserBtn.addEventListener("click", removeUser);
updateUserBtn.addEventListener("click", updateUser);