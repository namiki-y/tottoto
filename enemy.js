//敵

class Enemy {
  constructor(iti,type){
    this.x = canvasWidth;
    this.iti = iti;
    this.type = type;
    this.h3 = 0;
    this.y3 = 0;

    if (this.type==2) {
      this.y3 =20;
      this.h3 = 20;
    }

    if (this.iti==0) {
      this.y = 160+this.y3;
      this.w = 120;
      this.h = 50-this.h3;
      this.vx = 20;
    }
    else if (this.iti==1) {
      this.y = 190+this.y3;
      this.w = 160;
      this.h = 70-this.h3;
      this.vx = 20;
    }
    else if (this.iti==2) {
      this.y = 240+this.y3;
      this.w = 200;
      this.h = 90-this.h3;
      this.vx = 20;
    }
    else if (this.iti==3) {
      this.y = 300+this.y3;
      this.w = 240;
      this.h = 110-this.h3;
      this.vx = 20;
    }
    else if (this.iti==4) {
      this.y = 380+this.y3;
      this.w = 280;
      this.h = 130-this.h3;
      this.vx = 20;
    }
  }

  draw(){
    if (this.type==0) ctx.drawImage(enemy1img,this.x,this.y,this.w,this.h);
    else if(this.type==1) ctx.drawImage(enemy2img,this.x,this.y,this.w,this.h);
    else ctx.drawImage(enemy3img,this.x,this.y,this.w,this.h);
  }

  update(){
    this.x -= this.vx;
    if(this.x + this.w <=0) this.kill = true;

    //当たり判定
    if (this.x <= 120) {
      if(this.iti == jikiIti) {
        bgm.pause();
        sound1.currentTime = 0;
        sound1.volume = 0.7;
        sound1.play();
        expl(-50,jiki[0].y-50,2,1,this.h*5,1);
        this.kill = jiki[0].kill = true;
        setTimeout(gameover,500);
        document.getElementById("uebutton").removeEventListener("click",jikiIdou1);
        document.getElementById("sitabutton").removeEventListener("click",jikiIdou2);
      }
    }
  }
}
