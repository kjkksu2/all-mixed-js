// 여기서 동적 import
import "./styles.css";

import DOMPurify from "dompurify";
import DomElement from "./components/DomElement";
import Format from "./components/format";
import MyArray from "./components/myArray";
import Console from "./components/console";
import Example from "./components/example";

class CustomObject extends DomElement {
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
      DomElement.stringify() +
      new MyArray().convertToString() +
      Format.initialize() +
      Console.print() +
      (await Example.text());

    this.textarea.value = await Example.text();
  }

  bindEvents() {
    this.textarea.addEventListener("change", (e) => {
      this.code =
        DomElement.stringify() +
        new MyArray().convertToString() +
        Format.initialize() +
        Console.print() +
        DOMPurify.sanitize(e.target.value);
    });

    this.start.addEventListener("click", () => {
      try {
        eval(this.code);
      } catch (e) {
        console.error(e);
        this.terminal.textContent = `Error: ${e.message}`;
      }
    });

    this.reset.addEventListener("click", () => {
      this.init();
      this.terminal.textContent = "";
    });
  }
}

new CustomObject().init();
