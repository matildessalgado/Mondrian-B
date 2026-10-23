let fundo;
let impulso = 0;

function setup() {
  createCanvas(800, 784);
  pixelDensity(1);
  noiseSeed(3);
  background(238, 240, 236);
  noStroke();

  fill(235, 40, 10);
  rect(0, 0, 367, 320);
  fill(255, 224, 0);
  rect(0, 510, 80, 274);
  fill(48, 52, 148);
  rect(367, 510, 247, 238);

  fill(10);
  rect(0, 312, 800, 16);
  rect(0, 501, 800, 17);
  rect(75, 518, 11, 266);
  rect(608, 518, 12, 266);
  rect(361, 742, 259, 12);

  fundo = get();
}

function draw() {
  image(fundo, 0, 0);

  if (random() < 0.012) impulso = random(3, 6);
  impulso *= 0.96;

  stroke(10);
  strokeWeight(12);
  strokeCap(SQUARE);
  noFill();
  beginShape();
  for (let y = 0; y <= height; y += 8) {
    let amplitude = map(y, 0, height, 1, 9);
    let desvio = (noise(y * 0.012, frameCount * 0.025) - 0.5) * 2 * amplitude;
    desvio += impulso * (y / height) * sin(y * 0.05 + frameCount * 0.5);
    vertex(367 + desvio, y);
  }
  endShape();
}