import Configuration from "./Configuration";

class Ball extends Configuration {
  radian = Math.PI / 180;

  constructor(canvas) {
    super(canvas);
    this.init();
  }

  init() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.r = 15;

    this.velocity = 3;
    this.acceleration = 0.5;
    this.velocityX = 1.3 * this.velocity;
    this.velocityY = 1.1 * this.velocity;
  }

  update(user, computer) {
    // x
    /* 
      user block과 부딪힐 때
      1. block과 만나면
      2. ball이 block 내부와 부딪히는지
      3. speed check
    */
    const userX = user.x + user.width;
    if (userX >= this.x - this.r) {
      if (this.y >= user.y && this.y <= user.y + user.height) {
        if (Math.abs(this.velocityX) < this.MAX_SPEED) {
          this.velocityX += this.acceleration;
          this.acceleration *= -1;
        }
        this.velocityX *= -1;
      }
    }

    // computer block과 부딪힐 때
    const computerX = this.canvas.width - computer.width - computer.x;
    if (computerX <= this.x + this.r) {
      if (this.y >= computer.y && this.y <= computer.y + computer.height) {
        if (Math.abs(this.velocityX) < this.MAX_SPEED) {
          this.velocityX += this.acceleration;
          this.acceleration *= -1;
        }
        this.velocityX *= -1;
      }
    }

    // canvas 벽과 부딪힐 때
    if (this.x + this.r >= this.canvas.width || this.x - this.r <= 0) {
      this.init();
    }

    this.x += this.velocityX;

    // y
    if (this.y + this.r >= this.canvas.height || this.y - this.r <= 0) {
      this.velocityY *= -1;
    }
    this.y += this.velocityY;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#27ae60";
    this.ctx.arc(this.x, this.y, this.r, 0, 360 * this.radian);
    this.ctx.fill();
  }
}

export default Ball;
