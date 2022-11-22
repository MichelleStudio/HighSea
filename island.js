class Island{
    
  constructor(img, x, y){
    this.pos = createVector (x, y)
    this.img = img
    this.scrollSpeed = 2
    this.display = false
    this.size = 300
  }

  render() {
    image(this.img, this.pos.x, this.pos.y, this.size, this.size) 
  }
  
  update() {
    this.display = false
    this.pos.x -= this.scrollSpeed
    
    if(this.pos.x < - this.size) {
      this.pos.x = width
      this.pos.y = random(0, height/3)
    }
  }
}