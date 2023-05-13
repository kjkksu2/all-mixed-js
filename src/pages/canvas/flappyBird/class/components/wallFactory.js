import Configuration from "../config/configuration";
import Wall from "./wall";

class WallFactory extends Configuration {
  constructor(canvas) {
    super(canvas);
    this.canvas = canvas;
    this.init();
  }

  init() {
    this.walls = [];
    this.time = 1700;
  }

  createWalls() {
    // create walls at regular intervals
    setInterval(() => {
      const wall = new Wall(this.canvas);
      this.walls.push(wall.create());
    }, this.time);
  }

  update() {
    // move walls
    for (let i = 0; i < this.walls.length; i++) {
      this.walls[i].upperX -= this.velocity;
      this.walls[i].lowerX -= this.velocity;
    }

    // remove invisible wall
    if (this.walls[0] && this.walls[0].upperX + this.walls[0].upperW < 0) {
      this.walls.shift();
    }
  }

  draw() {
    this.walls.forEach((v) => {
      // style
      this.ctx.fillStyle = v.wallColor;

      // draw
      // upper wall
      this.ctx.beginPath();
      this.ctx.fillRect(v.upperX, v.upperY, v.upperW, v.upperH);

      // lower wall
      this.ctx.fillRect(v.lowerX, v.lowerY, v.lowerW, v.lowerH);
    });
  }
}

export default WallFactory;
