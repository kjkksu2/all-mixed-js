/*
    Array.prototype.sort (x)  
*/

const MyArrayString = `class MyArray {
  constructor(values = []) {
    this.values = values;
  }

  static of(...items) {
    return new MyArray(items);
  }

  static isArray(obj) {
    if (obj === null || obj === undefined) return false;

    return Object.getPrototypeOf(obj) === Array.prototype;
  }

  static from(arrayLike, mapFtn = (v) => v) {
    const arr = new MyArray();

    for (let i = 0; i < arrayLike.length; i++) {
      arr.push(mapFtn(arrayLike[i], i));
    }

    return arr;
  }

  push(...items) {
    let idx = this.values.length - 1;
    for (const v of items) {
      this.values[++idx] = v;
    }

    return this.values.length;
  }

  pop() {
    if (this.values.length === 0) return undefined;

    const removedElement = this.values[this.values.length - 1];
    const arr = [];
    for (let i = 0; i < this.values.length - 1; i++) {
      arr[i] = this.values[i];
    }
    this.values = arr;

    return removedElement;
  }

  unshift(...items) {
    let idx = items.length - 1;
    for (const v of this.values) {
      items[++idx] = v;
    }
    this.values = items;

    return this.values.length;
  }

  shift() {
    if (this.values.length === 0) return undefined;

    const removedElement = this.values[0];
    const arr = [];
    for (let i = 1; i < this.values.length; i++) {
      arr[i - 1] = this.values[i];
    }
    this.values = arr;

    return removedElement;
  }

  concat(items) {
    const arr = new MyArray();
    arr.push(...this.values, ...items);
    return arr;
  }

  slice(begin = 0, end = this.values.length) {
    if (begin < 0) {
      begin = this.values.length + begin;
    }
    if (end < 0) {
      end = this.values.length + end;
    }

    const arr = new MyArray();
    for (let i = begin; i < Math.min(end, this.values.length); i++) {
      arr.push(this.values[i]);
    }

    return arr.values;
  }

  join(separator = ",") {
    if (this.values.length === 0) return "";

    let str = "";
    for (var i = 0; i < this.values.length - 1; i++) {
      str += this.values[i] + separator;
    }
    str += this.values[i];

    return str;
  }

  fill(value, start = 0, end = this.values.length) {
    if (start < 0) {
      start = this.values.length + start;
    }
    if (end < 0) {
      end = this.values.length + end;
    }

    for (let i = start; i < Math.min(end, this.values.length); i++) {
      this.values[i] = value;
    }

    return this.values;
  }

  includes(target) {
    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i] === target) {
        return true;
      }
    }
    return false;
  }

  flat(depth = 1) {
    const res = new MyArray();

    function recursion(depth, arr) {
      if (depth === 0) {
        res.push(...arr);
        return;
      }

      for (const v of arr) {
        if (Object.getPrototypeOf(v) === Array.prototype) {
          recursion(depth - 1, v);
        } else {
          res.push(v);
        }
      }
    }
    recursion(depth, this.values);

    return res.values;
  }

  forEach(callback) {
    for (let i = 0; i < this.values.length; i++) {
      callback(this.values[i], i, this.values);
    }
  }

  map(callback) {
    const arr = new MyArray();

    for (let i = 0; i < this.values.length; i++) {
      arr.push(callback(this.values[i], i, this.values));
    }

    return arr.values;
  }

  filter(callback) {
    const arr = new MyArray();

    for (let i = 0; i < this.values.length; i++) {
      if (callback(this.values[i], i, this.values)) {
        arr.push(this.values[i]);
      }
    }

    return arr.values;
  }

  reduce(callback, initialValue) {
    let acc = initialValue;
    let startIdx = 0;
    if (!initialValue) {
      acc = this.values[0];
      startIdx = 1;
    }

    for (let i = startIdx; i < this.values.length; i++) {
      acc = callback(acc, this.values[i], i, this.values);
    }

    return acc;
  }

  find(callback) {
    for (let i = 0; i < this.values.length; i++) {
      if (callback(this.values[i], i, this.values)) {
        return this.values[i];
      }
    }

    return undefined;
  }

  findIndex(callback) {
    for (let i = 0; i < this.values.length; i++) {
      if (callback(this.values[i], i, this.values)) {
        return i;
      }
    }

    return -1;
  }

  some(callback) {
    for (let i = 0; i < this.values.length; i++) {
      if (callback(this.values[i], i, this.values)) {
        return true;
      }
    }

    return false;
  }

  every(callback) {
    for (let i = 0; i < this.values.length; i++) {
      if (!callback(this.values[i], i, this.values)) {
        return false;
      }
    }

    return true;
  }
}`;

export default MyArrayString;
