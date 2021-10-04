class Bob{
constructor(x,y,r){
var option = {
'isStatic' : false,
'density' : 2,
'restitution' : 0.5,
'friction' : 1.0,
}
this.x = x;
this.y = y;
this.r = r;
this.body = Bodies.circle(this.x,this.y,(this.r)/2,option);
World.add(world,this.body);

}
display(){
    var paperpos = this.body.position;
    push ();
    translate (paperpos.x,paperpos.y);
    rectMode(CENTER);
    fill("blue");
    ellipse(0,0,this.r,this.r);
    pop ();
    
}

}