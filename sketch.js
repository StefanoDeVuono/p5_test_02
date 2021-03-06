var numBubbles = 50,
    shapes = [],
    ellipseCursor = true;

function setup() {
  createCanvas(windowWidth,windowHeight);
  noCursor();
  
  document.addEventListener('contextmenu', function(event){
    event.preventDefault();
  });
}

function draw() {
  background(255);
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].draw();
    if (shapes[i].x > windowWidth) {
      shapes.splice(i, 1);
    }
  }

  if (mouseIsPressed){
    if (mouseButton === LEFT) {
      ellipseCursor = true;
      shapes.push(new Circle(mouseX, mouseY, 255, 255, 255));
    }
    if (mouseButton === RIGHT) {
      ellipseCursor = false;
      shapes.push(new Square(mouseX, mouseY, 255, 255, 255));
    }
  }

  stroke(0);
  fill(255);

  cursory(mouseIsPressed, mouseButton);

}

function cursory(){
  if (ellipseCursor) {
    return ellipse(mouseX, mouseY, 10, 10);
  } else {
    return rect(mouseX, mouseY, 10, 10);
  }
}

function Circle(x,y,r,g,b){
  this.x = x;
  this.y = y;
  this.r = r;
  this.g = g;
  this.b = b;
  this.size = 10;
}

Circle.prototype.draw = function(){
  this.x--;
  this.size -= random(.5, 1);
  fill(this.r, this.g, this.b);
  ellipse(this.x, this.y, this.size, this.size);
}

function Square(x,y,r,g,b){
  this.x = x;
  this.y = y;
  this.r = r;
  this.g = g;
  this.b = b;
  this.size = 10;
}

Square.prototype.draw = function(){
  this.x++;
  this.size -= random(.5, 1);
  fill(this.r, this.g, this.b);
  rect(this.x, this.y, this.size, this.size);
}
