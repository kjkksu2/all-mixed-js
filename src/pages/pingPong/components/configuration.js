class Configuration {
  acceleration = 0.5;
  velocity = 3;
  MAX_SPEED = 20;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.canvas.width = 900;
    this.canvas.height = 500;
  }

  init() {
    this.net();
  }

  net() {
    const width = 2;
    const height = 9;

    this.ctx.beginPath();
    this.ctx.fillStyle = "gray";
    for (let i = 0; i < this.canvas.height; i += 15) {
      this.ctx.fillRect(this.canvas.width / 2, i, width, height);
    }
    this.ctx.fill();
  }
}

export default Configuration;
