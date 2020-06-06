var bird
var pipes =[]
var score = 0

function setup(){
  createCanvas(400,600)
  bird = new Bird();
  pipes.push(new Pipe())
}

function draw(){
 // background(rgb(0, 29, 255))  
  background(rgb(43, 7, 150))

  textSize(20)
  fill("255")
  text("Hit: " + score,50,50)


  for (var i = pipes.length-1; i >= 0; i--){
    pipes[i].show()
    pipes[i].update()

    if(pipes[i].hits(bird)){
      console.log("bird hit pipe")
    }

    if(pipes[i].offscreen()){
      pipes.splice(i, 1)
    }
  }

  bird.update();
  bird.show(); 

  if(frameCount % 60 == 0 ){
    pipes.push(new Pipe())
  }

  
}

function keyPressed(){
  if(touches.length>0){
   // console.log("space key")
    bird.up() 
  } 
}