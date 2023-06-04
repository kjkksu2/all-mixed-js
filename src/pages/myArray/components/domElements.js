class DomElements {
  #cssSelectors = [];

  constructor() {
    this.#cssSelectors.push(
      {
        name: "terminal",
        value: ".terminal",
      },
      {
        name: "startBtn",
        value: ".execution button:first-of-type",
      },
      {
        name: "resetBtn",
        value: ".execution button:last-of-type",
      },
      {
        name: "console",
        value: ".console",
      }
    );

    // const textarea = document.querySelector(".editor textarea");
    for (const obj of this.#cssSelectors) {
      this[obj.name] = document.querySelector(obj.value);
    }
  }

  stringify() {
    let str = "";

    for (const obj of this.#cssSelectors) {
      str +=
        `const ${obj.name} = document.querySelector("${obj.value}");` + "\n";
    }

    return str;
  }
}

export default DomElements;
