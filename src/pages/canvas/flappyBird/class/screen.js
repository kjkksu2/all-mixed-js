import Configuration from "./config/configuration";
import Status from "./config/status";

class Screen extends Configuration {
  constructor(canvas, animation) {
    super(canvas);

    this.status = Status.INITIAL;
    this.animation = animation;
    this.style();
  }

  style() {
    // backdrop
    this.backdropFillColor = "black";

    // text
    this.textFillColor = "white";
    this.textStyle = "normal";
    this.textWeight = "bold";
    this.textSize = "35";
    this.textFamily = "verdana";
  }

  checkStatus() {
    switch (this.status) {
      case Status.INITIAL:
        this.initial();
        break;
      case Status.PLAYING:
        this.playing();
        break;
      case Status.END:
        this.end();
        break;
    }

    window.requestAnimationFrame(this.checkStatus.bind(this));
  }

  initial() {
    // backdrop style
    this.ctx.fillStyle = this.backdropFillColor;

    // backdrop draw
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // text style
    this.ctx.fillStyle = this.textFillColor;
    this.ctx.font = `${this.textStyle} ${this.textWeight} ${this.textSize}px ${this.textFamily}`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    // text draw
    this.ctx.fillText(
      "Click to Start!",
      this.canvas.width / 2,
      this.canvas.height / 2
    );
  }

  playing() {
    // clear
    this.animation.clear();

    // update
    this.animation.update();

    // draw
    this.animation.draw();

    // check collision
    if (this.animation.isCollided()) {
      this.status = Status.END;
    }
  }

  end() {
    // backdrop
    this.ctx.fillStyle = this.backdropFillColor;

    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // score
    this.ctx.fillStyle = this.textFillColor;
    this.ctx.font = `${this.textStyle} ${this.textWeight} ${
      +this.textSize + 20
    }px ${this.textFamily}`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    this.ctx.fillText(
      `Your Score: ${this.animation.score.value}`,
      this.canvas.width / 2,
      this.canvas.height / 2 - 120
    );

    // status
    this.ctx.fillStyle = this.textFillColor;
    this.ctx.font = `${this.textStyle} ${this.textWeight} ${this.textSize}px ${this.textFamily}`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    this.ctx.fillText("END", this.canvas.width / 2, this.canvas.height / 2);

    // message
    this.ctx.font = `${this.textStyle} ${this.textWeight} ${
      +this.textSize - 20
    }px ${this.textFamily}`;

    this.ctx.fillText(
      "Press R to restart!",
      this.canvas.width / 2,
      this.canvas.height / 2 + 100
    );
  }
}

export default Screen;
