class DomElements {
  constructor() {
    this.terminal = document.querySelector(".terminal");
    this.startBtn = document.querySelector(".execution button:first-of-type");
    this.resetBtn = document.querySelector(".execution button:last-of-type");
    this.output = document.querySelector(".output");
  }

  stringify() {
    let str = DomElements.toString()
      .split("_classCallCheck(this, DomElements);")
      .join("");

    return str;
  }
}

export default DomElements;
