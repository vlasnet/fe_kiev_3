/*jshint esversion: 6 */

import {getDataFromServer} from "./server-fetch";

function pageRender() {
    const API_KEY = '8027937-8ec3965bcdf1b5ee3d66ab500';
    let searchingWord = document.querySelector("#keyword").value;
    let picturesAmount = +document.querySelector("#count").value;

    if (searchingWord.length > 100) {
        alert("Название категории не должно превышать 100 символов");
    } else if (picturesAmount > 2 && picturesAmount <= 200) {
        let url = `https://pixabay.com/api/?key=${API_KEY}&per_page=${picturesAmount}&q=${searchingWord}`;

        getDataFromServer(url, picturesAmount, searchingWord);
    } else {
        alert("Недопустимое количество фото в запросе! \nДоступное количество фотографий от 3 до 200");
    }
}

export {pageRender};
