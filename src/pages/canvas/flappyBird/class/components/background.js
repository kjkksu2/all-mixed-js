import Configuration from "../config/configuration";
import background from "../../images/back.png";

class Background extends Configuration {
  constructor(canvas) {
    super(canvas);
    this.init();
  }

  init() {
    this.x = 0;
    this.y = 0;
    this.w = this.canvas.width;
    this.h = this.canvas.height;

    this.img = new Image();
    this.img.src = background;
  }

  update() {
    if (Math.abs(this.x - this.velocity) > this.canvas.width) {
      this.x = this.canvas.width;
    }
    this.x -= this.velocity;
  }

  draw() {
    this.ctx.beginPath();
    if (this.img) {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  }
}

export default Background;
