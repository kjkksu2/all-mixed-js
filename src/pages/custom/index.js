// 여기서 동적 import
import "./styles.css";
import DOMPurify from "dompurify";
import ConnectDomElement from "./class/connectDomElement";
import Format from "./class/format";
import Components from "./class/components";

class CustomObject extends Components {
  constructor(type) {
    super(type);
    this.code = null;
    this.bindEvents();
  }

  async init() {
    this.code =
      ConnectDomElement.init() +
      super.myClassAsString() +
      Format.paramIsArray() +
      Format.paramIsString() +
      Format.paramIsObject() +
      super.overridingConsole() +
      (await super.defaultExample());

    this.textarea.value = await super.defaultExample();
  }

  bindEvents() {
    this.textarea.addEventListener("change", (e) => {
      this.code =
        ConnectDomElement.init() +
        super.myClassAsString() +
        Format.paramIsArray() +
        Format.paramIsString() +
        Format.paramIsObject() +
        super.overridingConsole() +
        DOMPurify.sanitize(e.target.value);
    });

    this.start.addEventListener("click", () => {
      try {
        eval(this.code);
      } catch (e) {
        this.terminal.textContent = `Error: ${e.message}`;
      }
    });

    this.reset.addEventListener("click", () => {
      this.init();
      this.terminal.textContent = "";
    });
  }
}

new CustomObject("array").init();
