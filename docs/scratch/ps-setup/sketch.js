function setup() {
    let c = createCanvas(innerWidth, innerHeight);
    c.parent("sketch-parent");
    rectMode(CENTER)
  }
  
  function draw() {
    background(100);
    
    
    stroke(255, 255, 255);
    strokeWeight(3)
    noFill();
    ellipse(mouseX, mouseY, 50, 50)
    

  }

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}


