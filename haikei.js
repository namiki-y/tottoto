//
//背景
//

//白線
class Hakusen {
  constructor(t){
    if (t==3) {　//一番奥
      this.x = canvasWidth/3-20;
      this.y = 210;
      this.w = canvasWidth/2-60;
      this.h = 3;
      this.vx = 40;
    }
    else if (t==2) {//二番目
      this.x = canvasWidth/3-40;
      this.y = 270;
      this.w = canvasWidth/2-20;
      this.h = 4
      this.vx = 43;
    }
    else if (t==1) {//三番目
      this.x = canvasWidth/3-60;
      this.y = 340;
      this.w = canvasWidth/2+20;
      this.h = 5
      this.vx = 45;
    }
    else if (t==0) {//手前
      this.x = canvasWidth/3-80;
      this.y = 420;
      this.w = canvasWidth/2+60;
      this.h = 6
      this.vx = 46;
    }
  }

  draw(){
    ctx.fillStyle = "white";
    ctx.fillRect(this.x,this.y,this.w,this.h);
  }

  update(){
    if(goal>0) this.x -= this.vx;
    else if(mise.x!=350)this.x --;
    if(this.x + this.w <= 0) this.x =canvasWidth;
  }
}

//木
class Tree {
  constructor(){
    this.x = canvasWidth;
    this.y = 82;
    this.w = 50;
    this.h = 100;
    this.vx = 20;
    this.kill = false;
  }

  draw(){
    ctx.drawImage(treeimg,this.x,this.y,this.w,this.h);
  }

  update(){
    if(goal>0) this.x -= this.vx;
    else if(mise.x!=350)this.x--;
    if(this.x + this.w <=0) this.kill = true;
  }
}
