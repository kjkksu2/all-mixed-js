import DomElements from "./domElements";

class Dropdown extends DomElements {
  prototypeList = [
    "concat",
    "every",
    "fill",
    "filter",
    "find",
    "findIndex",
    "flat",
    "forEach",
    "includes",
    "join",
    "map",
    "pop",
    "push",
    "reduce",
    "shift",
    "slice",
    "some",
    "unshift",
  ];
  staticList = ["from", "isArray", "of"];

  constructor(init) {
    super();
    this.init = init;
    this.selected = "filter";
    this.createOptions();
    this.bindEvents();
  }

  createOptions() {
    const fragment = document.createDocumentFragment();
    const list = [...this.prototypeList, ...this.staticList];

    list.forEach((v) => {
      const div = document.createElement("div");
      div.className = "item";
      div.textContent = v;
      fragment.appendChild(div);
    });

    this.dropdownContent.appendChild(fragment);
  }

  bindEvents() {
    this.dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.dropdownContent.classList.toggle("active");
    });

    this.dropdownContent.addEventListener("click", (e) => {
      if (!e.target.matches(".content .item")) return;

      this.selected = e.target.textContent;
      this.init();
      this.dropdownBtn.querySelector("span").textContent = e.target.textContent;
    });

    window.addEventListener("click", () => {
      this.dropdownContent.classList.remove("active");
    });
  }

  async example() {
    return await fetch(`./myArray/examples/${this.selected}.txt`).then(
      (response) => response.text()
    );
  }
}

export default Dropdown;
