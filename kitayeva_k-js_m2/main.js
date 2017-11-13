let freePlaceCount = {
    Hurgada: 25,
    Sharm: 15,
    Tuba: 6
};
function checkPlace() {
    let places = parseInt(prompt('Введите количество человек: ', ''));
    if (isNaN(places) || places < 0 ) {
        alert('Введите еще раз');
    } else if (places > 25) {
        alert('Мест нет');
    } else
        for (let key in freePlaceCount) {
            if (places <= freePlaceCount[key]) {
                let result = confirm(`Есть место в ${key}, Вам подходит?`);
                if (result == true) {
                    freePlaceCount[key] = freePlaceCount[key] - places;
                    console.log(`${freePlaceCount[key]} мест`);
                    alert(`Спасибо, вы выбрали ${key}`);
                    break;
                } else alert(`К сожалению в ${key} мест нет`);
            }
        }
}
document.getElementById('chooseCity').addEventListener('click',checkPlace);