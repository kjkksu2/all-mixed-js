import Configuration from "../config/configuration";
import background from "../../images/back.png";

class Background extends Configuration {
  constructor(canvas) {
    super(canvas);
    this.x = 0;
    this.y = 0;
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.img = null;
    this.src = background;

    this.create();
  }

  create() {
    this.img = new Image();
    this.img.src = background;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.img) {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  }
}

export default Background;
