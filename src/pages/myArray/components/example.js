import "../examples/prototype/filter.txt";

class Example {
  static async text() {
    return await fetch("./filter.txt").then((response) => response.text());
  }
}

export default Example;
