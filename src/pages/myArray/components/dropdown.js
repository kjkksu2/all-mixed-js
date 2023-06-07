import DomElements from "./domElements";

import { prototypeList, staticList } from "./data";

class Dropdown extends DomElements {
  constructor(init) {
    super();
    this.init = init;
    this.selected = "filter";
    this.createOptions();
    this.bindEvents();
  }

  createOptions() {
    const fragment = document.createDocumentFragment();
    const list = [...prototypeList, ...staticList];

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
    return await fetch(`./${this.selected}.txt`).then((response) =>
      response.text()
    );
  }
}

export default Dropdown;
