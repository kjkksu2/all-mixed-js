import "../examples/prototype/join.txt";

class Test {
  static async example() {
    return await fetch("./join.txt").then((response) => response.text());
  }
}

export default Test;
