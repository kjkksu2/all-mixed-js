import Configuration from "./configuration";
import Hover from "./hover";

class Polygon extends Configuration {
  coordinates = null;

  constructor(canvas) {
    super(canvas);
    this.bindEvents();
  }

  draw(hover = false) {
    this.xAxis();
    this.yAxis();
    this.circle();
    this.points();
    this.polygon(hover);
  }

  xAxis() {
    // style
    this.ctx.lineWidth = this.axisWidth;
    this.ctx.strokeStyle = this.axisColor;

    // draw
    this.ctx.beginPath();
    this.ctx.moveTo(this.centerX - 1.5 * this.radius, this.centerY);
    this.ctx.lineTo(this.centerX + 1.5 * this.radius, this.centerY);
    this.ctx.stroke();
  }

  yAxis() {
    // style
    this.ctx.lineWidth = this.axisWidth;
    this.ctx.strokeStyle = this.axisColor;

    // draw
    this.ctx.beginPath();
    this.ctx.moveTo(this.centerX, this.centerY - 1.2 * this.radius);
    this.ctx.lineTo(this.centerX, this.centerY + 1.2 * this.radius);
    this.ctx.stroke();
  }

  circle() {
    // style
    this.ctx.lineWidth = this.circleWidth;
    this.ctx.strokeStyle = this.circleColor;

    // draw
    this.ctx.beginPath();
    this.ctx.arc(this.centerX, this.centerY, this.radius, 0, 360 * this.radian);
    this.ctx.stroke();
  }

  points() {
    // style
    this.ctx.fillStyle = this.pointColor;

    // draw
    this.coordinates = [];

    for (let i = 1; i <= this.sides; i++) {
      const x =
        this.centerX + this.radius * Math.cos(this.angle * this.radian * i);
      const y =
        this.centerY - this.radius * Math.sin(this.angle * this.radian * i);

      this.ctx.beginPath();
      this.ctx.arc(x, y, 5, 0, 360 * this.radian);
      this.ctx.fill();

      this.coordinates.push({ x, y });
    }
  }

  polygon(hover) {
    // style
    this.ctx.lineWidth = this.polygonWidth;
    this.ctx.strokeStyle = this.polygonColor;

    // draw
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(246, 229, 141, 1)";
    for (let i = 1; i <= this.sides + 1; i++) {
      this.ctx.lineTo(
        this.centerX + this.radius * Math.cos(this.angle * this.radian * i),
        this.centerY - this.radius * Math.sin(this.angle * this.radian * i)
      );
    }

    // hover인 경우
    if (hover) {
      this.ctx.fill();
    }

    this.ctx.stroke();
  }

  bindEvents() {
    this.canvas.addEventListener("mousemove", (e) => {
      const mouseX = e.offsetX;
      const mouseY = e.offsetY;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw(Hover.check(this.coordinates, { x: mouseX, y: mouseY }));
    });
  }
}

export default Polygon;
