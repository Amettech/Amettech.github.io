var img;
var initials = 'kg'; // Your initials
var choice = '1'; // Starting choice, so it is not empty
var screenbg = 250; // Off-white background
var lastscreenshot = -1; // Initialize to an invalid second

function preload() {
  // preload() runs once, it may make you wait
  // img = loadImage('cat.jpg'); // Uncomment if you have cat.jpg
  // img = loadImage('https://dma-git.github.io/images/74.png'); // Uncomment to use a hosted image
}

function setup() {
  createCanvas(600, 400); // Canvas size
  background(screenbg); // Use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // Set choice to the key that was pressed
    clear_print(); // Check to see if it is clear screen or save image
  }
  if (mouseIsPressed) {
    newkeyChoice(choice); // If the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { // toolChoice is the key that was pressed
  if (toolChoice == '1') { // First tool
    let weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // Second tool
    strokeWeight(2);
    stroke(102);
    line(mouseX, 0, mouseX, height); // Gray line
    stroke(0);
    let mx = mouseX / 2 + 60;
    line(mx, 0, mx, height); // Black line
    
  } else if (toolChoice == '3') { // Third tool - Rainbows
    colorMode(HSB);
    fill(frameCount % 360, 100, 100);
    noStroke();
    ellipse(mouseX, mouseY, 25, 25);
    
  } else if (toolChoice == '4') {
    fill(frameCount % 360, 100, 100);
    noStroke();
    translate(mouseX, mouseY);
    for (let xo = -30; xo <= 30; xo += 4) {
      ellipse(xo, 0, 4, 4);
    }
  
  } else if (toolChoice == '5') { // Tool 5
    noFill();
    strokeWeight(1); // Changed to a more visible stroke weight
    stroke('purple');
    let brushSize = map(mouseY, 0, windowHeight, 0, 65);
    ellipse(mouseX, mouseY, brushSize, brushSize);
  
  } else if (toolChoice == '6') {
    let size = 20;
    let myColors = ["slateblue", "papayawhip", "orangered", "mediumseagreen"];
    strokeWeight(random(1, 8)); // Random color from the list
    stroke(random(myColors));

    if (mouseIsPressed) {
      for (let i = 1; i < 2 * size; i++) {     
        point(randomGaussian(mouseX, size), randomGaussian(mouseY, size));
      }
    }
    
  } else if (toolChoice == '7') {
    let colorPalette = ['#2A4D69', '#4B86B4', '#ADCBE3', '#E7EFF6', '#63ace5']; // Van Gogh-like colors

    if (mouseIsPressed) {
      let color = random(colorPalette);
      let length = random(10, 30); // Length of each stroke
      let thickness = random(2, 6); // Thickness of each stroke
      let angleOffset = random(-PI / 6, PI / 6); // Randomize direction slightly for each stroke

      stroke(color);
      strokeWeight(thickness);
      strokeCap(ROUND); // Rounded ends for softer look

      let angle = atan2(mouseY - pmouseY, mouseX - pmouseX) + angleOffset;

      for (let i = 0; i < 10; i++) {
        let x = mouseX + random(-5, 5);
        let y = mouseY + random(-5, 5);
        let offset = random(-length / 2, length / 2);
        
        line(x, y, x + cos(angle) * (length + offset), y + sin(angle) * (length + offset));
      }
    } 

  } else if (toolChoice == '8') {
    let colorPalette = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1', '#955251', '#b565a7']; // Stained glass-like colors

    if (mouseIsPressed) {
      let fillColor = random(colorPalette);
      fill(fillColor);
      stroke(0); // Black outline to mimic stained glass edges
      strokeWeight(2);

      beginShape();
      let numSides = int(random(3, 6)); // Number of sides for each shape
      for (let i = 0; i < numSides; i++) {
        let angle = map(i, 0, numSides, 0, TWO_PI) + random(-0.2, 0.2); // Random angle for irregular shape
        let radius = random(10, 30); // Random size for each shape
        let x = mouseX + cos(angle) * radius;
        let y = mouseY + sin(angle) * radius;
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  
  } else if (toolChoice == '9') {
    let colorPalette = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7']; // Watercolor-like colors
    
    noStroke();
  
    if (mouseIsPressed) {
      let color = random(colorPalette);
      let opacity = random(50, 150); // Random opacity for watercolor effect
      let size = random(20, 60); // Random size for each brush stroke

      fill(color); // Set fill color with transparency
      for (let i = 0; i < 10; i++) {
        let x = mouseX + random(-size / 2, size / 2);
        let y = mouseY + random(-size / 2, size / 2);
        ellipse(x, y, size, size);
      }
    }
      
  } else if (toolChoice === 'g' || toolChoice === 'G') {
    let colorPalette = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7']; // Colors for the brush
    let shapes = ['line', 'ellipse', 'rect']; // Available shapes

    if (mouseIsPressed) {
      let baseColor = random(colorPalette);
      let alpha = random(50, 150); // Set random transparency for layering
      let colorWithAlpha = color(baseColor);
      colorWithAlpha.setAlpha(alpha); // Set the alpha for color

      stroke(colorWithAlpha); // Set stroke color with transparency
      fill(colorWithAlpha); // Set fill color with transparency
      strokeWeight(random(1, 5)); // Randomize stroke weight

      // Randomize position offsets and angles
      let xOffset = random(-50, 50);
      let yOffset = random(-50, 50);
      let angle = random(TWO_PI); // Random angle for line direction

      // Draw random shapes based on the selected type
      let shapeType = random(shapes); // Randomly select shape type

      if (shapeType === 'line') {
        // Draw a line
        let lineLength = random(20, 100);
        line(mouseX + xOffset, mouseY + yOffset, mouseX + xOffset + cos(angle) * lineLength, mouseY + yOffset + sin(angle) * lineLength);
      } else if (shapeType === 'ellipse') {
        // Draw an ellipse
        let size = random(10, 50);
        ellipse(mouseX + xOffset, mouseY + yOffset, size, size);
      } else if (shapeType === 'rect') {
        // Draw a rectangle
        let w = random(10, 50);
        let h = random(10, 50);
        rect(mouseX + xOffset, mouseY + yOffset, w, h);
      }
    } 
  }
}

function keyPressed() {
  if (key === 'c') {
    background(255); // Clear the canvas
  }
}

function clear_print() {
  if (key === 'x' || key === 'X') {
    background(screenbg); // Set the screen back to the background color
  } else if (key === 'p' || key === 'P') {
    saveme(); // Call saveme which saves an image of the screen
  }
}

function saveme() {
  let filename = initials + day() + hour() + minute() + second();
  if (second() !== lastscreenshot) { // Don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot = second(); // Set this to the current second so no more than one per second
}
