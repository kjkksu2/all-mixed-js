import Screen from "./screen";
import Status from "./config/status";
import Animation from "./animation";
import Configuration from "./config/configuration";

class FlappyBird extends Configuration {
  constructor(canvas) {
    super(canvas);
    this.canvas = canvas;
    this.bindEvents();
  }

  start() {
    this.animation = new Animation(this.canvas);
    this.screen = new Screen(this.canvas, this.animation);
    this.screen.checkStatus();
  }

  bindEvents() {
    this.canvas.addEventListener("click", () => {
      switch (this.screen.status) {
        case Status.INITIAL:
          this.screen.status = Status.PLAYING;
          this.animation.createObjects(); // create
          break;
        case Status.PLAYING:
          this.animation.character.vy = -1 * this.velocity;
          break;
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "r") {
        switch (this.screen.status) {
          case Status.END:
            this.screen.status = Status.PLAYING;
            this.animation.createObjects(); // reset
            break;
        }
      }
    });
  }
}

export default FlappyBird;
