class DomElements {
  constructor() {
    this.dropdownBtn = document.querySelector(".dropdown .btn");
    this.dropdownContent = document.querySelector(".dropdown .content");
    this.terminal = document.querySelector(".terminal");
    this.startBtn = document.querySelector(".execution button:first-of-type");
    this.resetBtn = document.querySelector(".execution button:last-of-type");
    this.output = document.querySelector(".output");
  }

  stringify() {
    // babel이 내부적으로 사용하는 _classCallCheck 함수 제거
    let str = DomElements.toString()
      .split("_classCallCheck(this, DomElements);")
      .join("");

    return str;
  }
}

export default DomElements;
