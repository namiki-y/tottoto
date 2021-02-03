//キャンバス
var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d");

var canvasWidth = 600;
var canvasHeight = 550;
canvas.width=canvasWidth;
canvas.height=canvasHeight;

//オブジェクト
var game;
var jiki = [];
var hakusen = [];
var tree = [];
var enemy = [];
var exp = [];
var goal = 1000;
var mise = new Mise();

//ゲームスピード
var gamespeed = 1000/60;

//初期化
function init(){
  jikiIti = 2;
  hakusen.length = 0;
  tree.length = 0;
  enemy.length = 0;
  exp.length = 0;
  jiki.length = 0;
  jiki.kill=false;
  goal = 1000;
}

//スタート画面
function startGamen(){
  canvas.removeEventListener("click",startGamen);

  ctx.clearRect(0,0,canvasWidth,canvasHeight);
  ctx.fillStyle = "gray"
  ctx.fillRect(0,350,canvasWidth,200);

  ctx.drawImage(kumo1img,40,30,170,70);
  ctx.drawImage(kumo2img,340,50,240,130);
  ctx.drawImage(startimg,40,250,560,300);

  ctx.fillStyle = "black";
  ctx.font = "bold 50px 'Arial'";
  ctx.fillText("Click START!!",40,220);

  init();
  canvas.addEventListener("click",gameStart);
}

//ゲーム開始
function gameStart(){
  canvas.removeEventListener("click",gameStart);
  game = setInterval(mainloop,gamespeed);
  addEventListener("keydown",keydownfunc);
  document.getElementById("uebutton").addEventListener("click",jikiIdou1);
  document.getElementById("sitabutton").addEventListener("click",jikiIdou2);

  for (var i = 0; i < 4; i++) hakusen.push(new Hakusen(i));
  jiki.push(new Jiki());
  bgm.volume = 0.5;
  bgm.currentTime = 13;
  bgm.play();
}

//ゲームオーバー画面
function gameover(){
  clearInterval(game);
  ctx.clearRect(0,0,canvasWidth,canvasHeight);

  ctx.fillStyle = "gray";
  ctx.fillRect(0,350,canvasWidth,canvasHeight-350);
  ctx.drawImage(gameoverimg,70,180,500,360);

  ctx.fillStyle = "black";
  ctx.font = "bold 50px 'Arial'";

  var s = "GAMEOVER";
  var w = ctx.measureText(s).width;
  var x = canvasWidth/2 - w/2;
  ctx.fillText(s,x,150);

  init();
  canvas.addEventListener("click",startGamen);
}

//クリア画面
function gameClear(){
  clearInterval(game);
  ctx.clearRect(0,0,canvasWidth,canvasHeight);

  ctx.drawImage(clearimg,0,0,canvasWidth,canvasHeight);
  canvas.addEventListener("click",function(){window.location.reload()});
}

//メイン
function mainloop(){
  canvas.removeEventListener("click",mainloop);
  ctx.clearRect(0,0,canvasWidth,canvasHeight);

  //背景
  ctx.fillStyle = "gray"
  ctx.fillRect(0,180,canvasWidth,370);
  //木
  if (rand(0,10)==1) tree.push(new Tree());

  //敵の出現
  if (goal>0) {
    if (rand(0,30)==1) enemy.push(new Enemy(rand(0,4),rand(0,2)));
  }

  //描画
  for (var i = 0; i < hakusen.length; i++) hakusen[i].draw();
  for (var i = 0; i < tree.length; i++) tree[i].draw();
  for (var i = 0; i < enemy.length; i++) enemy[i].draw();
  if(goal<=0) {
    mise.draw();
    mise.update();
  }
  if(jiki.length!=0) jiki[0].draw();
  for (var i = 0; i < exp.length; i++) exp[i].draw();

  //更新
  for (var i = 0; i < hakusen.length; i++) hakusen[i].update();
  for (var i = 0; i < tree.length; i++) tree[i].update();
  for (var i = 0; i < exp.length; i++) exp[i].update();
  updateobj(tree);
  updateobj(enemy);
  updateobj(exp);
  updateobj(jiki);
  if(jiki.length!=0) jiki[0].update();

  ctx.fillStyle = "black";
  ctx.font = "20px 'Arial'";
  ctx.fillText("残り　"+ goal + "m",20,20);

  goal--;
  if(goal==-290) gameClear();
}

window.onload = startGamen;
