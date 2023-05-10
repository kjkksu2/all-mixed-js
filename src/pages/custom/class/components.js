import MyArrayAsString from "../array";
import MyStringAsString from "../string";
import MyPromiseAsString from "../promise";

import Example from "./example";

class Components {
  textarea = document.querySelector(".editor textarea");
  start = document.querySelector(".result button:first-of-type");
  reset = document.querySelector(".result button:last-of-type");
  terminal = document.querySelector(".terminal");

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
  
        console.log = function (value) {
          switch ("${this.type}") {
            case "array": {
              if (Object.getPrototypeOf(value) === Array.prototype) {
                terminal.innerHTML +=
                  modifyCommaPosition(makeArrayTypeStringAndDividedByComma("", value)) + "\\n";
                break;
              }
      
              if (Object.getPrototypeOf(value) === MyArray.prototype) {
                terminal.innerHTML +=
                  modifyCommaPosition(makeArrayTypeStringAndDividedByComma("", value.values)) + "\\n";
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
                  modifyCommaPosition(makeArrayTypeStringAndDividedByComma("", value)) + "\\n";
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

              if (Object.getPrototypeOf(value) === MyPromise.prototype) {
                terminal.innerHTML += 'MyPromise { then: f, catch: f }' + "\\n";
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
    return await Example.text();
  }
}

export default Components;
