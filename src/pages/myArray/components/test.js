import "../examples/prototype/filter.txt";

class Test {
  static async example() {
    return await fetch("./filter.txt").then((response) => response.text());
  }
}

export default Test;
