// (function() {
//   'use strict';
//
//   let sharm = 15;
//   console.log(sharm);
//   let hurgada = 25;
//   console.log(hurgada);
//   let taba = 6;
//   console.log(taba);
//
//   let person = prompt('Сколько вас человек?');
//
//   if ( +person !== "" && +person > 0 ) {
//     if ( +person <= sharm ) {
//       let groupSharm = confirm('Есть места в группе Sharm, хотите забронировать?');
//       if ( groupSharm ) {
//         alert('Места забронированы');
//         sharm -= person;
//         console.log(`Остаток Sharm = ${sharm}`)
//       } else if ( +person < hurgada ) {
//         let groupHurgada = confirm('Есть места в группе Hurgada, хотите забронировать?');
//         if ( groupHurgada ) {
//           alert('Места забронированы');
//           hurgada -= person;
//           console.log(`Остаток Sharm = ${hurgada}`);
//       } else {
//         if ( +person <= taba ) {
//           let groupTaba = confirm('Есть места в группе Taba, хотите забронировать?');
//           if ( groupTaba ) {
//             alert('Места забронированы');
//             taba -= person;
//             console.log(`Остаток Sharm = ${taba}`);
//         }
//       } else {
//         alert('У нас есть еще группа Taba, но там только 6 свободных мест.');
//       }
//     }
//   }
//     } else if ( +person <= hurgada ) {
//       let groupHurgada = confirm('Есть места в группе Hurgada, хотите забронировать?');
//       if ( groupHurgada ) {
//         alert('Места забронированы');
//         hurgada -= person;
//         console.log(`Остаток Sharm = ${hurgada}`);
//     } else {
//       if ( +person <= taba ) {
//         let groupTaba = confirm('Есть места в группе Taba, хотите забронировать?');
//         if ( groupTaba ) {
//           alert('Места забронированы');
//           taba -= person;
//           console.log(`Остаток Sharm = ${taba}`);
//       }
//     } else {
//       alert('У нас есть еще группа Taba, но там только 6 свободных мест.');
//     }
//   }
//     } else if ( +persone <= taba ) {
//       let groupHurgada = confirm('Есть места в группе Hurgada, хотите забронировать?');
//       if ( groupHurgada ) {
//         alert('Места забронированы');
//         hurgada -= person;
//     }
//   }
//   } else {
//   alert('Ошибка ввода');
// }
// })();
(function functionName() {
  'use strict';

  let tour = {
    sharm: 15,
    hurgada: 25,
    taba: 6,
  }

  function groupTour (obj) {
    let person = +prompt("How many tickets you need?");
    if ( person > 0 && person !== "" ) {
    for (let key in obj){
      if ( person < obj[key] ){
        let town =  confirm('we have free place in ' + key + ", wanna buy?");
        if (town) {
          alert('tickets yours');
        obj[key] -= person;
        console.log([key], obj[key]);
        return
      }
      } else {
        alert('sorry, we dont have so many free place');
        return
      }
    }
  }
}

groupTour(tour);
})();
