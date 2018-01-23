/*jshint esversion: 6 */

document.querySelector('button').addEventListener('click', startGroupFilling);

groups = {
    sharm: 15,
    hurgada: 25,
    taba: 6
};

function startGroupFilling() {
    var tourists = +prompt("Введите количество участников группы", "");    
       
    if (tourists < 0 || tourists % 1 != 0) {
        alert("Неправильно введенное число!");
    } else {
        var freePlaces = false;

        for(var place in groups) {
            if (tourists <= groups[place]) {
                if( confirm(`Есть место в группе ${place}. Осуществить бронирование мест?`) ){
                    groups[place]-=tourists;
                    freePlaces = true;
                    alert(`Места в группе ${place} забронированы. Количество оставшихся свободных мест: ${groups[place]}`);
                    break;
                }                
            }
        }

        if(!freePlaces) {
            alert('Мест нет!');
        }
    }   
}