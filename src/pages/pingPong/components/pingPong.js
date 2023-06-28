import Configuration from "./Configuration";
import Ball from "./ball";
import Player from "./player";

class PingPong extends Configuration {
  constructor(canvas) {
    super(canvas);
    this.ball = new Ball(canvas);
    this.user = new Player(canvas, "user");
    this.computer = new Player(canvas, "computer");
  }

  animate() {
    // clear
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // update
    this.ball.update(this.user, this.computer);

    // draw
    super.init();
    this.ball.draw();
    this.user.draw();
    this.computer.draw(this.ball);

    window.requestAnimationFrame(this.animate.bind(this));
  }
}

export default PingPong;
