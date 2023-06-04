class Format {
  // 매개변수가 array인 경우
  static #array() {}
  // static #array() {
  //   // type을 array에서 string으로 바꾸고 ,로 나누는 함수
  //   // ex) [1, 2, 3]
  //   function makeArrayTypeStringAndDividedByComma(str = "", arr) {
  //     str += "[";

  //     for (let i = 0; i < arr.length; i++) {
  //       if (Object.getPrototypeOf(arr[i]) === Array.prototype) {
  //         str = makeArrayTypeStringAndDividedByComma(str, arr[i]);
  //       } else {
  //         if (typeof arr[i] === "string") {
  //           str += '"' + arr[i] + '"' + ", ";
  //         } else {
  //           str += arr[i] + ", ";
  //         }
  //       }
  //     }
  //     str += "]";

  //     return str;
  //   }

  //   function modifyCommaPosition(str) {
  //     let res = "";
  //     let strIdx = 0;

  //     while (strIdx < str.length) {
  //       if (str[strIdx] + str[strIdx + 1] + str[strIdx + 2] === ", ]") {
  //         res += str[strIdx + 2];
  //         strIdx += 3;
  //       } else if (str[strIdx - 1] + str[strIdx] === "][") {
  //         res += ", " + str[strIdx];
  //         strIdx++;
  //       } else {
  //         res += str[strIdx];
  //         strIdx++;
  //       }
  //     }

  //     return res;
  //   }

  //   function modifyResultOfSplit(arr) {
  //     let str = "[";
  //     for (var i = 0; i < arr.length - 1; i++) {
  //       str += '"' + arr[i] + '", ';
  //     }
  //     str += '"' + arr[i] + '"]';

  //     return str;
  //   }

  //   return [
  //     makeArrayTypeStringAndDividedByComma,
  //     modifyCommaPosition,
  //     modifyResultOfSplit,
  //   ];
  // }

  // 매개변수가 string인 경우
  static #string() {
    function modifyResultOfString(str) {
      return '"' + str + '"';
    }

    return [modifyResultOfString];
  }

  // 매개변수가 object인 경우
  static #object() {
    function makeObjectTypeStringAndDividedByComma(obj) {
      let str = "";
      str += "{ ";

      for (const v of Object.keys(obj)) {
        if (Object.getPrototypeOf(obj[v]) === Array.prototype) {
          str += v + ": " + "Array(" + obj[v].length + ")" + ", ";
          continue;
        }

        if (Object.getPrototypeOf(obj[v]) === Object.prototype) {
          str += v + ": " + "Object" + ", ";
          continue;
        }

        if (Object.getPrototypeOf(obj[v]) === String.prototype) {
          str += v + ": " + '"' + obj[v] + '"' + ", ";
          continue;
        }

        str += v + ": " + obj[v] + ", ";
      }
      str += "}";

      return str;
    }

    function removeLastComma(str) {
      let res = "";
      for (var i = 0; i < str.length - 3; i++) {
        res += str[i];
      }
      res += " }";

      return res;
    }

    return [makeObjectTypeStringAndDividedByComma, removeLastComma];
  }

  static stringify() {
    let str1 = "";
    for (const v of this.#array()) {
      str1 += v.toString();
    }

    let str2 = "";
    for (const v of this.#string()) {
      str2 += v.toString();
    }

    let str3 = "";
    for (const v of this.#object()) {
      str3 += v.toString();
    }

    return str1 + str2 + str3;
  }
}

export default Format;
