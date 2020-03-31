class Player {
  constructor(){
    this.body = createSprite(displayWidth/8,displayHeight-255,20,20);
    this.distance = 0;

  }
  display(){
    if (keyCode ===32 ){
      this.body.position.y += -20;
    }
    background(ground);
    
    drawSprites();
  }


}
