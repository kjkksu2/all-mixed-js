import Configuration from "../config/configuration";
import Helper from "../config/helper";

class Wall extends Configuration {
  constructor(canvas) {
    super(canvas);
    this.init();
    this.style();
  }

  init() {
    this.x = this.canvas.width;
    this.y = 0;
    this.w = 50;
    this.h = Helper.getRandomInt(50, 300);
    this.gap = Helper.getRandomInt(200, 300);
  }

  style() {
    this.wallColor = Helper.getRandomColor();
  }

  create() {
    // upper wall
    this.upperX = this.x;
    this.upperY = this.y;
    this.upperW = this.w;
    this.upperH = this.h;

    // lower wall
    this.lowerX = this.x;
    this.lowerY = this.y + this.h + this.gap;
    this.lowerW = this.w;
    this.lowerH = this.canvas.height;

    return this;
  }
}

export default Wall;
