function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

// Write your code below here
Shape.prototype.calcPerimeter = function () {
  let perimeter = this.sides * this.sideLength;
  console.log(perimeter);
};
let square = new Shape("square", 4, 5);
square.calcPerimeter();
let triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();