import Configuration from "./Configuration";

class Player extends Configuration {
  constructor(canvas, type) {
    super(canvas);
    this.type = type;
    this.init();
  }

  init() {
    this.width = 10;
    this.height = 100;
    this.x = 5;
    this.y = 0;
    this.r = 15;
  }

  draw(ball) {
    this.type === "user" && this.userMovement();
    this.type === "computer" && this.computerMovement(ball);
  }

  userMovement() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#2980b9";

    // initial location
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    // updated location
    this.canvas.addEventListener("mousemove", (e) => {
      const mouseY = e.offsetY;
      this.y = mouseY - this.height / 2;
    });

    this.ctx.fill();
  }

  computerMovement(ball) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#c0392b";

    // initial location
    this.ctx.fillRect(
      this.canvas.width - this.width - this.x,
      this.y,
      this.width,
      this.height
    );

    // updated location
    this.y = ball.y - this.height / 2;

    this.ctx.fill();
  }
}

export default Player;
