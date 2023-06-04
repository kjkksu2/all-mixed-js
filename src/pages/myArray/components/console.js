class Console {
  format(value) {
    // console.log의 인자 type이 undefined인 경우
    if (value === undefined) {
      console.innerHTML += "undefined" + "\n";
      return;
    }

    // console.log의 인자 type이 null인 경우
    if (value === null) {
      console.innerHTML += "null" + "\n";
      return;
    }

    // console.log의 인자 type이 array 경우
    // [1,2,3]으로 출력되는 것을 [1, 2, 3]으로 바꿈.
    if (Object.getPrototypeOf(value) === Array.prototype) {
      console.innerHTML += JSON.stringify(value).replaceAll(",", ", ") + "\n";
      return;
    }

    // console.log의 인자 type이 MyArray 경우
    if (Object.getPrototypeOf(value) === MyArray.prototype) {
      console.innerHTML +=
        JSON.stringify(value.values).replaceAll(",", ", ") + "\n";
      return;
    }

    // // console.log의 인자 type이 string 경우
    if (Object.getPrototypeOf(value) === String.prototype) {
      console.innerHTML += JSON.stringify(value) + "\n";
      return;
    }

    // 기타
    console.innerHTML += value + "\n";
  }

  override() {
    window.console.log = this.format;
  }

  stringify() {
    const newConsole = Object.getPrototypeOf(this).format;

    return `console.log = ${newConsole};`;
  }
  // static print() {
  //   return `
  //   const a = function(value){
  //     if(value === undefined){
  //       terminal.innerHTML += "undefined" + "\\n";
  //       return;
  //     }

  //     if(value === null){
  //       terminal.innerHTML += "null" + "\\n";
  //       return;
  //     }

  //     if (Object.getPrototypeOf(value) === Array.prototype) {
  //       terminal.innerHTML +=
  //         modifyCommaPosition(
  //           makeArrayTypeStringAndDividedByComma("", value)
  //         ) + "\\n";
  //       return;
  //     }

  //     if (Object.getPrototypeOf(value) === MyArray.prototype) {
  //       terminal.innerHTML +=
  //         modifyCommaPosition(
  //           makeArrayTypeStringAndDividedByComma("", value.values)
  //         ) + "\\n";
  //       return;
  //     }

  //     if (Object.getPrototypeOf(value) === String.prototype) {
  //       terminal.innerHTML += modifyResultOfString(value) + "\\n";
  //       return;
  //     }

  //     terminal.innerHTML += value + "\\n";
  //   }
  //   `;
  // }
}

export default Console;
