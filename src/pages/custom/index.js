// 여기서 동적 import
import "./styles.css";
import "./promise/examples/5.txt";
import MyArrayAsString from "./array";
import MyStringAsString from "./string";
import MyPromiseAsString from "./promise";

const textarea = document.querySelector(".editor textarea");
const start = document.querySelector(".result button:first-of-type");
const reset = document.querySelector(".result button:last-of-type");
const terminal = document.querySelector(".terminal");

const txt = (async () =>
  await fetch("./5.txt").then((response) => response.text()))();

class Format {
  static paramIsArray() {
    return `
      function makeArrayTypeStringAndDividedByComma(str = "", arr) {
        str += "[";
        for (const v of arr) {
          if (Object.getPrototypeOf(v) === Array.prototype) {
            str = makeArrayTypeStringAndDividedByComma(str, v);
          } else {
            if(typeof v === 'string'){
              str += '"' + v + '"' + ", ";
            } else {
              str += v + ", ";
            }
          }
        }
        str += "]";

        return str;
      }

      function modifyCommaPosition(str) {
        let res = "";
        let strIdx = 0;

        while (strIdx < str.length) {
          if (str[strIdx] + str[strIdx + 1] + str[strIdx + 2] === ", ]") {
            res += str[strIdx + 2];
            strIdx += 3;
          } else if (str[strIdx - 1] + str[strIdx] === "][") {
            res += ", " + str[strIdx];
            strIdx++;
          } else {
            res += str[strIdx];
            strIdx++;
          }
        }

        return res;
      }

      function modifyResultOfSplit(arr) {
        let str = "[";
        for (var i = 0; i < arr.length - 1; i++) {
          str += '"' + arr[i] + '", ';
        }
        str += '"' + arr[i] + '"]';

        return str;
      }
    `;
  }

  static paramIsString() {
    return `
      function modifyResultOfString(str) {
        return '"' + str + '"';
      }
    `;
  }

  static paramIsObject() {
    return `
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
    `;
  }
}

class Components {
  constructor(type) {
    this.type = type;
  }

  myClassAsString() {
    switch (this.type) {
      case "array":
        return MyArrayAsString;
      case "string":
        return MyStringAsString;
      case "promise":
        return MyPromiseAsString;
    }
  }

  overridingConsole() {
    return `
      terminal.innerHTML = "";

      window.a = function (value) {
        switch ("${this.type}") {
          case "array": {
            if (Object.getPrototypeOf(value) === Array.prototype) {
              terminal.innerHTML +=
                modifyCommaPosition(
                  makeArrayTypeStringAndDividedByComma("", value)
                ) + "\\n";
              break;
            }
    
            if (Object.getPrototypeOf(value) === MyArray.prototype) {
              terminal.innerHTML +=
                modifyCommaPosition(
                  makeArrayTypeStringAndDividedByComma("", value.values)
                ) + "\\n";
              break;
            }
    
            if (Object.getPrototypeOf(value) === String.prototype) {
              terminal.innerHTML += modifyResultOfString(value) + "\\n";
              break;
            }

            terminal.innerHTML += value + "\\n";
            break;
          }
          
          case "string": {
            if (Object.getPrototypeOf(value) === String.prototype) {
              terminal.innerHTML += modifyResultOfString(value) + "\\n";
              break;
            }

            if (Object.getPrototypeOf(value) === MyString.prototype) {
              terminal.innerHTML += modifyResultOfString(value.value) + "\\n";
              break;
            }

            if (Object.getPrototypeOf(value) === Array.prototype) {
              terminal.innerHTML += modifyResultOfSplit(value) + "\\n";
              break;
            }

            terminal.innerHTML += value + "\\n";
            break;
          }

          case "promise": {
            if (Object.getPrototypeOf(value) === Array.prototype) {
              terminal.innerHTML +=
                modifyCommaPosition(
                  makeArrayTypeStringAndDividedByComma("", value)
                ) + "\\n";
              break;
            }

            if (Object.getPrototypeOf(value) === String.prototype) {
              terminal.innerHTML += modifyResultOfString(value) + "\\n";
              break;
            }

            if (Object.getPrototypeOf(value) === Object.prototype) {
              terminal.innerHTML += removeLastComma(makeObjectTypeStringAndDividedByComma(value)) + "\\n";
              break;
            }

            terminal.innerHTML += value + "\\n";
            break;
          }
        }
      };
    `;
  }

  async defaultExample() {
    return await txt;
  }
}

class CustomObject extends Components {
  constructor(type) {
    super(type);
    this.code = null;
    this.bindEvents();
  }

  async init() {
    this.code =
      super.myClassAsString() +
      Format.paramIsArray() +
      Format.paramIsString() +
      Format.paramIsObject() +
      super.overridingConsole() +
      (await super.defaultExample());

    textarea.value = await super.defaultExample();
  }

  bindEvents() {
    textarea.addEventListener("change", (e) => {
      this.code =
        super.myClassAsString() +
        Format.paramIsArray() +
        Format.paramIsString() +
        Format.paramIsObject() +
        super.overridingConsole() +
        e.target.value;
    });

    start.addEventListener("click", () => {
      eval(this.code);
    });

    reset.addEventListener("click", () => {
      this.init();
      terminal.textContent = "";
    });
  }
}

new CustomObject("promise").init();
