import Background from "./elements/background";
import Character from "./elements/character";
import Score from "./elements/score";
import WallFactory from "./elements/wallFactory";

class Animation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  createObjects() {
    // background
    this.background1 = new Background(this.canvas);
    this.background1.x = 0;
    this.background2 = new Background(this.canvas);
    this.background2.x = this.canvas.width;

    // wall
    this.wallFactory = new WallFactory(this.canvas);
    this.wallFactory.createWalls();

    // score
    this.score = new Score(this.canvas);

    // character
    this.character = new Character(this.canvas);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    // background
    this.background1.update();
    this.background2.update();

    // wall
    this.wallFactory.update();

    // score
    this.score.update();

    // character
    this.character.update();
  }

  draw() {
    // background
    this.background1.draw();
    this.background2.draw();

    // wall
    this.wallFactory.draw();

    // score
    this.score.draw();

    // character
    this.character.draw();
  }

  checkCollision(character, wall) {
    let collided = true;

    if (character.top > wall.bottom && character.bottom < wall.top) {
      collided = false;
    }

    if (character.right < wall.left) {
      collided = false;
    }

    if (character.left > wall.right) {
      collided = false;
    }

    return collided;
  }

  isCollided() {
    // character
    const character = {
      top: this.character.dy,
      bottom: this.character.dy + this.character.dh,
      right: this.character.dx + this.character.dw,
      left: this.character.dx,
    };

    // wall
    const walls = this.wallFactory.walls;
    for (const v of walls) {
      const wall = {
        top: v.lowerY,
        bottom: v.upperH,
        right: v.upperX + v.upperW,
        left: v.upperX,
      };

      if (this.checkCollision(character, wall)) {
        return true;
      }
    }

    return false;
  }
}

export default Animation;
