class Roof{
constructor(x,y,w,h){
var option = {
'isStatic' : true,
}
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.body = Bodies.rectangle(x,y,w,h,option);
World.add(world,this.body);

}
display(){
    var groundpos = this.body.position;
    push ();
    translate (groundpos.x,groundpos.y);
    rectMode(CENTER);
    fill("blue");
    rect(0,0,this.w,this.h);
    pop ();
    
}

}