/*jshint esversion: 6 */

class Shape {
    constructor(color, initX, initY) {
        this.color = color || "";
        this.initX = initX || "";
        this.initY = initY || "";
    }

    getColor() {
        return this.color;
    }

    setColor(val) {
        this.color = val;
    }

    getCoords() {
        return [this.initX, this.initY];
    }

    moveTo(newX, newY) {
        this.initX = newX;
        this.initY = newY;
    }
}

class Rectangle extends Shape {
    constructor(color, initX, initY, initWidth, initHeight) {
        super(color, initX, initY);
        this.width = initHeight || "";
        this.height = initHeight || "";
    }

    setWidth(newWidth) {
        this.width = newWidth;
    }

    setHeight(newHeight) {
        this.height = newHeight;
    }

    getDims() {
        return [this.width, this.height];
    }

    draw() {
        console.log(`
        Drawing a Rectangle at:
            (x: ${this.getCoords()[0]}, y: ${this.getCoords()[1]})
        With dimensions:
            width: ${this.getDims()[0]}
            height: ${this.getDims()[1]}
        Filled with color: ${this.getColor()}`);
    }
}

class Circle extends Shape {
    constructor(color, initX, initY, initRadius) {
        super(color, initX, initY);
        this.radius = initRadius || "";
    }

    getRadius() {
        return this.radius;
    }

    setRadius(val) {
        this.radius = val;
    }

    draw() {
        console.log(`
        Drawing a Circle at:
            (x: ${this.getCoords()[0]}, y: ${this.getCoords()[1]})
        With dimensions:
            radius: ${this.getRadius()}
        Filled with color: ${this.getColor()}`);
    }
}

let rectangleButton = document.querySelector(".rectangle-button");
let circleButton = document.querySelector(".circle-button");

rectangleButton.addEventListener("click", () => {

    let rectangle = new Rectangle('#009688', 10, 10, 100, 100);
    rectangle.draw();
});

circleButton.addEventListener("click", () => {
    let circle = new Circle('#FF5722', 50, 50, 250);
    circle.draw();
});