class Segment{
    constructor(object){
        // console.log(object);
        this.parent=null;
        if(object.length==3){
            this.parent=object[0];
            this.angle=object[1];
            this.len=object[2]; 
            this.b=createVector(10,10);
            this.child=null;
        }
        else{
            this.a=createVector(object[0],object[1]);
            
            this.angle=object[2];
            this.len=object[3]; 
            this.b=createVector(10,10);
            this.child=null;
        }
    }

    calcb=function(){
        this.b.y=sin(this.angle)*this.len+this.a.y;
        this.b.x=cos(this.angle)*this.len+this.a.x;
    }
    display=function(i){
        stroke(random(1)*255,random(1)*255,random(1)*255);
        strokeWeight(i/20);
        line(this.a.x,this.a.y,this.b.x,this.b.y);
    }
    // follow=function(){
    //     let target=createVector(this.child.a.x,this.child.a.y);
    //     let dir=p5.Vector.sub(target,this.a);
    //     this.angle=dir.heading();
    //     dir.setMag(this.len);
    //     dir.mult(-1);
    //     // let b=this.a.x-x_;
    //     // let h=this.a.y-y_;
    //     this.a=p5.Vector.add(target,dir);
    // }
    follow=function(x_,y_){
        let target=createVector(x_,y_);
        let dir=p5.Vector.sub(target,this.a);
        this.angle=dir.heading();
        dir.setMag(this.len);
        dir.mult(-1);
        // let b=this.a.x-x_;
        // let h=this.a.y-y_;
        this.a=p5.Vector.add(target,dir);
    }

}