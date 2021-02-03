//
//data.js データ
//

//読込
var startimg = new Image();
startimg.src ="image/start.png"
var kumo1img = new Image();
kumo1img.src ="image/kumo1.png"
var kumo2img = new Image();
kumo2img.src ="image/kumo2.png"
var treeimg = new Image();
treeimg.src ="image/ki.png"
var jikiimg = new Image();
jikiimg.src ="image/jikiimg.png"
var jiki2img = new Image();
jiki2img.src ="image/jiki2img.png"
var enemy1img = new Image();
enemy1img.src ="image/car2.png"
var enemy2img = new Image();
enemy2img.src ="image/car1.png"
var enemy3img = new Image();
enemy3img.src ="image/car3.png"
var miseimg = new Image();
miseimg.src ="image/mise.png"
var clearimg = new Image();
clearimg.src ="image/clear.jpg"
var gameoverimg = new Image();
gameoverimg.src ="image/gameover.png"
var sound1 = new Audio();
sound1.src = "sound/破滅・壊滅的なワンショット音.mp3"
var bgm = new Audio();
bgm.src = "sound/00015_heaven-and-hell.mp3"


var exlist = [
  "image/exp1.png",
  "image/exp2.png",
  "image/exp3.png",
  "image/exp4.png",
  "image/exp5.png",
  "image/exp6.png",
  "image/exp7.png",
  "image/exp8.png",
  "image/exp9.png",
  "image/exp10.png",
  "image/exp11.png",
  "image/exp12.png",
  "image/exp13.png",
  "image/exp14.png",
  "image/exp15.png",
  "image/exp16.png",
]

var eximg = [];
for(var i = 0;i<exlist.length;i++){
  var image = new Image();
  image.src = exlist[i];
  eximg.push(image);
}
