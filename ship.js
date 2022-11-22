class Ship{
  constructor(img, size){
    this.pos = createVector (width/4, height/4)
    this.size = size
    this.display = false
    this.imgs = []
    this.imgCount = 0
    for(let i=0;i<20;i++){
       this.imgs[i] = shipimg.get(i*size, 0, size, size)
    }
    
    this.vel = createVector(0,0)
    this.acc = createVector(0,0)
    this.friction = 0.99 
  }
  
  bounceEdges(){
      if(this.pos.x < this.size/2 || this.pos.x > width-this.size){
        this.pos.x = this.size
        this.vel.x *=-0.1
    }
      if(this.pos.y < (this.size+50)/2 || this.pos.y > height - this.size+30){
        this.pos.y =this.size
        this.vel.y*=-0.1
    }
  }

  move(x,y){
    this.acc.add(x,y)
    this.vel.add(this.acc)
    this.acc.mult(0)
  }  

  render(){
      image(this.imgs[this.imgCount], this.pos.x, this.pos.y) 
  }
  
  update() {
      this.display = false
      this.imgCount = (this.imgCount + 1) % 20
      this.vel.mult(this.friction)
      this.pos.add(this.vel)
  }
}