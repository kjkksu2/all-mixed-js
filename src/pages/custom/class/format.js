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

export default Format;
