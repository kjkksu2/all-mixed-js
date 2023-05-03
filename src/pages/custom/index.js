// 여기서 동적 import
import "./styles.css";
import "./array/example.txt";
import MyArrayString from "./array";
import MyStringString from "./string";

const textarea = document.querySelector(".editor textarea");
const start = document.querySelector(".result button:first-of-type");
const reset = document.querySelector(".result button:last-of-type");
const terminal = document.querySelector(".terminal");

const txt = (async () =>
  await fetch("example.txt").then((response) => response.text()))();

class Format {}

class Components {
  constructor(type) {
    this.type = type;
  }

  classString() {
    switch (this.type) {
      case "array":
        return MyArrayString;
      case "string":
        return MyStringString;
      case "promise":
        return MyPromiseString;
    }
  }

  arrayFormat() {
    return `
        function changeArrayIntoStringDividedByComma(str = "", arr) {
            str += "[";
            for (const v of arr) {
                if (Object.getPrototypeOf(v) === Array.prototype) {
                    str = changeArrayIntoStringDividedByComma(str, v);
                } else {
                    str += v + ', ';
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
    `;
  }

  // string이 array를 return하는 경우는 나머지로 커버 가능
  splitFormat() {
    return `
        function splitFormat(stringArray) {
            let str = "[";
            for (var i = 0; i < arr.length - 1; i++) {
                str += "'" + arr[i] + "', ";
            }
            str += "'" + arr[i] + "']";
    
            return str;
        }
    `;
  }

  overridingConsole() {
    return `
        terminal.innerHTML = "";

        console.log = function (value) {
            if ('${this.type}' === 'array' && Object.getPrototypeOf(value) === Array.prototype) {
                terminal.innerHTML +=
                    modifyCommaPosition(changeArrayIntoStringDividedByComma("", value)) + "\\n";
            } else if ('${this.type}' === 'array' && Object.getPrototypeOf(value) === MyArray.prototype) {
                terminal.innerHTML +=
                    modifyCommaPosition(changeArrayIntoStringDividedByComma("", value.values)) + "\\n";
            } else if ('${this.type}' === 'string' && Object.getPrototypeOf(value) === Array.prototype) {
                terminal.innerHTML += splitFormat(value) + "\\n";
            } else if ('${this.type}' === 'string' && Object.getPrototypeOf(value) === MyString.prototype) {
                terminal.innerHTML += value.value + "\\n";
            } else {
                terminal.innerHTML += value + "\\n";
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
    // Components의 모든 문자열 코드 합체
    this.code =
      this.classString() +
      `${this.type === "array" && this.arrayFormat()}` +
      `${this.type === "string" && this.splitFormat()}` +
      this.overridingConsole() +
      (await this.defaultExample());
    textarea.value = await this.defaultExample();
  }

  bindEvents() {
    textarea.addEventListener("change", (e) => {
      this.code =
        this.classString() +
        `${this.type === "array" && this.arrayFormat()}` +
        `${this.type === "string" && this.splitFormat()}` +
        this.overridingConsole() +
        e.target.value;
    });

    start.addEventListener("click", () => {
      // 문자열 코드 실행
      eval(this.code);
    });

    reset.addEventListener("click", () => {
      this.init();
      terminal.textContent = "";
    });
  }
}

new CustomObject("array").init();
