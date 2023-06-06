import DomElements from "./domElements";

class Output extends DomElements {
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

  /* 
    es5이하에서도 동작해야 한다.
    extends 키워드 사용하지 말고 직접 연결하자.
  */
  stringify() {
    let str = "";

    // Output의 인스턴스를 DomElements에게 전달함.
    str += "function Output() { DomElements.call(this); };";

    // Output.prototype이 DomElements.prototype을 상속 받음.
    str += "Output.prototype = Object.create(DomElements.prototype);";

    // Output.prototype의 print 함수를 string으로 만듦.
    Object.defineProperties(Output.prototype, {
      print: { enumerable: true },
    });

    for (const v in this) {
      const ftnName = this[v].name;
      const ftn = this[v].toString().replace(ftnName, "");
      if (ftnName && ftn) {
        str += `Output.prototype.${ftnName} = ${ftn};`;
      }
    }

    // Output 인스턴스 생성
    str += "const output = new Output();";

    // overide console.log
    str += `console.log = function (value) { output.print(value); };`;

    return str;
  }
}

export default Output;
