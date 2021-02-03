//
//自機
//
var jikiIti = 2;
var jikip;

class Jiki {
  constructor(){
    this.x = 30;
    this.y = 160;
    this.w = 120;
    this.h = 50;
    this.count = 0;
    this.kill = false;
  }

  draw(){
    if (!this.kill) {
      if(this.count&1) jikip = jiki2img;
      else jikip = jikiimg;

      if(jikiIti==0) ctx.drawImage(jikip,this.x,this.y,this.w,this.h);
      else if (jikiIti==1) ctx.drawImage(jikip,this.x-20,190,160,70);
      else if (jikiIti==2) ctx.drawImage(jikip,this.x-40,240,200,90);
      else if (jikiIti==3) ctx.drawImage(jikip,this.x-60,300,240,110);
      else ctx.drawImage(jikip,this.x-80,380,280,130);
    }
  }

  update(){
    if (goal<=0 && this.x<270) this.x += 1;
    if(this.x!=270)this.count+=0.4;
  }
}

//自機移動
function keydownfunc( event ) {
  var key_code = event.keyCode;

  if( key_code === 38 && jikiIti!=0) jikiIti --;		//上
  if( key_code === 40 && jikiIti!=4) jikiIti ++;		//下
}

function jikiIdou1(){
  if (jikiIti!=0) jikiIti--;
}

function jikiIdou2(){
  if(jikiIti!=4) jikiIti++;
}
