import "../array/examples/prototype/forEach.txt";

class Example {
  static async text() {
    return await fetch("./custom/forEach.txt").then((response) =>
      response.text()
    );
  }
}

export default Example;
