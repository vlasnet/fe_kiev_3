'use strict';

let myArray = [1, 2, 3, 4, 5],
    result = document.getElementById('task_2'),
    btns = {
        ok: document.querySelector('.btn_ok'),
        add: document.querySelector('.btn_add'),
        pop: document.querySelector('.btn_pop'),
        shift: document.querySelector('.btn_shift'),
        push: document.querySelector('.btn_push'),
        unshift: document.querySelector('.btn_unshift')
    },

    push   = document.querySelector('.push'),
    action = {
        arrayOutput: function() {
            result.textContent = myArray.join(', ');
        },
        add: function() {
            let index = document.getElementById('index').value,
                value = document.getElementById('value').value;
            myArray[index] = value;
            form.reset();
        },
        pop: function() {
            myArray.pop();
        },
        shift: function() {
            myArray.shift();
        },
        push: function() {
            myArray.push(push.value);
            form.reset();
        },
        unshift: function() {
            myArray.unshift(push.value);
            form.reset();
        }
    };

function clickControl(control, action) {
    control.addEventListener('click', action);
}

clickControl(btns.ok, action.arrayOutput);
clickControl(btns.add, action.add);
clickControl(btns.pop, action.pop);
clickControl(btns.shift, action.shift);
clickControl(btns.unshift, action.unshift);
clickControl(btns.push, action.push);
