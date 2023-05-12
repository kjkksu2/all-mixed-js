import Components from "./components";
import Background from "./components/background";
import Configuration from "./config/configuration";
import Status from "./config/status";

class Screen extends Configuration {
  constructor(canvas, components) {
    super(canvas);
    this.canvas = canvas;
    this.status = Status.PLAYING;
    this.background = new Background(this.canvas);
  }

  animate() {
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

    window.requestAnimationFrame(this.animate.bind(this));
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
    this.ctx.fillText("INITIAL", this.canvas.width / 2, this.canvas.height / 2);
  }

  playing() {
    // background
    this.background.draw();
    this.background.x -= 5;
  }

  end() {
    // backdrop style
    this.ctx.fillStyle = this.backdropFillColor;

    // backdrop draw
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // status style
    this.ctx.fillStyle = this.textFillColor;
    this.ctx.font = `${this.textStyle} ${this.textWeight} ${this.textSize}px ${this.textFamily}`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    // status draw
    this.ctx.fillText("END", this.canvas.width / 2, this.canvas.height / 2);

    // message style
    this.ctx.font = `${this.textStyle} ${this.textWeight} ${
      this.textSize - 20
    }px ${this.textFamily}`;

    // message draw
    this.ctx.fillText(
      "Press R to restart!",
      this.canvas.width / 2,
      this.canvas.height / 2 + 100
    );
  }
}

export default Screen;
