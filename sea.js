class Sea{
  constructor(starty, wavea, waveb, size){
    this.startx = -width/2
    this.endx = width/2
    this.scrollSpeed = 2
    this.starty = starty
    this.wavea = wavea
    this.waveb = waveb
    this.angle = 0
    this.size = size
    this.islands = []
    this.ship = null

  }

  init(){
    this.ship = new Ship(shipimg, 200)
    
    let distance = width/3
    for (let i = 0; i < 3; i++) {
      this.islands.push(new Island(islandimgs[i],i*distance, random(0, height/3)))
    }
  
    
  }
  
  render(){
    
    for (let i = 0; i < this.size; i++) {
      // horizontal movement only
      //image(waveimg, this.startx-this.wavea*(i%2)/2, this.starty+this.waveb*i)
      //image(waveimg, this.endx-this.wavea*(i%2)/2, this.starty+this.waveb*i) 
      
      let x = this.wavea*cos(this.angle-45*(i%2))
      let y = this.waveb*sin(this.angle-45*(i%2))
      let x1 = this.startx+x-1*this.wavea*(i%2)
      let x2 = this.endx+x-2*this.wavea*(i%2)
      y = this.starty+this.waveb*i+y
      
      if( (y >= this.ship.pos.y + 150) && (!this.ship.display)  ) {
          this.ship.render() 
          this.ship.display = true
      }
      
      for (let island of this.islands) {
          if( (y >= island.pos.y + island.size - 30 ) && (!island.display)  ) {
              island.render() 
              island.display = true
          }
      }
      
      image(waveimg, x1, y)
      image(waveimg, x2, y) 
      //image(waveimg, this.startx+x-this.wavea*(i%2), this.starty+this.waveb*i+y)
      //image(waveimg, this.endx+x-this.wavea*(i%2), this.starty+this.waveb*i+y) 
    }
    

    
  }

  update(){
    this.angle = (this.angle + 1) % 360
    
    this.startx -= this.scrollSpeed
    this.endx -= this.scrollSpeed
    
    if (this.startx < -width){
      this.startx = width
    }
    if (this.endx < -width){
      this.endx = width
    }
    this.ship.bounceEdges()
    this.ship.update()
    
    for (let i of this.islands) {
        i.update(); 
    }
  }
  
}