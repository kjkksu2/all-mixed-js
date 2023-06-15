import Configuration from "../config/configuration";

class Score extends Configuration {
  constructor(canvas) {
    super(canvas);
    this.init();
    this.style();
  }

  init() {
    this.start = new Date();
    this.value = 0;
  }

  style() {
    this.textFillColor = "black";

    this.textStyle = "normal";
    this.textWeight = "bold";
    this.textSize = "40";
    this.textFamily = "verdana";
  }

  update() {
    const now = new Date();
    this.value = ((now - this.start) / 1000).toFixed(1);
  }

  draw() {
    // style
    this.ctx.fillStyle = this.textFillColor;
    this.ctx.font = `${this.textStyle} ${this.textWeight} ${this.textSize}px ${this.textFamily}`;

    // draw
    this.ctx.beginPath();
    this.ctx.fillText(this.value, this.canvas.width - 125, 75);
  }
}

export default Score;
