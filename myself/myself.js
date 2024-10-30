function setup() {
createCanvas (600, 600);
background (200);
}
function draw() {
  
scale(1.5)

translate(-115,-140);

//hair  
noStroke()
fill (100, 70, 117)
  square(200, 295, 230, 350, 250, 10);
nf;
  square(200, 170, 230, 350, 250, 10);

//face
noStroke()
fill(240, 213, 182); // Skin color
ellipse(299, 300, 150, 200);

stroke(3,3,3);
  strokeWeight(2);
fill (95, 76, 105)
arc(290, 349, 50, 15, 0, PI);//mouth
  
//eyebrows
  stroke(21, 19, 19);
  strokeWeight(3);
  noFill();
  arc(255, 276, 45, 15, PI, TWO_PI, OPEN);  
  arc(325, 276, 45, 15, PI, TWO_PI, OPEN); 

//ear
    noStroke()
fill(240, 213, 182); // Skin color
circle(385, 300, 50);
  
 //Neck
fill(240, 213, 182); // Skin color
rect(275, 380, 50, 80, 20);
  
//body
fill(240, 213, 182); // Skin color
rect(225, 415, 145, 170, 55);
  
   stroke(3,3,3);
  strokeWeight(1)
   fill(61, 59, 61);//strap color
   rect(262, 413, 10, 40, 10, 30, 1, 1);
   rect(332, 417, 10, 40, 10, 30, 1, 1);
  
  fill(77, 66, 76); // shirt
  rect(229, 440, 135, 180, 90);//clothes
  fill(240, 213, 182); // Skin color

  noStroke()
   fill(240, 213, 182); // Skin color
   rect(228, 430, 35,180, 90);//arm
   rect(345, 435, 40,170, 10);//arm
  
  
//bangs
stroke(3,3,3);
noStroke() 
  fill (100, 70, 117)
  rect(210, 225, 30, 149, 200, 1, 1, 1);
  rect(210, 285, 30, 240, 200, 1, 1, 1);
    
  rect(350, 220, 40, 149, 10, 30, 1, 1);
  rect(350, 280, 40, 245, 30, 1, 1, 1);  
  
 

//eyes  
stroke(3,3,3);
  strokeWeight(2);
fill(99, 209, 79); //Green eyes
ellipse(260, 290, 15, 30);
  stroke(3,3,3);
  fill (3,3,3)
  strokeWeight(2);
  ellipse(260, 290, 2, 15);
    
  noStroke()
  fill (255, 252, 252)
  circle(255, 280, 7);
 
stroke(3,3,3);
  strokeWeight(2);
fill(79, 181, 209); // Blue eyes
ellipse(320, 290, 15, 30);
   stroke(3,3,3);
  fill (3,3,3)
  strokeWeight(2);
  ellipse(320, 290, 2, 15);
  
  noStroke()
  fill (255, 252, 252)
  circle(315, 280, 7);
    
//glasses
   stroke(153, 75, 75);
  strokeWeight(4);
  let c = color(200, 200, 200);
   c.setAlpha(150);
   fill(c);
   rect(220, 265, 60, 50, 2, 15, 10, 40);
   rect(300, 265, 65, 50, 15, 2, 40, 10);
    noFill();
   arc(290, 289, 18, 9, PI, TWO_PI, OPEN); 
  

}
