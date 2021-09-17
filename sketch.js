
var P;
var gameState=0;
var PI;
var Bg;
var Back;
var M1,M2;
var MI;
var enemy,enemyI;
var Score=0;
var BackI;
var R;
var RI;

function preload(){

  PI=loadImage("P.png");
  Bg=loadImage("T1.png");
  MI=loadImage("M.png");
  enemyI=loadImage("Enemy.png");
  BackI=loadImage("Back.png");
  RI=loadImage("replay.png");

}
function setup() {
  createCanvas(1500,700);

  P=createSprite(780,500,50,50);
  P.addImage(PI);
  P.scale=0.2;
  P.debug=false;
  P.setCollider('circle',0,30,450);

  Back=createSprite(1400,600,50,50);
  Back.addImage(BackI);
  Back.scale=0.5;

  BoundL = createSprite(10, 350, 20, 700);
  BoundL.shapeColor = "Black";
  BoundR = createSprite(1490, 350, 20, 700);
  BoundR.shapeColor = "Black";
  BoundU = createSprite(750, 10, 1500, 20);
  BoundU.shapeColor = "Black";
  BoundD = createSprite(750, 690, 1500, 20);
  BoundD.shapeColor = "Black";

  R=createSprite(780,400,20,20);
  R.addImage(RI);

  M1Group= new Group();
  M2Group= new Group();
  EnemyGroup= new Group();


}

function draw() {

if(gameState==1){
  fill("Yellow");
  background(Bg);
  textSize(50);
  text("Kills : "+Score,1200,100);
  Back.visible=true;
  P.visible=true;
  R.visible=false;
  
  if(mousePressedOver(Back)){
    gameState=0;
  }
  if (keyDown("space")) {
    SpawnM1();
    SpawnM2();
  }
  P.collide(BoundL);
  P.collide(BoundR);
  P.collide(BoundU);
  P.collide(BoundD);
  SpawnE();
  if (keyDown("LEFT_ARROW")) {
    P.velocityY = 0;
    P.velocityX = -20;
  }
  if (keyDown("RIGHT_ARROW")) {
    P.velocityY = 0;
    P.velocityX = 20;
  }
  if (keyDown("A")) {
    P.velocityY = 0;
    P.velocityX = -20;
  }
  if (keyDown("E")) {
    P.velocityY = 0;
    P.velocityX = 0;
  }
  if (keyDown("D")) {
    P.velocityY = 0;
    P.velocityX = 20;
  }
  if(M1Group.isTouching(EnemyGroup)){
    M1Group.destroyEach();
    EnemyGroup.destroyEach();
    M2Group.destroyEach();
    Score++;
  }
  if(M2Group.isTouching(EnemyGroup)){
    M2Group.destroyEach();
    M1Group.destroyEach();
    EnemyGroup.destroyEach();
    Score++;
  }
  if(EnemyGroup.isTouching(P)){
    gameState=2;
  }
}
if(gameState==2){
  background("Black");
  P.y=500;
  P.x=780;
  M2Group.destroyEach();
  M1Group.destroyEach();
  EnemyGroup.destroyEach();
  Back.visible=false;
  fill("Green");
  textSize(70);
  text("You may try again the aliens are still alive.",100,150);
  textSize(30);
  P.visible=false;
  R.visible=true;

  if(mousePressedOver(R)){
    gameState=0;
  }
  
}

if(gameState==0){
  background("Black");
  P.y=500;
  P.x=780;
  M2Group.destroyEach();
  M1Group.destroyEach();
  EnemyGroup.destroyEach();
  R.visible=false;
  P.visible=true;
  fill("Red");
  textSize(70);
  text("T̳h̳e̳ ̳M̳u̳l̳t̳i̳v̳e̳r̳s̳a̳l̳ ̳W̳a̳r̳",600,150);
  textSize(20);
  fill("Green");
  text("iNSTRUCTIONS:",50,100);
  text("We need to defeat the aliens for keeping our Earth Safe ",50,150);
  text("Go general see the controls and move your aircraft ",50,200);
  text("according to it . Hurry up the aliens will not wait for us.",50,250);
  text("BEAT EVERY ALIEN TO SAVE OUR PEOPLES",50,300);
  text("This is your aircraft and here are your controls ⮞",50,350);
  textSize(15);
  text("The Story goes as follows: ",1100,300);
  text("Once upon a time we lived on the planet Earth ",1100,320);
  text("which our ancestor destroyed . You might be thinking ",1100,340);
  text("how they destroyed and the reason was robots . ",1100,360);
  text("They kept on inventing bots,robots and made the ",1100,380);
  text("mankind dependent on robots. I am ketro,",1100,400);
  text("A boy born in space and I dont know ",1100,420);
  text("the happiness of living on a planet.",1100,440);
  text("My mother told me that it was a beautiful planet.",1100,460);
  text("It's my dream to get our planet back from robots.",1100,480);
  text("And that's why I give you the task to beat all alien robots.",1100,500);
  text("Dont touch any of them they are bots they will destroy ",1100,520);
  text("our aircraft. See the instructions for more .",1100,540);

  
  textSize(30);
  fill("lightgreen");
  text("Controls:",600,200);
  fill("Yellow");
  text("⮞ A - Left",600,250);
  text("⮞ D - Right",600,300);
  text("⮞ E - Stop",600,350);
  text("⮞ Space - Shoot",600,400);
  Back.visible=false;
  if(keyDown("Space")){
    gameState=1;
  }
}  
  drawSprites();
}
function SpawnM1() {
  if (frameCount % 20 === 0) {
    M1 = createSprite(P.x-50, P.y + 20, 40, 10);
    M1.addImage(MI);
    M1.scale = 0.2;
    M1.velocityY = -10;
    M1.lifetime = 200;
    //M1.debug=true;
    M1.setCollider("circle", 0, 0, 100);
    M1Group.add(M1);
  }
}
function SpawnM2() {
  if (frameCount % 20 === 0) {
    M2 = createSprite(P.x+50, P.y + 20, 40, 10);
    M2.addImage(MI);
    M2.scale = 0.2;
    M2.velocityY = -10;
    M2.lifetime = 200;
    //M2.debug=true;
    M2.setCollider("circle", 0, 0, 100);
    M2Group.add(M2);
  }
}
function SpawnE() {
  if (frameCount % 80=== 0) {
    enemy = createSprite(random(100,1400), 10, 40, 10);
    enemy.addImage(enemyI);
    enemy.scale = 0.5;
    enemy.velocityY = 10;
    enemy.lifetime = 200;
    //enemy.debug=true;
    enemy.setCollider("circle", 0, 0, 100);
    EnemyGroup.add(enemy);
  }
}