// 여기서 동적 import
import "./styles.css";

// webpack-bundler
import DOMPurify from "dompurify";
import DomElements from "./components/domElements";
import MyArray from "./components/myArray";
import Output from "./components/output";
import Test from "./components/test";

class CustomObject extends DomElements {
  constructor() {
    super();
    this.code = null;
    this.bindEvents();
  }

  async init() {
    const example = await Test.example();

    this.code =
      new DomElements().stringify() +
      new MyArray().stringify() +
      new Output().stringify() +
      example;

    this.terminal.value = example;
  }

  bindEvents() {
    this.terminal.addEventListener("change", (e) => {
      const dirtyInput = DOMPurify.sanitize(e.target.value);
      const cleanInput = dirtyInput
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">");

      this.code =
        new DomElements().stringify() +
        new MyArray().stringify() +
        new Output().stringify() +
        cleanInput;
    });

    this.startBtn.addEventListener("click", () => {
      try {
        eval(this.code);
      } catch (e) {
        console.error(e);
        this.output.textContent = `Error: ${e.message}`;
      }
    });

    this.resetBtn.addEventListener("click", () => {
      this.init();
      this.output.textContent = "";
    });
  }
}

new CustomObject().init();
