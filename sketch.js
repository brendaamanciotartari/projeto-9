var caixa;


function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,30,30);
}

function draw() 
{
  background("Coral");
  if (keyIsDown(RIGHT_ARROW)){
    background("Crimson"); 
  }
    
  drawSprites();

}




