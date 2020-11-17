

var car,wall;

var speed,weight;

var thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90)

  weight = random(400,1500)

  thickness= random(22,83)


  car = createSprite(50,200,50,50)
  car.velocityX = speed;
  car.shapeColor=color(255);

  wall = createSprite(1500,200,60,height/2)
wall.shapeColor=color(230,230,230,230);
  
  
}

function draw() {
  background(0); 
  
    if(hascollided(car,wall)){
      car.velocityX = 0
      

    var deformation= 0.5 * weight * speed * speed/(thickness*thickness*thickness);
   
    
    if(deformation>10){
      wall.shapeColor = color(255,0,0);
    }


    
   if(deformation<10){
     wall.shapeColor = color(0,225,0);
    }

  }



  drawSprites();
}

function hascollided(lcar,lwall){
  carRightedge=lcar.x+lcar.width;
  wallLeftedge=lwall.x;
  if(carRightedge>=wallLeftedge){
    return true;
  }
  return false;
}