import DomElements from "./domElements";

class Output extends DomElements {
  /*
    eval이 평가하는 코드는 const output = document.querySelector(".output")이다.
    따라서, this.output이 아니라 output으로 적어야 한다.
    value는 console.log의 인자다.
  */
  print(value) {
    if (value === undefined) {
      this.output.innerHTML += "undefined" + "\n";
      return;
    }

    if (value === null) {
      this.output.innerHTML += "null" + "\n";
      return;
    }

    // [1,2,3]으로 출력되는 것을 [1, 2, 3]으로 바꿈. (filter 등)
    if (Object.getPrototypeOf(value) === Array.prototype) {
      const array = value;
      this.output.innerHTML +=
        JSON.stringify(array).replaceAll(",", ", ") + "\n";
      return;
    }

    // [1,2,3]으로 출력되는 것을 [1, 2, 3]으로 바꿈. (filter 등)
    if (Object.getPrototypeOf(value) === MyArray.prototype) {
      const array = value.values;
      this.output.innerHTML +=
        JSON.stringify(array).replaceAll(",", ", ") + "\n";
      return;
    }

    // 1,2,3으로 출력되는 것을 "1,2,3"으로 바꿈. (join)
    if (Object.getPrototypeOf(value) === String.prototype) {
      this.output.innerHTML += JSON.stringify(value) + "\n";
      return;
    }

    this.output.innerHTML += value + "\n";
  }

  connection() {
    function Output() {
      DomElements.call(this);
    }

    Output.prototype = Object.create(DomElements.prototype);
    DomElements.prototype.constructor = DomElements;
  }

  /* 
    es5이하에서도 동작해야 한다.
    extends 키워드 말고 직접 연결하자.
  */
  stringify() {
    let str = "";

    str += this.connection;

    console.log(str);

    str += `const a = ${(value) => this.print(value)};`;

    return str;
  }
}

export default Output;
