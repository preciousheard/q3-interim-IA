function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    ellipse(300, 200, 50, 80);
    redCircle();
    greenCircle();
}

function redCircle(){
    noStroke();
    fill(250, 0 ,0);
    ellipse(mouseX, mouseY, 100, 200);
  }
  
function greenCircle(){
    noStroke();
    fill(200, 0, 0)
    ellipse(mouseX, mouseY, 300, 400);
}
  