class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokes = loadImage("sprites/smoke.png");
    this.track = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;


    super.display();
    if (this.body.position.x>200 && this.body.speed >25){
    var position = [this.body.position.x,this.body.position.y]
    this.track.push(position);
    }
    //track = [[x1,y1],[x2,y2],[x3,y3],[x4,y4],[x5,y5]]
    //index of x1 = [0],[0]
    //index of x2 = [1],[0]
    //index of y1 = [0],[1]
    //index of y2 = [1],[1]
    for(var I = 0;I<this.track.length;I++){
    image(this.smokes,this.track[I][0],this.track[I][1]);  
    }
  }
}
