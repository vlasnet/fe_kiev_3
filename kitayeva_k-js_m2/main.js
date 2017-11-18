let freePlaceCount = {
    Hurgada: 25,
    Sharm: 15,
    Tuba: 6
};
function checkPlace() {
    let places = +(prompt('Введите количество человек: ', ''));
    let i = 1;
    for (let key in freePlaceCount) {
        i++;
        if (places <= freePlaceCount[key] && Number.isInteger(places)) {
            if (confirm(`Есть место в ${key}, Вам подходит?`)) {
                freePlaceCount[key] = freePlaceCount[key] - places;
                console.log(`В ${key} осталось ${freePlaces[key]} мест`);
                alert(`Спасибо, вы выбрали ${key}`);
                break;
            } else if (i >= Object.keys(places).length) {
                alert(`К сожалению в ${key} мест нет`);

            }
            else {
                alert('Попробуйте еще раз');
            }
        }
    }
}
document.getElementById('chooseCity').addEventListener('click',checkPlace);