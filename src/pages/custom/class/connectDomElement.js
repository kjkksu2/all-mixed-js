class ConnectDomElement {
  static init() {
    return `
        const textarea = document.querySelector(".editor textarea");
        const start = document.querySelector(".result button:first-of-type");
        const reset = document.querySelector(".result button:last-of-type");
        const terminal = document.querySelector(".terminal");
      `;
  }
}

export default ConnectDomElement;