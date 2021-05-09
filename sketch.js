var fr, mr

function setup() {
  createCanvas(800,400);
  fr= createSprite(600, 200, 50, 50);
  fr.shapeColor= "pink"
  fr.debug=true  
  mr= createSprite(200, 200, 50, 50);
  mr.shapeColor="purple" 
  mr.debug=true
  
  //mr.velocityX=3
  //fr.velocityX=-3
  object1= createSprite(100, 200, 50, 50);
  object2= createSprite(200, 200, 50, 50);
  object3= createSprite(300, 200, 50, 50);
  object4= createSprite(400, 200, 50, 50);
  object3.debug=true
}

function draw() {
  background("blue"); 
  mr.y=World.mouseY 
  mr.x=World.mouseX
  
  
  //isTouching(mr,object3)  
  //isTouching(mr,object2)  
  // no return with arguments
  if(isTouching(mr,object3)){
    mr.shapeColor="red"
    object3.shapeColor= "green"
  }
  else{
    mr.shapeColor= "pink"
    object3.shapeColor="purple"
  }

  drawSprites();
}
function isTouching(a,b){
  // a and b are parameters , we are passing arguments within parameters= no return with parameter
  // no return no argument (a function without parameters where the function is just excecuted)
  // mr and object3 are arguments
  if(a.x-b.x < a.width/2+b.width/2 && b.x-a.x < a.width/2+b.width/2 && a.y-b.y < a.height/2+b.height/2 && b.y-a.y < a.height/2+b.height/2){
    return true
    // return with argument. It can dictate whether true or false. 
  }
  else {
  return false   
  }
}