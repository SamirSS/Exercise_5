x = 0;
y = 300;
var moveX = 0;
var moveY = 0;
var colorChange = 0;

function setup() {
  createCanvas(1000, 500);
}

function draw() {
  background(255);
  
  // Keys to move 'Samir's Monster original'
  if(keyIsPressed){
      if(key == 's'){
        moveY+=10;
      }
      else if(key == 'w'){
        moveY-=10;
      }
      else if(key == 'a'){
        moveX-=10;
      }
      else if(key == 'd'){
        moveX+=10;
      }
  }
  
  // Keys to change color of 'Amy's Monster alt'
  if(keyIsPressed){
      if(key == 'q'){
        colorChange++;
      }
  }
  
  // Amy's Monster alt
  // It's pretty creepy, but holding the 'q' key balds and fades the cat
  scale(0.7);
  RoboCat(x, 0, color(colorChange + 75, colorChange + 150, colorChange + 100)); 
  catTail(0, 0, color(55 + colorChange, 87 + colorChange, 140 + colorChange));
  scale(0.9);
  catHead(30 + x, 0, color(55 + colorChange, 87 + colorChange, 140 + colorChange), 
    color(203 + colorChange, 55 + colorChange, 48 + colorChange));
  
  // Amy's Monster original
  scale(0.3);
  translate(1300, 1500);
  catTail(x, y);
  RoboCat(x, y, color(45, 45, 45));
  catHead(x, y, color(200, 100, 255), color(150, 45, 255));
  
  // Samir's Monster original
  // Holding down the WASD keys moves around the monster
  scale(1.33);
  translate(1000, 150);
  samirBody(moveX, -10 + moveY, color(232, 100, 23));
  samirArms(-100 + moveX, -10 + moveY, color(23, 155, 255));
  scale(3.5);
  translate(0, -180);
  samirHead(moveX, -10 + moveY);
  
  // Samir's Monster alt
  scale(1);
  samirBody(400, y - 200, color(24, 30, 115));
  samirArms(300, y, color(164, 43, 52));
  samirHead(400, y - 450);

}


///// MY MONSTER /////
function samirHead(xLoc, yLoc) {
  ellipseMode(CENTER);
  rectMode(CENTER);

  // // body
  // fill(232, 100, 23);
  // ellipse(width / 2, height / 2, 200, 200);
  // // body created as a separate function with arguments/parameters

  // head
  fill(23, 155, 255);
  rect(xLoc, 110 + yLoc, 50, 90);

  // eye
  fill(255);
  ellipse(xLoc, 90 + yLoc, 25, 20);
  fill(0);
  ellipse(xLoc, 90 + yLoc, 10, 8.5);

  // nose
  stroke(0, 2550, 200);
  line(xLoc, 110 + yLoc, xLoc + 5, 125 + yLoc);

  // mouth
  noStroke();
  fill(127, 0, 0);
  ellipse(xLoc, 140 + yLoc, 20, 12);
  
  // // arms
  // stroke(23, 155, 255);
  // line(150, height / 2, 120, 200);
  // line(350, height / 2, 380, 200);
  // // arms created as a separate function with arguments/parameters
}

function samirBody(xLoc, yLoc, bodycolor) {
  fill(bodycolor);
  ellipse(xLoc, yLoc, 200, 200);
}

function samirArms(xLoc, yLoc, armcolor) {
  stroke(armcolor);
  line(xLoc, yLoc, xLoc - 30, yLoc - 300);
  line(xLoc + 200, yLoc, xLoc + 260, yLoc - 300);
}



