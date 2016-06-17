// for red, green, and blue color values
var r, g, b;
var x = 0;
var ellipses = []

function setup() {
    createCanvas(windowWidth,windowHeight);
  // Pick colors randomly
  // r = random(255);
  // g = random(255);
  // b = random(255);
}

function draw() {
  background(0);
  // Draw a circle
  // strokeWeight(2);
  // stroke(r, g, b);
  // fill(r, g, b, 127);
  // ellipse(360, 200, 200, 200);

  for (var x = 0; x < width; x += 50) {
    for (var y = 0; y < height; y += 50) {
      fill(x, 200, 255);
      ellipse(x, y, 40, 40);
    }
  }
  // x++;
}



// function setup() {
//   createCanvas(windowWidth,windowHeight);
//
// }
// function draw() {
//   background(0);
//   if(mouseX<250){
//     fill(255);
//   }else{
//     fill(0,200,255);
//   }
//
//   ellipse(mouseX,mouseY,40,40);
// }
