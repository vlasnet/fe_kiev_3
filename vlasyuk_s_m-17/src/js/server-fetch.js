import {createImages, showImage} from "./add-images";
function getDataFromServer(url, picturesAmount, searchingWord) {
    console.log(`Fetching URL: ${url}`);

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
        })
        .then(data => {
            createImages(picturesAmount);
            let links = [];
            if (data.totalHits > 0) {
                document.querySelector(".error-message").textContent = '';
                data.hits.forEach(function (hit, i) {
                    links.push(hit.webformatURL);
                });
            } else {
                console.log('No hits');
                document.querySelector(".error-message").textContent = `Сайт https://pixabay.com не содержит фотографий в категории: ${searchingWord}`;
                let images = document.querySelectorAll("[id ^=img-]");
                images.forEach((picture, i) => {
                    showImage("", "", i, picture);
                });
            }
            return links;
        })
        .then(links => {
            links.forEach((link, i) => {
                showImage(link, 'picture from site pixabay.com', i);
            });
        });
}

export {getDataFromServer};