'use wordict';

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [[], [], []];
let word1, word2, word3;

for (let i = 0; i < alphabet.length; i++) {
    if (i <= 11) {
        keyboard[0].push(alphabet.charAt(i));
    } else if (i >= 12 && i <= 22) {
        keyboard[1].push(alphabet.charAt(i));
    } else if (i >= 23) {
        keyboard[2].push(alphabet.charAt(i));
    };
};

//может и безполезное решение но согласись креативное ;)
function makeWord(arr) {
    let result = '';

    for (var i = 1; i < arguments.length; i++) {
        findLetterPos(arguments[i])
    }

    function findLetterPos(letter) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === letter) {
                    result += arr[i][j]; //Момент истины - обращаюсь к элементам массива по индексам)))
                    break;
                };
            };
        };
    };

    return result;
};

word1 = makeWord(keyboard, 'h', 'e', 'l', 'l', 'o');
word2 = makeWord(keyboard, 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't');
word3 = makeWord(keyboard, 't', 'r', 'a', 'i', 'n', 'e', 'r');

console.log(word1);
console.log(word2);
console.log(word3);
