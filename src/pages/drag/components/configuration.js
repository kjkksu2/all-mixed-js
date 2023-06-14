class Configuration {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 800;
    this.canvas.height = 500;

    this.init();
    this.style();
  }

  init() {
    this.x = 200;
    this.y = 200;
    this.r = 45;
    this.color = "red";
  }

  style() {
    this.ctx.fillStyle = this.color;
  }
}

export default Configuration;
