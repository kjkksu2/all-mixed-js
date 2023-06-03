class Console {
  static print() {
    return `
    console.log = function(value){
      if (Object.getPrototypeOf(value) === Array.prototype) {
        terminal.innerHTML +=
          modifyCommaPosition(
            makeArrayTypeStringAndDividedByComma("", value)
          ) + "\\n";
        return;
      }
  
      if (Object.getPrototypeOf(value) === MyArray.prototype) {
        terminal.innerHTML +=
          modifyCommaPosition(
            makeArrayTypeStringAndDividedByComma("", value.values)
          ) + "\\n";
        return;
      }
  
      if (Object.getPrototypeOf(value) === String.prototype) {
        terminal.innerHTML += modifyResultOfString(value) + "\\n";
        return;
      }
  
      terminal.innerHTML += value + "\\n";
    }
    `;
  }
}

export default Console;
