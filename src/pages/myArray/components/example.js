import "../examples/prototype/join.txt";

class Example {
  static async text() {
    return await fetch("./join.txt").then((response) => response.text());
  }
}

export default Example;
