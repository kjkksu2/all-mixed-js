/*
    String.prototype.search (x) 
    String.prototype.replace (x)
*/

class MyString {
  constructor(value = "") {
    this.value = value;
  }

  indexOf(target, fromIndex = 0) {
    if (fromIndex >= this.value.length) return -1;

    let valueIdx = fromIndex;
    let targetIdx = 0;
    while (valueIdx < this.value.length) {
      if (this.value[valueIdx] === target[targetIdx]) {
        targetIdx++;
      } else {
        targetIdx = 0;
      }
      valueIdx++;

      if (targetIdx === target.length) return valueIdx - target.length;
    }

    return -1;
  }

  substring(start = 0, end = this.value.length) {
    let str = "";
    if (start > end) {
      const temp = start;
      start = end;
      end = temp;
    }
    for (let i = start; i < Math.min(end, this.value.length); i++) {
      str += this.value[i];
    }
    return str;
  }

  padStart(length, padString = " ") {
    const str = new MyString();

    length -= this.value.length;
    while (length > 0) {
      str.value += padString;
      length--;
    }

    str.value += this.value;
    return str;
  }

  padEnd(length, padString = " ") {
    const str = new MyString();
    str.value += this.value;

    length -= this.value.length;
    while (length > 0) {
      str.value += padString;
      length--;
    }

    return str;
  }

  repeat(count) {
    count = Math.floor(count);

    let str = "";
    while (count > 0) {
      str += this.value;
      count--;
    }

    return str;
  }

  split(separator, limit = this.value.length) {
    const arr = [];
    let value = this.value;

    while (separator !== undefined && true) {
      const str = new MyString(value);
      const index = str.indexOf(separator);

      if (index === -1) break;
      if (limit === 0) break;

      arr.push(str.substring(0, index));
      limit--;
      value = str.substring(index + separator.length);
    }
    limit > 0 && arr.push(value);

    return arr;
  }

  trimStart() {
    let startWriting = false;
    let str = "";

    for (let i = 0; i < this.value.length; i++) {
      if (!startWriting && this.value[i] !== " ") {
        startWriting = true;
      }

      if (startWriting) {
        str += this.value[i];
      }
    }

    return str;
  }

  trimEnd() {
    let stopIdx = null;
    for (let i = this.value.length - 1; i >= 0; i--) {
      if (this.value[i] !== " ") {
        stopIdx = i;
        break;
      }
    }

    let str = "";
    for (let i = 0; i <= stopIdx; i++) {
      str += this.value[i];
    }

    return str;
  }

  trim() {
    let str = new MyString(this.value).trimStart();
    str = new MyString(str).trimEnd();
    return str;
  }

  toUpperCase() {
    let str = "";
    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i] >= "a" && this.value[i] <= "z") {
        const unicode = this.value[i].charCodeAt();
        const lowerUnicode = unicode - 32;
        str += String.fromCharCode(lowerUnicode);
      } else {
        str += this.value[i];
      }
    }

    return str;
  }

  toLowerCase() {
    let str = "";
    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i] >= "A" && this.value[i] <= "Z") {
        const unicode = this.value[i].charCodeAt();
        const upperUnicode = unicode + 32;
        str += String.fromCharCode(upperUnicode);
      } else {
        str += this.value[i];
      }
    }

    return str;
  }

  startsWith(target, fromIndex = 0) {
    let targetIdx = 0;

    for (let i = fromIndex; i < this.value.length; i++) {
      if (target[targetIdx] !== this.value[i]) {
        return false;
      }
      targetIdx++;

      if (targetIdx === target.length) {
        return true;
      }
    }

    return false;
  }

  endsWith(target, length = this.value.length) {
    let targetIdx = target.length - 1;

    for (let i = length - 1; i >= 0; i--) {
      if (target[targetIdx] !== this.value[i]) {
        return false;
      }
      targetIdx--;

      if (targetIdx === -1) {
        return true;
      }
    }

    return false;
  }
}
