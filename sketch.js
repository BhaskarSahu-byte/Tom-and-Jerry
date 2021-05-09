var bgImg;
var jerry, jerryImg1, jerryImg2, jerryImg3;
var tom, tomImg1, tomImg2, tomImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");

    jerryImg1 = loadAnimation("images/cat1.png");
    jerryImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    jerryImg3 = loadAnimation("images/cat4.png");

    tomImg1 = loadAnimation("images/mouse1.png");
    tomImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    tomImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry = createSprite(850, 600);
    jerry.addAnimation("jerrySeeing", jerryImg1);
    jerry.scale = 0.2;

    tom = createSprite(200, 600);
    tom.addAnimation("tomTeasing", tomImg1);
    tom.scale = 0.2;
}

function draw() {

    background(bgImg);

    //Write condition here to evalute if tom and jerry collide
    if (jerry.x - tom.x < jerry.width / 2 - tom.width / 2) {

        jerry.velocityX = 0;

        jerry.addAnimation("jerryCatching", jerryImg3);
        jerry.changeAnimation("jerryCatching");
        jerry.scale = 0.2;

        tom.addAnimation("tomCaught", tomImg3);
        tom.changeAnimation("tomCaught");
        tom.scale = 0.2;
    }

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        jerry.velocityX = -7;
        jerry.addAnimation("jerryRunning", jerryImg2);
        jerry.changeAnimation("jerryRunning");

        tom.addAnimation("tomPranking", tomImg2);
        tom.changeAnimation("tomPranking");
    }
}