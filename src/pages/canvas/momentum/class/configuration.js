class Configuration {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 1000;
    this.canvas.height = 700;
  }
}

export default Configuration;
