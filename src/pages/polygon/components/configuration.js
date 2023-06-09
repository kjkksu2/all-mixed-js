class Configuration {
  radian = Math.PI / 180;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 900;
    this.canvas.height = 600;

    this.init();
    this.style();
  }

  init() {
    this.sides = 5;
    this.angle = 360 / this.sides;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.radius = 200;
  }

  style() {
    this.axisStyle();
    this.circleStyle();
    this.pointStyle();
    this.polygonStyle();
  }

  axisStyle() {
    this.axisWidth = 1;
    this.axisColor = "rgba(0, 0, 0, 0.3)";
  }

  circleStyle() {
    this.circleWidth = 3;
    this.circleColor = "rgba(0, 0, 0, 0.3)";
  }

  pointStyle() {
    this.pointColor = "red";
  }

  polygonStyle() {
    this.polygonWidth = 3;
    this.polygonColor = "black";
  }
}

export default Configuration;
