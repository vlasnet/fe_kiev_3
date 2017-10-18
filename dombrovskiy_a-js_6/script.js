(function() {
  'use strict';

  var div = document.getElementById('area');
  div.style.height = "300px";
  div.style.backgroundColor = "red";
  div.addEventListener('mousemove', function() {
    document.getElementById('offx').innerHTML = event.offsetX;
    document.getElementById('offy').innerHTML = event.offsetY;
  });
})();

(function() {
  'use strict';

  var folder = document.querySelector('.folder');

  folder.addEventListener('dblclick', function() {
    if (folder.className === 'folder off') {
      folder.classList.remove('off');
      folder.classList.add('on');
    } else {
      folder.classList.remove('on');
      folder.classList.add('off');
    }
  });
})();

(function() {
  'use strict';
  var container = document.createElement('div');

  for (var i = 0; i <= 400; i++) {
    var squre = document.createElement('div');
    squre.classList.add('squre');
    container.appendChild(squre);
  }
  document.getElementById('task3').appendChild(container);

  var allSqure = document.getElementsByClassName('squre');

  for (var j = 0; j < allSqure.length; j++) {
    allSqure[j].addEventListener('mouseenter', function(e) {
      e.target.style.borderRadius = "50%";
      e.target.style.transition = "border-radius 0.5s";
    });
  }
})();

(function() {

  var block = document.getElementById('block');
  var images = document.querySelectorAll('#task4 .images');
  var active;

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(e) {
      block.style.backgroundImage = `url(${e.target.src})`;
      block.style.backgroundSize = "contain";
    });
  }
})();

(function() {
  'use strict';

  var runBlock = document.getElementById('runningBlock');
  var possition = 0;
  var top = 100;
  runBlock.addEventListener('click', function() {
    possition += top;
    runBlock.style.marginTop = possition + 'px';
  });
})();

(function() {
  'use strict';

  var control = document.getElementById('control');
  var level = 0;
  var fps = 100;
  control.addEventListener('click', function() {
    if (level === 0) {
      control.style.marginLeft = "100px";
      control.style.transition = "margin-left 1s";
      console.log(1);
      level = 1;
    } else if (level === 1) {
      control.style.marginLeft = "200px";
      level = 2;
      console.log(2);
    } else {
      control.style.marginLeft = "0px";
      level = 0;
      console.log(0);
    }
  });
})();
