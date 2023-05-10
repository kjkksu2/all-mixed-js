const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 700;

// ball
class Ball {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 200;
    this.y = 200;
    this.radius = 20;
    this.color = "red";

    this.vx = null;
    this.vy = null;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

const ball = new Ball(ctx);
ball.vx = 7;
ball.vy = 5;

// animate
function animation() {
  // clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update
  if (ball.y + ball.radius > canvas.height) {
    ball.vy *= -1;
  }
  if (ball.x + ball.radius > canvas.width) {
    ball.vx *= -1;
  }
  if (ball.y - ball.radius < 0) {
    ball.vy *= -1;
  }
  if (ball.x - ball.radius < 0) {
    ball.vx *= -1;
  }

  ball.x += ball.vx;
  ball.y += ball.vy;

  // draw
  ball.draw();

  // animate
  window.requestAnimationFrame(animation);
}
animation();
