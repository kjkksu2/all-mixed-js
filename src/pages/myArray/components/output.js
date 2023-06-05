class Ouput {
  /*
    eval이 평가하는 코드는 const output = document.querySelector(".output")이다.
    따라서, this.output이 아니라 output으로 적어야 한다.
    value는 console.log의 인자다.
  */
  print(value) {
    if (value === undefined) {
      output.innerHTML += "undefined" + "\n";
      return;
    }

    if (value === null) {
      output.innerHTML += "null" + "\n";
      return;
    }

    // [1,2,3]으로 출력되는 것을 [1, 2, 3]으로 바꿈. (filter 등)
    if (Object.getPrototypeOf(value) === Array.prototype) {
      const array = value;
      output.innerHTML += JSON.stringify(array).replaceAll(",", ", ") + "\n";
      return;
    }

    // [1,2,3]으로 출력되는 것을 [1, 2, 3]으로 바꿈. (filter 등)
    if (Object.getPrototypeOf(value) === MyArray.prototype) {
      const array = value.values;
      output.innerHTML += JSON.stringify(array).replaceAll(",", ", ") + "\n";
      return;
    }

    // 1,2,3으로 출력되는 것을 "1,2,3"으로 바꿈. (join)
    if (Object.getPrototypeOf(value) === String.prototype) {
      output.innerHTML += JSON.stringify(value) + "\n";
      return;
    }

    output.innerHTML += value + "\n";
  }

  stringify() {
    const overridedConsole = Object.getPrototypeOf(this).print;

    return `console.log = ${overridedConsole};`;
  }
}

export default Ouput;
