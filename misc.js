//その他

//ランダム
function rand(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

//killフラグが立ったら消す
function updateobj(obj) {
  for(var i = obj.length-1;i>=0;i--){
    obj[i].update();
    if(obj[i].kill)obj.splice(i,1);
  }
}

//爆発
class Exp {
  constructor(x,y,vx,vy,w){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.w = w;
    this.kill = false;
    this.count = this.counta = 0;
  }

  draw(){
    ctx.drawImage(eximg[this.count],this.x,this.y,this.w,this.w)

  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.counta++;
    if(this.counta == 3){
      this.count++;
      this.counta = 0;
    if(this.count ==16)this.kill=true;
  }
  }
}

//爆発2
function expl(x,y,vx,vy,w,h){
  for(var i = 0; i< 16; i++){
    var evx = vx+ (rand(-h,h));
    var evy = vy+ (rand(-h,h));
    exp.push(new Exp(x,y,evx,evy,w));
  }
}

//ゴール
class Mise {
  constructor(){
    this.x = canvasWidth;
    this.y = 20;
    this.w = 250;
    this.h = 400;
  }

  draw(){
    ctx.drawImage(miseimg,this.x,this.y,this.w,this.h);
  }

  update(){
    if(this.x>350) this.x--;
  }
}
