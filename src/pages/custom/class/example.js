// import "../promise/examples/1.txt";
import "../array/examples/prototype/filter.txt";

class Example {
  static async text() {
    return await fetch("./custom/filter.txt").then((response) =>
      response.text()
    );
  }
}

export default Example;