///// AMY'S MONSTER /////
function RoboCat(xLoc, yLoc, bodycolor) {
  rectMode(CORNER);
  
  // // HORNS
  // noStroke();
  // fill(0, 0, 225);
  // triangle(200, 150, 200, 50, 275, 100);
  // triangle(325, 100, 400, 50, 400, 150);
  // // horns inside a separate function called 'head' with arguments/parameters

  // TAIL
  // noFill();
  // stroke(175);
  // strokeWeight(4);
  // bezier(50 + xLoc, 325, 150 + xLoc, 325, 75 + xLoc, 510, 220 + xLoc, 500); 
  // // tail created as a separate function with arguments/parameters

  noStroke();
  fill(225, 225, 10);
  quad(20 + xLoc, 325, 40 + xLoc, 315, 50 + xLoc, 325, 40 + xLoc, 335);

  // body
  stroke(0);
  strokeWeight(5);
  fill(bodycolor);
  ellipse(300 + xLoc, 400 + yLoc, 225, 275);
  fill(bodycolor, 50);
  ellipse(300 + xLoc, 425 + yLoc, 180, 200);
  fill(255);
  ellipse(250 + xLoc, 400 + yLoc, 40, 40);
  ellipse(350 + xLoc, 400 + yLoc, 40, 40);

  // // head lighting design
  // stroke(225, 225, 0);
  // strokeWeight(1);
  // line(290, 200, 290, 175);
  // line(290, 175, 270, 155);
  // line(270, 155, 290, 135);
  // line(290, 135, 270, 115);
  // line(310, 200, 310, 175);
  // line(310, 175, 330, 155);
  // line(330, 155, 310, 135);
  // line(310, 135, 330, 115);
  // // head lighting design inside a separate function called 'head' with arguments/parameters
   
  // // head
  // stroke(0);
  // fill(0, 100);
  // ellipse(300, 200, 250, 225);
  // // head inside a separate function called 'head' with arguments/parameters
   
  // // eyes
  // stroke(225, 225, 0);
  // strokeWeight(5);
  // fill(225, 0, 0);
  // ellipse(250, 200, 50, 50);
  // ellipse(350, 200, 50, 50);
  // // eyes inside a separate function called 'head' with arguments/parameters
   
  // // mouth
  // noStroke();
  // fill(220);
  // ellipse(300, 250, 80, 80);
  // fill(200, 0, 0, 50);
  // rect(280, 230, 40, 20, 7);
  // // mouth inside a separate function called 'head' with arguments/parameters

  // feet
  fill(240);
  ellipse(250 + xLoc, 520 + yLoc, 60, 45);
  ellipse(350 + xLoc, 520 + yLoc, 60, 45);
}


function catHead(xLoc, yLoc, horncolor, headcolor) {
  // horns
  noStroke();
  fill(horncolor);
  triangle(200 + xLoc, 150 + yLoc, 200 + xLoc, 50 + yLoc, 275 + xLoc, 100 + yLoc);
  triangle(325 + xLoc, 100 + yLoc, 400 + xLoc, 50 + yLoc, 400 + xLoc, 150 + yLoc);

  // head lighting design
  stroke(225, 225, 0);
  strokeWeight(1);
  line(290 + xLoc, 200 + yLoc, 290 + xLoc, 175 + yLoc);
  line(290 + xLoc, 175 + yLoc, 270 + xLoc, 155 + yLoc);
  line(270 + xLoc, 155 + yLoc, 290 + xLoc, 135 + yLoc);
  line(290 + xLoc, 135 + yLoc, 270 + xLoc, 115 + yLoc);
  line(310 + xLoc, 200 + yLoc, 310 + xLoc, 175 + yLoc);
  line(310 + xLoc, 175 + yLoc, 330 + xLoc, 155 + yLoc);
  line(330 + xLoc, 155 + yLoc, 310 + xLoc, 135 + yLoc);
  line(310 + xLoc, 135 + yLoc, 330 + xLoc, 115 + yLoc);

  // head
  stroke(0);
  fill(headcolor, 100);
  ellipse(300 + xLoc, 200 + yLoc, 250, 225);

  // eyes
  stroke(225, 225, 0);
  strokeWeight(5);
  fill(225, 0, 0);
  ellipse(250 + xLoc, 200 + yLoc, 50, 50);
  ellipse(350 + xLoc, 200 + yLoc, 50, 50);

  // mouth
  noStroke();
  fill(220);
  ellipse(300 + xLoc, 250 + yLoc, 80, 80);
  fill(200, 0, 0, 50);
  rect(280 + xLoc, 230 + yLoc, 40, 20, 7);
}

function catTail(xLoc, yLoc) {
  noFill();
  stroke(175);
  strokeWeight(4);
  bezier(50 + xLoc, 325 + yLoc, 150 + xLoc, 325 + yLoc, 75 + xLoc, 510 + yLoc, 220 + xLoc, 500 + yLoc);
  noStroke();
  fill(225, 225, 10);
  quad(20 + xLoc, 325 + yLoc, 40 + xLoc, 315 + yLoc, 50 + xLoc, 325 + yLoc, 40 + xLoc, 335 + yLoc);
}