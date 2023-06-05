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
        name: "output",
        value: ".output",
      }
    );

    // const terminal = document.querySelector(".terminal");
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
