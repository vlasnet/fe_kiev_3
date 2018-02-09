/*jshint esversion: 6 */

class Timer {
    constructor(startTime, stopTime) {
        this.startTime = startTime || "";
        this.stopTime = stopTime || "";
        this.interval = (+this.stopTime - +this.startTime) || "";
    }

    start() {
        this.startTime = Date.now();
    }

    stop() {
        this.stopTime = Date.now();
        this.interval = +this.stopTime - +this.startTime;        
    }

    getTime() {
        console.log(`interval = ${this.interval/1000} секунд`);
        return this.interval;
    }

    static timeToNY(){
        let currentDay = Date.now();
        let newYear = new Date().setFullYear(2018, 11, 31);
        let days = (newYear-currentDay)/(1000*60*60*24);

        return days;
    }
}

let firstClassEntity = new Timer(853, 972);
let secondClassEntity = new Timer(964, 1075);

console.log(`firstClassEntity: startTime = ${firstClassEntity.startTime}, stopTime = ${firstClassEntity.stopTime}, interval = ${firstClassEntity.interval} секунд`);
console.log(`secondClassEntity: startTime = ${secondClassEntity.startTime}, stopTime = ${secondClassEntity.stopTime}, interval = ${secondClassEntity.interval} секунд`);

let stopwatch = new Timer();

let startButton = document.querySelector(".start-button");
let stopButton = document.querySelector(".stop-button");

startButton.addEventListener("click", () => {
    stopwatch.start();
});

stopButton.addEventListener("click", () => {
    stopwatch.stop();
    stopwatch.getTime();
});

console.log(`До Нового Года осталось (дней): ${Timer.timeToNY()}`);