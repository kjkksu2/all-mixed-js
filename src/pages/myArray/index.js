// 여기서 동적 import
import "./styles.css";

import DOMPurify from "dompurify";
import DomElements from "./components/domElements";
import MyArray from "./components/myArray";
import Console from "./components/console";
import Example from "./components/example";

class CustomObject extends DomElements {
  constructor() {
    super();
    this.code = null;
    this.bindEvents();
  }

  // stringify() {
  //   return MyArray.toString();
  // }

  async init() {
    this.code =
      new DomElements().stringify() +
      new MyArray().stringify() +
      new Console().stringify() +
      (await Example.text());

    this.terminal.value = await Example.text();
  }

  bindEvents() {
    this.terminal.addEventListener("change", (e) => {
      this.code =
        new DomElements().stringify() +
        new MyArray().stringify() +
        new Console().stringify() +
        DOMPurify.sanitize(e.target.value);
    });

    this.startBtn.addEventListener("click", () => {
      try {
        eval(this.code);
      } catch (e) {
        console.error(e);
        this.console.textContent = `Error: ${e.message}`;
      }
    });

    this.resetBtn.addEventListener("click", () => {
      this.init();
      this.console.textContent = "";
    });
  }
}

new CustomObject().init();
