let xPos = 250;
let yPos = 250;
let ySpeed;
let xSpeed;
let xDirection = 1;
let yDirection = 1;
let dvd;
let dvdSound;

function preload(){
  dvd = loadImage("Images/DVD.png")
  dvdSound = loadSound("Sounds/DVDsound.mp3")
}

function setup() {
  imageMode(CENTER)
  createCanvas(500, 500);
  background(0);
  xSpeed = random(-5,5);
  ySpeed = random(-5,5);
}

function draw() {
  background(0);

  image(dvd,xPos, yPos, 50, 50);
  xPos+=xSpeed * xDirection;
  yPos+=ySpeed * yDirection;

  if(yPos<25||yPos>475){
    yDirection *= -1
    dvdSound.play()
  }
  if(xPos<25||xPos>475){
    xDirection *= -1
    dvdSound.play()
  }
}
