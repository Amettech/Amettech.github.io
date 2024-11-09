var ballx = 300;
var bally = 300;
var ballSize = 50;
var score = 0;
var gameState = "L1";
var ballGif;    // GIF
var cursorImage; // Cursor Image
var bgImage; // background image
const cursorSize = 50; // Constant cursor size

function preload() {
  ballGif = loadImage('ghost.gif'); 
  cursorImage = loadImage('vacuum.png'); 
  bgImage = loadImage('maze.png');
} //end of preload

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  noCursor(); 
  frameRate(40); // frame rate for smooth animation
} // end of setup

function draw() {
  clear(); // the canvas is cleared each frame, maintaining transparency
  
  if (gameState == "L1") {
    levelOne();
  } 
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "win") {
    levelWin();
  }
  
  text("Score: " + score, width / 2, 40);
  
  // custom cursor image at the fixed cursor size
  image(cursorImage, mouseX - cursorSize / 2, mouseY - cursorSize / 2, cursorSize, cursorSize);
} //end of draw

function levelOne() {
  background(212, 214, 217); // background color
  
  image(bgImage, 0, 0, width, height);
  
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }
  if (score > 5) {
    gameState = "L2";
  }
  
  // ball GIF (ghost)
  image(ballGif, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
  
  line(ballx, bally, mouseX, mouseY);
} // end of level 1

function levelTwo() {
  background(112, 112, 112); // background color
  
  image(bgImage, 0, 0, width, height);
  
  text("Level 2", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    ballSize -= 1;
    score++;
  }
  if (score > 10) {
    gameState = "L3";
  }
  
  // ball GIF (ghost)
  image(ballGif, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
} //end of level 2

function levelThree() {
    background(43, 43, 43); // background color
  
  image(bgImage, 0, 0, width, height);
  
  text("Level 3", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    ballSize -= 1;
    score++;
  }
  if (score > 24) {
    gameState = "win";
  }
  
  // ball GIF (ghost)
  image(ballGif, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}

function levelWin() {
   background(68, 62, 71); // background color
  
  textSize(30);
  text("You Got It!", width / 2, height / 2 - 20);
  textSize(15);
  text("Click to Restart", width / 2, height / 2 + 60);
} //end of level win

function mousePressed() {
  if (gameState === "win") {
    // Reset game variables when the user clicks on the winning screen
    score = 0;
    ballSize = 50;
    gameState = "L1";
  }
}
