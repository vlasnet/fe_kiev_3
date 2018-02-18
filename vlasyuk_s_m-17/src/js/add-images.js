function showImage(link, alt, idNumber, image = 0) {
    let img;
    if (image == 0) {
        img = document.querySelector(`#img-${idNumber + 1}`);
    } else {
        img = image;
    }
    img.setAttribute('src', link);
    img.setAttribute('alt', alt);
}

function createImages (amount){
    let imagesField = document.querySelector(".images-wrapper");
    imagesField.innerHTML = "";
    for (let i = 1; i <= amount; i++) {
        let tempImage = document.createElement("div");
        tempImage.classList.add("img");
        tempImage.innerHTML = `<img class="img" src="" alt="" id="img-${i}">`;
        imagesField.appendChild(tempImage);
    }
}

export {showImage, createImages};