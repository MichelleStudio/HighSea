let waveimg
let shipimg
let islandimgs = []
let sea
let day = 0

function preload(){
    waveimg = loadImage('waveslice.png')
    shipimg = loadImage('brigantine.png')
    sunmoonimg = loadImage('sunmooncycle.png')
    islandimgs[0] = loadImage('island1.png')
    islandimgs[1] = loadImage('island2.png')
    islandimgs[2] = loadImage('island3.png')
    oceansound = createAudio('oceansound.mp3')
}

function setup() {
  createCanvas(1200, 500)
  frameRate(20)
  angleMode(DEGREES)

  sea = new Sea(height/2, 60, 20, 20)
  sea.init()
//  oceansound.autoplay(true)
}

function draw() {
  background(255)
  day = (day + .25)%360
  push()
  translate(600, 500)
  rotate(day)
  imageMode(CENTER)
  image(sunmoonimg, 0, 0)
  pop()
  
  sea.update()
  sea.render()
  
  noStroke()
  c2 = color(255, 255, 255, 0)
  c1 = color(240, 191, 167, 200)
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1)
    let newc = lerpColor(c1,c2,n)
    stroke(newc)
    line(0,y,width, y)
  }
  
}

function mousePressed(){
    getAudioContext().resume() 
    oceansound.play()
    oceansound.loop(true)
    oceansound.volume(0.8)
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        sea.ship.move(-1, 0)
    }
    if(keyCode === RIGHT_ARROW){
        sea.ship.move(1, 0)
    }
    if(keyCode === UP_ARROW){
        sea.ship.move(0, -1)
    }
    if(keyCode === DOWN_ARROW){
        sea.ship.move(0, 1)
    }
}