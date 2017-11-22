(function functionName() {
  'use strict';

  let tour = {
    sharm: 15,
    hurgada: 25,
    taba: 6,
  }

  function groupTour (obj) {
    let i = 0;
    let person = +prompt("How many tickets you need?");
    if ( person > 0 && person !== "" && person % 1 === 0 ) {
    for (let key in obj){
      if ( person <= obj[key] ){
        let town =  confirm('we have free place in ' + key + ", wanna buy?");
        if (town) {
          alert('tickets yours');
          obj[key] -= person;
          console.log([key], obj[key]);
          break
        }
      } else {
        i++;
        console.log(i);
        if ( i < Object.keys(tour).length) {
          continue
        } else {
          alert('sorry')
        }
      }
    }
  } else {
    alert('enter the right number');
  }
}

groupTour(tour);
})();
