class Components {
  canvas = document.querySelector("canvas");
  ctx = this.canvas.getContext("2d");

  constructor() {
    this.canvas.width = 1000;
    this.canvas.height = 700;
  }
}

class Polygon extends Components {
  coordinates = null;
  radian = Math.PI / 180;

  constructor(sides) {
    super();
    this.sides = sides;
    this.angle = 360 / this.sides;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.radius = 270;
    this.hover();
  }

  xAxis() {
    this.ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
    this.ctx.lineWidth = 1;

    this.ctx.beginPath();
    this.ctx.moveTo(this.centerX - 1.5 * this.radius, this.centerY);
    this.ctx.lineTo(this.centerX + 1.5 * this.radius, this.centerY);
    this.ctx.stroke();
  }

  yAxis() {
    this.ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
    this.ctx.lineWidth = 1;

    this.ctx.beginPath();
    this.ctx.moveTo(this.centerX, this.centerY - 1.2 * this.radius);
    this.ctx.lineTo(this.centerX, this.centerY + 1.2 * this.radius);
    this.ctx.stroke();
  }

  circle() {
    this.ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
    this.ctx.lineWidth = 3;

    this.ctx.beginPath();
    this.ctx.arc(this.centerX, this.centerY, this.radius, 0, 360 * this.radian);
    this.ctx.stroke();
  }

  points() {
    this.ctx.fillStyle = "red";
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

  polygon(fillPolygon) {
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 3;

    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(246, 229, 141, 1)";
    for (let i = 1; i <= this.sides + 1; i++) {
      this.ctx.lineTo(
        this.centerX + this.radius * Math.cos(this.angle * this.radian * i),
        this.centerY - this.radius * Math.sin(this.angle * this.radian * i)
      );
    }
    fillPolygon && this.ctx.fill();
    this.ctx.stroke();
  }

  draw(fillPolygon = false) {
    this.xAxis();
    this.yAxis();
    this.circle();
    this.points();
    this.polygon(fillPolygon);
  }

  shouldHover(mouseX, mouseY) {
    let count = 0;

    for (let i = 0; i < this.coordinates.length; i++) {
      let j = (i + 1) % this.coordinates.length;

      if (
        (this.coordinates[i].y > mouseY && this.coordinates[j].y < mouseY) ||
        (this.coordinates[i].y < mouseY && this.coordinates[j].y > mouseY)
      ) {
        let crossX =
          ((mouseY - this.coordinates[i].y) *
            (this.coordinates[i].x - this.coordinates[j].x)) /
            (this.coordinates[i].y - this.coordinates[j].y) +
          this.coordinates[i].x;

        if (mouseX < crossX) {
          count++;
        }
      }
    }

    return count % 2 > 0;
  }

  hover() {
    this.canvas.addEventListener("mousemove", (e) => {
      const mouseX = e.offsetX;
      const mouseY = e.offsetY;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw(this.shouldHover(mouseX, mouseY));
    });
  }
}

new Polygon(5).draw();
