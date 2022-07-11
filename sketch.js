var seg;
var seg1;
var tentacle;
var l=5;
var num=300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let parent=new Segment([width/2,height/2,0,l]);
  for(let i=0;i<num;i++){
    seg1=new Segment([parent,0,l]);
    parent.child=seg1;
    parent=seg1;
  }
  tentacle=parent;
}

function draw() {
  background(0);
  let i=num+1;
  tentacle.follow(mouseX,mouseY);
  tentacle.calcb();
  tentacle.display(i);
  let next=tentacle.parent; //reverse kinemetics
  while(next!=null){
    next.follow(next.child.a.x,next.child.a.y);
    next.calcb();
    next.display(i);
    next=next.parent;
    i--;
  }
}
