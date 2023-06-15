import Configuration from "../config/configuration";
import character from "../../images/character.png";

class Character extends Configuration {
  constructor(canvas) {
    super(canvas);
    this.init();
  }

  init() {
    this.sx = 0;
    this.sy = 0;
    this.sw = 115;
    this.sh = 100;
    this.dx = 100;
    this.dy = 100;
    this.dw = 90;
    this.dh = 90;

    this.vy = 0;
    this.frame = 0;

    this.img = new Image();
    this.img.src = character;
  }

  update() {
    // motion
    this.sx = this.sw * this.frame++;
    this.frame %= 4;

    // falling
    this.vy += this.gravity;
    this.dy += this.vy;

    // move within canvas
    // bottom
    if (this.dy + this.dh > this.canvas.height) {
      this.dy = this.canvas.height - this.dh;
    }
    // top
    if (this.dy < 0) {
      this.dy = 0;
    }
  }

  draw() {
    this.ctx.beginPath();
    if (this.img) {
      this.ctx.drawImage(
        this.img,
        this.sx,
        this.sy,
        this.sw,
        this.sh,
        this.dx,
        this.dy,
        this.dw,
        this.dh
      );
    }
  }
}

export default Character;
