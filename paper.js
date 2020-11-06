class Paper{
constructor(x,y,r){
var options={


}
this.radius=r;
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body)
}
display(){
    elllipseMode(RADIUS);
    ellipse(this.body.position.x,this,body.position.y,this.r,this.r)
}
}