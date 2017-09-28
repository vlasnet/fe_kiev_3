(function paragRed(){
  var parag = document.querySelectorAll('.wrapper p');

  for ( var i = 0; i < parag.length; i++ ) {
    parag[i].style.color = "red";
  }
})();

(function shadow(){
  var img = document.querySelectorAll('img');

  for ( var i = 0; i < img.length; i++ ) {
    img[i].style.boxShadow = "15px 15px";
  }
})();

(function paragNumber(){
  var parag = document.querySelectorAll('p');

  for ( var i = 0; i < parag.length; i++ ) {
    var number = i + 1;
    parag[i].innerHTML = number + ". " + parag[i].innerHTML;
  }
})();

var clicks = 0;
function clickLeft() {
  document.getElementById('leftText').innerHTML = ++clicks;
}

var click = 0;
function clickRight() {
  document.getElementById('rightText').innerHTML = ++click;
}

document.getElementById('left').addEventListener("click", clickLeft);
document.getElementById('right').addEventListener("click", clickRight);

function pow(num, exp) {
var val = Math.pow(num, exp);
alert(val);
}

var submit = document.getElementById('push');
submit.addEventListener('click', function() {
  var number = document.getElementById('number').value;
  var exponent = document.getElementById('exponent').value;
  if( number !== "" && exponent !== "") {
    pow(number, exponent);
  }
});

function getTag(tag) {
  var allTags = document.querySelectorAll(tag);
  allTags.forEach(function (currentTag) {
    currentTag.style.textDecoration='underline';
  });
}

var submit = document.getElementById('submit');
submit.addEventListener('click', function () {
  var tag = document.getElementById('tag').value;
  getTag(tag);
});


(function () {

function guess(guessNumber) {
  if(+guessNumber === randomNumber && tries !== 0) {
    alert("Вы угадали");
  }else if(+guessNumber < randomNumber && tries !== 0){
    tries--;
    alert("Загаданое число больше");
  }else if(+guessNumber > randomNumber && tries !== 0){
    tries--;
    alert("Загаданое число меньше");
  } else {
    alert("Закончились попытки");
  }
}

var tries = 3;
var randomNumber = Math.round(Math.random() * 10);
var submitGuess = document.getElementById('submitGuess');
submitGuess.addEventListener('click', function () {
  var guessNumber = document.getElementById('guessNumber').value;
  guess(guessNumber);
});

})();

function getAge(age) {
alert("Добро пожаловать");
}

  var ageSubmit = document.getElementById('ageSubmit');
  ageSubmit.addEventListener('click', function () {
    var age = document.getElementById('age').value;

    if (age > 16) {
      getAge(age);
    } else if (age === "" || age === undefined) {
      alert("Введите возраст");
    } else {
      alert("Вы слишком молоды");
    }
  });


var arr = [1, 2, 3, 4, 5];
  function getLenght(arr) {
    if (arr !== undefined || arr !== null) {
      document.getElementById('showArr').innerHTML = (arr.length - 1);
  } else {
    alert('Error');
  }
}

  getLenght(arr);



function getDate(enteredNumber) {

  if (enteredNumber > 10) {
    var doubleNumber = enteredNumber;
    for (var i = 0; i < enteredNumber; i++) {
      doubleNumber *= enteredNumber;
    }
    return doubleNumber;
  } else if (enteredNumber < 7) {
    var lowNumber = "Ваше число меньше 7";
    return lowNumber;
  } else if (enteredNumber === 8 || enteredNumber === 9) {
    return enteredNumber;
  }
}


var submitNumbers = document.getElementById('submitNumber');
submitNumbers.addEventListener('click', function () {
  var enteredNumber = +(document.getElementById('enteredNumber').value);
  var answer = getDate(enteredNumber);
  alert(answer);
});

// alert(answer);
