(function makesParagraphsRed() {
  var paragraph = document.querySelectorAll('.wrapper p');

  for (var i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
  }
})();

(function showShadow() {
  var image = document.querySelectorAll('img');

  for (var i = 0; i < image.length; i++) {
    image[i].style.boxShadow = "15px 15px";
  }
})();

(function makesParagraphsNumbered() {
  var paragraph = document.querySelectorAll('p');

  for (var i = 0; i < paragraph.length; i++) {
    var number = i + 1;
    paragraph[i].innerHTML = number + ". " + paragraph[i].innerHTML;
  }
})();

var clicks = 0;

function considersPushing() {
  document.getElementById('leftText').innerHTML = ++clicks;
}

document.getElementById('left').addEventListener("click", considersPushing);
document.getElementById('right').addEventListener("click", considersPushing);

function power(num, exp) {
  var val = Math.pow(num, exp);
  alert(val);
}

var submit = document.getElementById('push');
submit.addEventListener('click', function() {
  var number = document.getElementById('number').value;
  var exponent = document.getElementById('exponent').value;
  if (number !== "" && exponent !== "") {
    power(number, exponent);
  }
});

function getTag(tag) {
  var allTags = document.querySelectorAll(tag);
  allTags.forEach(function(currentTag) {
    currentTag.style.textDecoration = 'underline';
  });
}

var submit = document.getElementById('submit');
submit.addEventListener('click', function() {
  var tag = document.getElementById('tag').value;
  getTag(tag);
});


(function() {

  function guessesNumber(number) {
    if (+number === randomNumber && tries !== 0) {
      alert("Вы угадали");
    } else if (+number < randomNumber && tries !== 0) {
      tries--;
      alert("Загаданое число больше");
    } else if (+number > randomNumber && tries !== 0) {
      tries--;
      alert("Загаданое число меньше");
    } else {
      alert("Закончились попытки");
    }
  }

  var tries = 3;
  var randomNumber = Math.round(Math.random() * 10);
  var submitGuess = document.getElementById('submitGuess');
  submitGuess.addEventListener('click', function() {
    var number = document.getElementById('guessNumber').value;
    guessesNumber(number);
  });

})();


var ageSubmit = document.getElementById('ageSubmit');
ageSubmit.addEventListener('click', function() {
  var age = document.getElementById('age').value;

  if (age > 16) {
    alert("Добро пожаловать");
  } else if (age === "" || age === undefined) {
    alert("Введите возраст");
  } else {
    alert("Вы слишком молоды");
  }
});


var arr = [1, 2, 3, 4, 5];

function getLenght(arr) {
  if (arr !== undefined || arr !== null) {
    document.getElementById('showArr').innerHTML = arr.length;
  } else {
    alert('Error');
  }
}

getLenght(arr);



function guessNumber(enteredNumber) {

  if (enteredNumber > 10) {
    var answer = Math.pow(enteredNumber, enteredNumber);
    return answer;
  } else if (enteredNumber < 7) {
    var lowNumber = "Ваше число меньше 7";
    return lowNumber;
  } else if (enteredNumber === 8) {
    return 7;
  } else {
    return 8;
  }
}


var submitNumbers = document.getElementById('submitNumber');
submitNumbers.addEventListener('click', function() {
  var enteredNumber = +(document.getElementById('enteredNumber').value);
  var answer = guessNumber(enteredNumber);
  alert(answer);
});
