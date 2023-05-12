import Background from "./components/background";

class Components {
  constructor(canvas) {
    this.canvas = canvas;
  }

  create() {
    // background
    this.background = new Background(this.canvas);
  }
}

export default Components;
