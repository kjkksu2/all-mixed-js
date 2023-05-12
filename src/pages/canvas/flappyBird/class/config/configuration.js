class Configuration {
  velocity = 5;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 1000;
    this.canvas.height = 700;

    this.init();
  }

  init() {
    this.backdrop();
    this.text();
  }

  backdrop() {
    this.backdropFillColor = "black";
  }

  text() {
    this.textFillColor = "white";

    this.textStyle = "normal";
    this.textWeight = "bold";
    this.textSize = "45";
    this.textFamily = "verdana";
  }
}

export default Configuration;
