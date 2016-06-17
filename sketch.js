function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);

  for (var x = 0; x < width; x += 30) {
    for (var y = 0; y < height; y += 30) {
      var glitter = random(0,255);
      fill(190, 0, 255, glitter);
      ellipse(x, y, 40, 40);
    }
  }

}
