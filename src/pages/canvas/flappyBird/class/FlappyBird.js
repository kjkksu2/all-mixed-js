import Screen from "./screen";
import Status from "./config/status";
import Components from "./components";

class FlappyBird {
  constructor(canvas) {
    this.canvas = canvas;
    this.bindEvents();
  }

  start() {
    this.components = new Components(this.canvas);
    this.screen = new Screen(this.canvas, this.components);
    this.screen.animate();
  }

  bindEvents() {
    this.canvas.addEventListener("click", () => {
      switch (this.screen.status) {
        case Status.INITIAL:
          this.screen.status = Status.PLAYING;
          break;
        case Status.PLAYING:
          break;
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "r") {
        switch (this.screen.status) {
          case Status.END:
            this.screen.status = Status.PLAYING;
            break;
        }
      }
    });
  }
}

export default FlappyBird;
