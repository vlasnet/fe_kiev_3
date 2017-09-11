/**
 * Created by user on 9/9/2017.
 */
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 1) {
    alert('Степень ' + n +
        'не поддерживается, введите целую степень, большую 1'
    );
} else {
    alert( pow(x, n) );
}