/*jshint esversion: 6 */

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
    firstRow: ['do', 're', 'mi', 'fa', 'sol', 'la', 'la', 'sol', 'fa', 'mi', 're', 'do'],
    secondRow: ['do', 're', 'mi', 'fa', 'sol', 'la', 'sol', 'fa', 'mi', 're', 'do'],
    thirdRow: ['do', 're', 'mi', 'fa', 'sol', 'sol', 'fa', 'mi', 're', 'do'],
};

function select(name) {
    return document.querySelector(name);
}

function selectAll(name) {
    return document.querySelectorAll(name);
}

const html = select('#keyboard-template').textContent.trim();
const compiled = _.template(html);
const result = compiled(lang);
const keyboard = select('.keyboard');
keyboard.innerHTML = result;

const setBestKps = () => {
    let kpsValue = select(".kps-value");
    kpsValue.textContent = localStorage.getItem("kps");
};
setBestKps();

const playSound = note => {
    const audio = select(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(selectAll(".keyboard__btn"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");
let letterCount = select(".letter-count");
let excerciseHtml = select(".test-string-field");

const onKeyUp = (keyboardButton) => {
    setTimeout(() => {
        keyboardButton.classList.remove("keyboard__btn--active");
    }, 200);
};

const onKeydown = event => {
    let pressedButton = event.key;
    let keyboardButton;
    let sound;
    let checkbox = select("#slideThree");

    console.log(pressedButton.toLowerCase());

    if (keys.includes(pressedButton.toLowerCase())) {
        keyboardButton = buttons[keys.indexOf(pressedButton.toLowerCase())];
        sound = keyboardButton.getAttribute("data-note");
        keyboardButton.classList.add("keyboard__btn--active");

        if (checkbox.checked) {
            playSound(sound);
        }
    }
    window.addEventListener("keyup", onKeyUp(keyboardButton));
    return pressedButton.toLowerCase();
};
window.addEventListener("keydown", onKeydown);

let inputNumber = () => {
    let number = prompt("Введите количество символов для тренировки", '');

    if ((isNaN(number) || number <= 0 || number % 1 !== 0 || number > 100) && (number !== null)) {
        alert('Введите количество символов от 1 до 100');
        this.inputNumber();
    }
    return number;
};

function makeTestStringHtml() {
    let string = '';
    for (let i = 0; i < +letterCount.textContent; i++) {
        string += `<span class="letter-span">${getRandomLetter()}</span>`;
    }
    return string;
}

function getRandomLetter() {
    let letterPosition = Math.floor(0 + Math.random() * lang.en.length);
    let checkedLetter = lang.en[letterPosition];
    return checkedLetter;
}

function setKps(KPS) {
    var temp = localStorage.getItem("kps");
    if (temp === null) {
        localStorage.setItem("kps", KPS);
    } else if (Number(temp) < KPS) {
        localStorage.setItem("kps", KPS);
    }
}

function resetKps() {
    localStorage.removeItem("kps");
    setBestKps();
}

const calculateKps = (answers, time) => {
    return answers / time;
};

function trainer() {

    letterCount.textContent = inputNumber();
    excerciseHtml.innerHTML = makeTestStringHtml();

    let letters = selectAll(".letter-span");

    let correctCounter = 0,
        seconds = 0,
        minutes = 0,
        hours = 0;
    let timerSeconds,
        timerMinutes,
        timerHours;

    const setTimeString = (time) => {
        if (time < 10) {
            return `0${time}`;
        } else {
            return `${time}`;
        }
    };

    const timer = setInterval(() => {
        console.log("Timer started at time: " + Date().substring(16, 25));
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
            if (minutes == 60) {
                hours++;
                minutes = 0;
            }
        }
        timerSeconds = setTimeString(seconds);
        timerMinutes = setTimeString(minutes);
        timerHours = setTimeString(hours);

        let timerField = select(".clock__time");
        timerField.innerHTML = `${timerHours}:${timerMinutes}:${timerSeconds}`;
    }, 1000);

    function checkResult() {

        letters.item(numb).classList.remove("letter-span");
        letters.item(numb).classList.add("letter-span__active");

        const promise = new Promise((resolve, reject) => {
            window.addEventListener('keyup', (event) => {
                const keyName = event.key;
                if (keyName && event.keyCode !== 13) {
                    resolve(keyName);
                }
            });
        });

        promise.then(result => {

                if (result == letters.item(numb).textContent) {
                    letters.item(numb).classList.remove("letter-span__active");
                    letters.item(numb).classList.add("letter-span__correct");
                    correctCounter++;
                } else {
                    letters.item(numb).classList.remove("letter-span__active");
                    letters.item(numb).classList.add("letter-span__wrong");
                }

                if (++numb < letters.length) {
                    checkResult();
                } else {
                    clearInterval(timer);
                    console.log("Timer stopped at time: " + Date().substring(16, 25));
                    let kps = calculateKps(correctCounter, hours * 60 + minutes * 60 + seconds);
                    console.log("Current KPS = " + kps);
                    console.log("Current best kps from localStorage = " + localStorage.getItem("kps"));
                    setKps(kps);
                    setBestKps();
                    console.log("New best kps in localStorage = " + localStorage.getItem("kps"));
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    let numb = 0;
    checkResult();

    const stopBtn = select(".stop-exercise");
    stopBtn.addEventListener("click", (stop) => {
        console.log("Pressed stop button");
        clearInterval(timer);
    });
}

const startBtn = select(".start-exercise");
startBtn.addEventListener("click", trainer);

let resetBtn = document.querySelector(".reset-kps");
resetBtn.addEventListener("click", resetKps);
// localStorage.clear();