'use strict';

let someArr = [1, 2, 3, 4],
    pNew    = document.getElementById('new'),
    btns    = {
        ok:      document.querySelector('.btn_ok'),
    	add:     document.querySelector('.btn_add'),
    	pop:     document.querySelector('.btn_pop'),
    	shift:   document.querySelector('.btn_shift'),
    	push:    document.querySelector('.btn_push'),
    	unshift: document.querySelector('.btn_unshift') },
    inputs  = {
    	index:   document.querySelector('.inp_index'),
    	value:   document.querySelector('.inp_value'),
    	push:    document.querySelector('.inp_push'),
    	unshift: document.querySelector('.inp_unshift') },
    actions = {
        innerElement: function() { pNew.innerHTML = someArr; },
    	addElement:   function() { 
                        someArr[inputs.index.value] = inputs.value.value;
                        cleanInput(inputs.index);
                        cleanInput(inputs.value); },

    	pop:          function() { someArr.pop(); },
    	shift:        function() { someArr.shift(); },
    	push:         function() { 
                        someArr.push(inputs.push.value);
                        cleanInput(inputs.push); },
    	unshift:      function() { 
                        someArr.unshift(inputs.unshift.value);
                        cleanInput(inputs.unshift); }
    };

function clickControl(control, action) {
	control.addEventListener('click', action);
}

function cleanInput(input) {
    input.value = "";
}

clickControl(btns.ok, actions.innerElement);
clickControl(btns.add, actions.addElement);
clickControl(btns.pop, actions.pop);
clickControl(btns.shift, actions.shift);
clickControl(btns.push, actions.push);
clickControl(btns.unshift, actions.unshift);
