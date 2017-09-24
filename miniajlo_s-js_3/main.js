'use strict';



let  myArray = [1, 2, 3, 4],
     result  = document.getElementById('new'),
     btns = {
         ok:    document.querySelector('.btn_ok'),
         add:   document.querySelector('.btn_add'),
         pop:   document.querySelector('.btn_pop'),
         shift: document.querySelector('.btn_shift'),
         push:  document.querySelector('.btn_push'),
         unshift: document.querySelector('.btn_unshift')
     },
     inputs = {
         index: document.querySelector('.index'),
         value: document.querySelector('.value'),
         push:  document.querySelector('.push')
     },
     action = {
         arrayOutput: function () {
             result.textContent = myArray.join(', ');
         },
         add: function () {
             myArray[inputs.index.value] = inputs.value.value;
         },
         pop: function () {
             myArray.pop();
         },
         shift: function () {
             myArray.shift();
         },
         push: function () {
             myArray.push(inputs.push.value);
         },
         unshift: function () {
             myArray.unshift(inputs.push.value);
         }
     };
//
 function clickControl(control, action) {
 	control.addEventListener('click', action);
 }

 
 clickControl(btns.ok, action.arrayOutput);
 clickControl(btns.add, action.add);
 clickControl(btns.pop, action.pop);
 clickControl(btns.unshift, action.unshift);
 clickControl(btns.push, action.push);
//  // clickControl(btns.unshift, actions.unshift);
