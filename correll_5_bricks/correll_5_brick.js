var canvas;
var ctx;
var x = 250;
var y = 200;
var x1 = 175;
var y1 = 25;
var dx1 = 2;
var dy1 = 4;
var WIDTH = 500;
var HEIGHT = 500;

function rect() {
    var x = 50;
    var y = 200;
    var w = 100;
    var h = 50;
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function rect1(x1,y1,w1,h1) {
  ctx.beginPath();
  ctx.rect(x1,y1,w1,h1);
  ctx.closePath();
  ctx.fillStyle = "Blue";
  ctx.fill();
  ctx.beginPath();
  ctx.rect(x1+101,y1,w1,h1);
  ctx.closePath();
  ctx.fillStyle = "Blue";
  ctx.fill();
  ctx.beginPath();
  ctx.rect(x1+202,y1,w1,h1);
  ctx.closePath();
  ctx.fillStyle = "Blue";
  ctx.fill();
  ctx.beginPath();
  ctx.rect(x1+202,y1,w1,h1);
  ctx.closePath();
  ctx.fillStyle = "Blue";
  ctx.fill();
  ctx.beginPath();
  ctx.rect(x1,y1-51,w1,h1);
  ctx.closePath();
  ctx.fillStyle = "Blue";
  ctx.fill();
  ctx.beginPath();
  ctx.rect(x1+101,y1-51,w1,h1);
  ctx.closePath();
  ctx.fillStyle = "Blue";
  ctx.fill();
  ctx.beginPath();
  ctx.rect(x1+202,y1-51,w1,h1);
  ctx.closePath();
  ctx.fillStyle = "Blue";
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 10);
}

function draw() {
  clear();
    ctx.fillStyle = "#f1ffff";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  rect1(x1, y1, 100, 50);
    
    for (i = 0; i > 5; i++){
        rect1(x1 + i * 10, y1, 100, 50);
    }
    
    if (y1 + dy1 + 50 > HEIGHT || y1 + dy1 < 0)
    dy1 = 0;
    y1 += dy1;
}

init();