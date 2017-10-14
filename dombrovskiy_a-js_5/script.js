(function () {
  'use strict';

  function getLength (x) {
    answer.innerHTML = x.length;
  }


  var submitLength = document.getElementById('submitLength');
  submitLength.addEventListener('click', function () {
    var answer = document.getElementById('answer');
    var lengthText = document.getElementById('lengthText').value;
    getLength(lengthText);
  });

})();

(function () {
  'use strict';

var image = ['wonderWoman', 'flash', 'spiderMan', 'wolverine', 'deadPool'];
var divForImg = document.getElementById('img');

  for (var i = 0; i < image.length; i++) {
    var pictures = document.createElement('img');
    pictures.src = 'img/' + image[i] + ".jpg";
    pictures.setAttribute('height', '150px');

    divForImg.append(pictures);
  }
})();


(function () {
  'use strict';

  var submitSite = document.getElementById('submitSite');
  var spanForAnswer = document.getElementById('spanForAnswer');
  submitSite.addEventListener('click', function () {
    var url = document.createElement('a');
    url.href = document.getElementById('site').value;

    spanForAnswer.innerHTML = url.hostname;
  });
})();

(function () {
  'use strict';

  var submitWebSite = document.getElementById('submitWebSite');
  var forAnswer = document.getElementById('forAnswer');
  submitWebSite.addEventListener('click', function () {
    var url = document.createElement('a');
    url.href = document.getElementById('webSite').value;

    if (~url.href.indexOf('www.')){
      var searchSubStr = (url.href.indexOf('www.') + 4);
      var answer = url.href.substring(searchSubStr);
      forAnswer.innerHTML = answer;
    } else {
      url.href = document.getElementById('webSite').value;
      forAnswer.innerHTML = url.hostname;
    }
    });
})();


(function () {
  'use strict';

    var input = {
      form: document.getElementById('form'),
      login: document.getElementById('login'),
      pass: document.getElementById('pass'),
      email: document.getElementById('email'),
    };

    form.addEventListener('submit', function (e) {
      var valid = true;
      var login = input.login.value.trim();
      var pass = input.pass.value.trim();
      var email = input.email.value.trim();

      if (pass.length < 5){
        valid = false;
      }

      if (login.indexOf(" ") !== -1){
      valid = false;
      }
      // if(email.indexOf('@') === -1 || email.indexOf(' ') !== -1){
      //   valid = false;
      // }

      if (!valid) {
        e.preventDefault();
        return valid;
      }

      return valid;
    });
})();

(function () {
  'use strict';

  var code = document.getElementById('code');
  code.addEventListener('input', function () {
    var output = document.getElementById('output');
    output.innerHTML = code.value.charCodeAt(code.value.length - 1);
  });
})();
