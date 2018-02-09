/*jshint esversion: 6 */

function PressButton() {
    this.startTime = "";
    this.stopTime = "";
    this.interval = "";
}

PressButton.prototype.start = function() {
    startTime = Date.now();
};
PressButton.prototype.stop = function() {
    stopTime = Date.now();
    interval = +stopTime - +startTime;
    console.log(`interval = ${interval/1000} секунд`);
};

let doStart = new PressButton();
let doStop = new PressButton();

let startButton = document.querySelector(".start-button");
let stopButton = document.querySelector(".stop-button");

startButton.addEventListener("click", () => {
    doStart.start();
});

stopButton.addEventListener("click", () => {
    doStop.stop();
});