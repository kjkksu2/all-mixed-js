// 여기서 동적 import
import "./styles.css";

import DOMPurify from "dompurify";
import DomElements from "./components/domElements";
import MyArray from "./components/myArray";
import Output from "./components/output";
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
      new Output().stringify() +
      (await Example.text());

    // console.log(this.code);

    this.terminal.value = await Example.text();
  }

  bindEvents() {
    this.terminal.addEventListener("change", (e) => {
      const dirtyInput = DOMPurify.sanitize(e.target.value);
      let cleanInput = dirtyInput.replaceAll("&lt;", "<");
      cleanInput = cleanInput.replaceAll("&gt;", ">");

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
