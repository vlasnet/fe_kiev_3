'use strict';

let freePlaces = {
      Sharm: 15,
      Hurgada: 25,
      Taba: 6
    };

function checkPlaces() {
   let persons = +( prompt('Введите количество отдыхающих: ') );
   let i = 1;

   if ( persons !== NaN && Number.isInteger(persons) && persons > 0) {
     for (let key in freePlaces) {
       i++;
       if (freePlaces[key] >= persons) {
         if ( confirm(`Есть места на поездку в ${key}. Вы едите?`) ) {
           freePlaces[key] = freePlaces[key] - persons;
           console.log(`В ${key} осталось ${freePlaces[key]} мест.`);
           alert (`Спасибо! Приятного отдыха в ${key}!`);
           break;
         };
       } else if ( i >= Object.keys(freePlaces).length ) {
            alert ('Извините, мест нет. Попробуйте снова.');
            checkPlaces();
       };
     };
   } else {
     alert ('Введите корректное число отдыхающих');
     checkPlaces();
   };
};

checkPlaces();
