import Configuration from "./configuration";
import Helper from "./helper";

class Ball extends Configuration {
  min = 10;
  max = 50;
  radian = Math.PI / 180;

  constructor(canvas) {
    super(canvas);
    this.init();
    this.style();
  }

  init() {
    this.x = Helper.getRandomInt(this.max, this.canvas.width - this.max);
    this.y = Helper.getRandomInt(this.max, this.canvas.height - this.max);
    this.r = Helper.getRandomInt(this.min, this.max);
    this.m = Helper.getRandomInt(this.min, this.max);

    this.vx =
      Helper.getRandomInt(this.min, this.max) - (this.max - this.min) / 2; // get integer including minus
    this.vy =
      Helper.getRandomInt(this.min, this.max) - (this.max - this.min) / 2; // get integer including minus
  }

  style() {
    this.ctx.fillStyle = "red";
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 360 * this.radian);
    this.ctx.fill();
  }
}

export default Ball;
