import Configuration from "./configuration";

class Ball extends Configuration {
  radian = Math.PI / 180;
  ballMovement = false;

  constructor(canvas) {
    super(canvas);
    this.bindEvents();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 360 * this.radian);
    this.ctx.fill();
  }

  bindEvents() {
    this.canvas.addEventListener("mousedown", (e) => {
      const mouseX = e.offsetX;
      const mouseY = e.offsetY;

      // distance
      this.distanceOfDiagonal = Math.sqrt(
        (mouseX - this.x) ** 2 + (mouseY - this.y) ** 2
      );
      this.distanceOfX = Math.abs(mouseX - this.x);
      this.distanceOfY = Math.abs(mouseY - this.y);

      // click inside the ball
      if (this.distanceOfDiagonal <= this.r) {
        this.ballMovement = true;
      }
    });

    this.canvas.addEventListener("mousemove", (e) => {
      const mouseX = e.offsetX;
      const mouseY = e.offsetY;

      if (this.ballMovement) {
        // clear
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // update
        // the first quadrant based on ball's center
        if (mouseX >= this.x && mouseY <= this.y) {
          this.x = mouseX - this.distanceOfX;
          this.y = mouseY + this.distanceOfY;
        }
        // the second quadrant based on ball's center
        if (mouseX < this.x && mouseY < this.y) {
          this.x = mouseX + this.distanceOfX;
          this.y = mouseY + this.distanceOfY;
        }
        // the third quadrant based on ball's center
        if (mouseX < this.x && mouseY > this.y) {
          this.x = mouseX + this.distanceOfX;
          this.y = mouseY - this.distanceOfY;
        }
        // the fourth quadrant based on ball's center
        if (mouseX > this.x && mouseY > this.y) {
          this.x = mouseX - this.distanceOfX;
          this.y = mouseY - this.distanceOfY;
        }

        // draw
        this.draw();
      }
    });

    this.canvas.addEventListener("mouseup", () => {
      this.ballMovement = false;
    });
  }
}

export default Ball;
