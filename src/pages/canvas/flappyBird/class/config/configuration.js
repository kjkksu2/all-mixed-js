class Configuration {
  gravity = 0.2;
  velocity = 5;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 900;
    this.canvas.height = 600;
  }
}

export default Configuration;
