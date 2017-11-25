let freePlaceCount = {
    Hurgada: 25,
    Sharm: 15,
    Tuba: 6
};
function checkPlace() {
    let places = +(prompt('Введите количество человек: ', ''));
    let i = 0;
    if (places < 0 || isNaN(places) || !Number.isInteger(places)){
        alert('Введите корректные данные');
    } else {
        for (let key in freePlaceCount) {
            if (places <= freePlaceCount[key]){
                if (confirm(`Есть место в ${key}, Вам подходит?`)) {
                    freePlaceCount[key] = freePlaceCount[key] - places;
                    console.log(freePlaceCount);
                    alert('Спасибо!');
                    break;
                }
            } else  {
                i++;
                if (i < Object.keys(freePlaceCount).length){
                    continue;
                } else {
                    alert ('Мест нет');
                }
            }
        }
    }
    }

document.getElementById('chooseCity').addEventListener('click',checkPlace);
