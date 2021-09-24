var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//FYI Ethan Hunt is from Mission Impossible
var EthanHunt = createSprite(25,375,15,15);
EthanHunt.shapeColor = "blue";
var Target = createSprite(375,25,50,50);
Target.shapeColor = "yellow";
var laser1 = createSprite(100,300,10,200);
laser1.shapeColor = "red";
var laser2 = createSprite(300,100,10,200);
laser2.shapeColor = "red";
var laser3 = createSprite(200,200,10,200);
laser3.shapeColor = "red";
var laser4 = createSprite(300,300,200,10);
laser4.shapeColor = "red";
var laser5 = createSprite(100,100,200,10);
laser5.shapeColor = "red";
var laser6 = createSprite(200,200,200,10);
laser6.shapeColor = "red";
var ball1 = createSprite(150,150,15,15);
ball1.shapeColor = "red";
var ball2 = createSprite(250,250,15,15);
ball2.shapeColor = "red";

var gameState = "start";

function draw() {
  background("white");
  drawSprites();
  createEdgeSprites();
  
if(gameState === "start"){
  fill("blue");
  textSize(20);
  text("Press space to start",100,50);
  if(keyDown("space")){
  laser1.setVelocity(0,-2);
  laser2.setVelocity(0,2);
  laser3.setVelocity(0,-2);
  laser4.setVelocity(-2,0);
  laser5.setVelocity(2,0);
  laser6.setVelocity(-2,0);
  ball1.setVelocity(2,-2);
  ball2.setVelocity(-2,2);
  
  gameState = "play";
  }

}
  if(gameState === "play"){
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
  laser5.bounceOff(edges);
  laser6.bounceOff(edges);
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
    
  if(keyDown("up")){
    EthanHunt.y = EthanHunt.y - 2;
  }
  if(keyDown("down")){
    EthanHunt.y = EthanHunt.y + 2;
  }
  if(keyDown("left")){
    EthanHunt.x = EthanHunt.x - 2;
  }
  if(keyDown("right")){
    EthanHunt.x = EthanHunt.x + 2;
  }  

  }
  
  if(EthanHunt.isTouching(laser1)){
    gameState = "end";
  }
    if(EthanHunt.isTouching(laser2)){
    gameState = "end";
  }
    if(EthanHunt.isTouching(laser3)){
    gameState = "end";
  }
    if(EthanHunt.isTouching(laser4)){
    gameState = "end";
  }
    if(EthanHunt.isTouching(laser5)){
    gameState = "end";
  }
    if(EthanHunt.isTouching(laser6)){
    gameState = "end";
  }
    if(EthanHunt.isTouching(ball1)){
    gameState = "end";
  }
    if(EthanHunt.isTouching(ball2)){
    gameState = "end";
  }
  if(EthanHunt.isTouching(Target)){
    gameState = "win";
  }
  if(gameState === "end"){
    fill("blue");
    stroke("yellow");
    strokeWeight(5);
    textSize(20);
    text("Game Over!",200,200);
  EthanHunt.x = 25;
  EthanHunt.y = 375;
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
  laser4.setVelocity(0,0);
  laser5.setVelocity(0,0);
  laser6.setVelocity(0,0);
  ball1.setVelocity(0,0);
  ball2.setVelocity(0,0);
  fill("blue");
  stroke("yellow");
  strokeWeight(5);
  text("Press 'a' key to continue",100,100);
  if(keyDown("a")){
    gameState = "start"; 
  }
  }
  if(gameState === "win"){
  EthanHunt.x = 25;
  EthanHunt.y = 375;
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
  laser4.setVelocity(0,0);
  laser5.setVelocity(0,0);
  laser6.setVelocity(0,0);
  ball1.setVelocity(0,0);
  ball2.setVelocity(0,0);
  fill("blue");
  stroke("yellow");
  strokeWeight(5);
  text("You Win!",100,100);
  
  fill("blue");
  stroke("yellow");
  strokeWeight(5);
  text("Press 'a' key to continue",100,100);
  if(keyDown("a")){
    gameState = "start"; 
  }
  }
  }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
