import Ball from "./ball";
import Configuration from "./configuration";
import Validation from "./validation";

class Momentum extends Configuration {
  balls = [];

  constructor(num, canvas) {
    super(canvas);

    for (let i = 0; i < num; i++) {
      this.balls.push(new Ball(canvas));
    }
  }

  animate() {
    // clear
    this.clear();

    // update
    this.update();

    // draw
    this.draw();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    // movement of balls
    for (let i = 0; i < this.balls.length; i++) {
      Validation.makeBallsInsideCanvas(this.balls[i]);
      this.balls[i].x += this.balls[i].vx;
      this.balls[i].y += this.balls[i].vy;
    }

    // update velocity
    for (let i = 0; i < this.balls.length; i++) {
      const ball1 = this.balls[i];

      for (let j = i + 1; j < this.balls.length; j++) {
        const ball2 = this.balls[j];

        if (Validation.isCollided(ball1, ball2)) {
          // velocity of x
          let vx1 = ((ball1.m - ball2.m) * ball1.vx) / (ball1.m + ball2.m);
          vx1 += (2 * ball2.m * ball2.vx) / (ball1.m + ball2.m);

          let vx2 = ((ball2.m - ball1.m) * ball2.vx) / (ball2.m + ball1.m);
          vx2 += (2 * ball1.m * ball1.vx) / (ball1.m + ball2.m);

          ball1.vx = vx1;
          ball2.vx = vx2;

          // velocity of y
          let vy1 = ((ball1.m - ball2.m) * ball1.vy) / (ball1.m + ball2.m);
          vy1 += (2 * ball2.m * ball2.vy) / (ball1.m + ball2.m);

          let vy2 = ((ball2.m - ball1.m) * ball2.vy) / (ball2.m + ball1.m);
          vy2 += (2 * ball1.m * ball1.vy) / (ball1.m + ball2.m);

          ball1.vy = vy1;
          ball2.vy = vy2;
        }
      }
    }
  }

  draw() {
    this.balls.forEach((v) => v.draw());
  }
}

export default Momentum;
