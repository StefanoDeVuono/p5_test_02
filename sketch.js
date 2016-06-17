var numBubbles = 50,
    bubbles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < numBubbles; i++) {
    var bubble = new Bubble(random(0,500), random(0,500), random(10,50));
    bubbles.push(bubble);
  }
}

function draw() {
  background(0);

  bubbles.forEach(function(bubble, index) {
    bubble.display();
    bubble.move();
  });

}

function Bubble(x, y, diamater) {
  this.x = x;
  this.y = y;
}

Bubble.prototype.display = function(){
  fill(255);
  ellipse(this.x, this.y, 20, 20);
};

Bubble.prototype.move = function(){
  this.x -= 1;
  this.y -= 1;
};
