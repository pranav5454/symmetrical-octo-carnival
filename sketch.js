const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var btn1
var rocket
var star
var starimg
var score
var rocketImg
var bkImg
var bk
var bomb
var bombImg
var star2
var star3img
var star3
var bkmusic
var star4
var star4img
function preload() {
  rocketImg = loadImage("rocketbeter.png")
  starimg = loadImage("star.png")
  bkImg = loadImage("bk.png")
  star2 = loadImage("2 star.png")
  star3img = loadImage("star.png")
  bombImg = loadImage("bomb.png")
  bkmusic = loadSound("bk.mp3")
  star4img = loadImage("xxx.png")
}
function setup() {
  createCanvas(400, 400);
  bk = createSprite(150, 100, 400, 600)
  bk.addImage(bkImg)
  bk.scale = 2

   bk.velocityY = -2;
  star = createSprite(20, 20, 20, 20)
  star.addImage("s", starimg)
  star.scale = 0.05
  rocket = createSprite(100, 400, 20, 20)
  rocket.velocityY = 4;

  rocket.addImage("r", rocketImg)
  rocket.scale = 0.5
  engine = Engine.create();
  world = engine.world;

  bomb = createSprite(200, 200, 20, 20)

 // btn1 =  createImg('up.png')
  // btn1.position(50,50)
  // btn1.size = 0.4
  // btn1.mouseClicked(move)
star4 = createSprite(60,60,20,20)
star4.addImage(star4img)
star4.scale = 0.09
bkmusic.play()

  
}
function draw() {
  background(51);
  drawSprites()
  Engine.update(engine);
  rocket.velocityY = rocket.velocityY + 0.5

  if (rocket.y < 50) {
    bk.y = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    rocket.velocityY = -4;
  }
  if (frameCount % 80 === 0) {
    star = createSprite(200, 200);
    star.y = Math.round(random(0, 300))
    star.addImage(starimg);
    star.scale = 0.06
    star.velocityY = 4;

    bomb = createSprite(250, 250);
    bomb.y = Math.round(random(05, 360))
    bomb.addImage(bombImg);
    bomb.scale = 0.06
    bomb.velocityY = 4;

    if (star.isTouching(rocket)) {
      score = score + 1
      text("score:" + score, 50, 350)
    }
    if (rocket.isTouching(bomb)) {

      rocket.setVelocity(0, 0)
    }
  }
  if (rocket.y > 400) {
    textSize(24)
    text("You Lose !!!!! ", 200, 200)
  }
  if (keyDown(RIGHT_ARROW)) {
    rocket.x = rocket.x + 3
  }
  if (keyDown(LEFT_ARROW)) {
    rocket.x = rocket.x - 3
  }
  if (rocket.isTouching(star)&&rocket.isTouching(star)) {
    star3 = createSprite(40, 20, 20, 20)
    star3.addImage(star2)
    star3.scale = 0.2


    
  }
  drawSprites()
}
function move() {
  rocket.velocityY = 4;

} 