var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";
var back;

function preload(){
  back = loadImage("bg.jpg");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    particle=new Particle(random(100,300), 10, 10, 10);
    
}
 
function draw() {
  background(back);
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
      if(frameCount%60===0){
        particles.push(new Particle(random(200, 600), 10,10));
      }
      for (var j = 0; j < particles.length; j++) {
        particles[j].display();
      }
       //particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(random(100,300), 10, 10, 10); 
  }   
}





/*var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var back;
var particle;
var count = 0;

gameState = "start";





function preload(){
  back = loadImage("bg.jpg");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);


  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-150, 10, 300));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

    
}
 


function draw() {
  background(back);
  textSize(20)
  text("Score : "+score,20,30);
  text("100",25,520);
  text("100",105,520);
  text("100",185,520);
  text("100",265,520);
  text("100",345,520);
  text("100",425,520);
  text("100",505,520);
  text("100",585,520);
  text("100",665,520);
  text("100",745,520);


  //stroke("yellow");
  //strokeWeight(6);
  //line(10,430,790,430);
  Engine.update(engine);
  ground.display();

  if ( gameState==="end") {
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }
 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if(particle!==null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score+500;
        particle = null;
        if(count>=5) gameState = "end";
      } else if(particle.body.position.x<600 && particle.body.position.x>301){
        score = score+100;
        particle = null;
        if(count>=5) gameState = "end";
      } else if(particle.body.position.x<900 && particle.body.position.x>601){
        score = score+200;
        particle = null;
        if(count>=5) gameState = "end";
      }
    }
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(200, 600), 10,10));
  }
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}

function mousePressed(){
  if(gameState!=="end"){
    count++
    particle = new Particle(mouseX, 10, 10);
  }

}*/