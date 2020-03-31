var canvas, backgroundImage;


function preload(){

  ground = loadImage("images/bg.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  player = new Player();
  game = new Game();

}


function draw(){
  background("white");
  player.display();
  game.play();
 
 

  
}
