// 여기서 동적 import
import "./common";
import "./styles.css";

import DOMPurify from "dompurify"; // webpack-bundler
import DomElements from "./components/domElements";
import MyPromise from "./components/myPromise";
import Output from "./components/output";
import Dropdown from "./components/dropdown";

class CustomObject extends DomElements {
  constructor() {
    super();
    this.code = null;
    this.bindEvents();
    this.dropdown = new Dropdown(this.init.bind(this));
  }

  async init() {
    const example = await this.dropdown.example();

    this.code =
      new DomElements().stringify() +
      MyPromise.toString() +
      new Output().stringify() +
      example;

    this.terminal.value = example;
    this.output.textContent = "";
  }

  bindEvents() {
    this.terminal.addEventListener("change", (e) => {
      const dirtyInput = DOMPurify.sanitize(e.target.value);
      const cleanInput = dirtyInput
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">");

      this.code =
        new DomElements().stringify() +
        MyPromise.toString() +
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
