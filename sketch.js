var natureImg, nature;
var puddleImg, puddle, puddlesGroup;
var rockImg, rock, rocksGroup;
var dog, dogImg;
var sick,sickImg;
var gameState = "play"

function preload(){
  natureImg = loadImage("nature.png");
  puddleImg = loadImage("puddle.png");
  rockImg = loadImage("rocks.png");
  dogImg = loadImage("dog.png");
  sickImg = loadImage("sick.png");
  
}

function setup(){
  createCanvas(600,600);
 
  nature = createSprite(200,200);
  nature.addImage("nature",natureImg);
  nature.scale=5
  
  
  puddlesGroup = new Group();
  rocksGroup = new Group();
  
  
  dog = createSprite(200,200,50,50);
  dog.scale = 0.5;
  dog.addImage("dog",dogImg);



}

function draw(){
  background(0);
  
    
    if(keyDown("space")){
      dog.velocityY = -5;
    }
    
    dog.velocityY = dog.velocityY + 0.1
    
    if(nature.x > 400){
      nature.x= 300
    }
    spawnPuddles();

    
    
    if(puddlesGroup.isTouching(dog)){
      dog.velocityY = 0;
    }
    if(rocksGroup.isTouching(dog)){
      dog.destroy();
      gameState = "end"
    }
    
 



    drawSprites();
  }
  
  if (gameState === "end"){
    stroke("white");
    fill("red");
    textSize(30);
    text("Game Over . YOUR DOG DIED ", 80,300);
    stroke("white");
    fill("blue");
    textSize(30);
    text("$$$$$$$$$", 120,335);
  

}

function spawnPuddles() {
  
  if (frameCount % 240 === 0) {
    var puddle= createSprite(100, 20);
    puddle.scale=0.25;
    
    var  rock= createSprite(200,10);
    rock.scale=0.20
    
    
    
    puddle.x = Math.round(random(120,400));
   rock .x = Math.round(random(110,300));
    
    
    puddle.addImage(puddleImg);
    rock.addImage(rockImg);
    
    puddle.velocityX = 0.25;
    rock.velocityX = 0.20;
    
    
    dog.depth = puddle.depth;
    dog.depth +=1;
   
    //assign lifetime to the variable
    puddle.lifetime = 500;
    rock.lifetime = 500;
    

    
    //add each door to the group
    puddlesGroup.add(puddle);
    rocksGroup.add(rock);
  }
}