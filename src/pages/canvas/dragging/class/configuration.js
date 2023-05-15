class Configuration {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 1000;
    this.canvas.height = 700;

    this.init();
    this.style();
  }

  init() {
    this.x = 200;
    this.y = 200;
    this.r = 50;
    this.color = "red";
  }

  style() {
    this.ctx.fillStyle = this.color;
  }
}

export default Configuration;
