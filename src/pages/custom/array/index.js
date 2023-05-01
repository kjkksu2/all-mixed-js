/*
Array.of
Array.from
Array.isArray

Array.prototype.push (o)
Array.prototype.pop (o)
Array.prototype.unshift (o)
Array.prototype.shift (o)
Array.prototype.concat (o)
Array.prototype.slice (o)
Array.prototype.join (o)
Array.prototype.fill (o)
Array.prototype.includes (o)
Array.prototype.flat (o)
Array.prototype.sort (x)
Array.prototype.forEach (o)
Array.prototype.map (o)
Array.prototype.filter (o)
Array.prototype.reduce (o)
Array.prototype.some
Array.prototype.every
Array.prototype.find
Array.prototype.findIndex
*/

class MyArray {
  constructor(values = []) {
    this.values = values;
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

  sort(compareFtn) {
    if (compareFtn === undefined) {
      [...this.values].sort();
      return;
    }

    function bubbleSort(arr, mode) {
      const res = [...arr];

      for (let i = 0; i < res.length; i++) {
        for (let j = i + 1; j < res.length; j++) {
          if (res[i] > res[j]) {
            const temp = res[i];
            res[i] = res[j];
            res[j] = temp;
          }
        }
      }

      return res;
    }

    for (let i = 0; i < this.values.length - 1; i++) {
      if (compareFtn(this.values[i], this.values[i + 1]) > 0) {
        bubbleSort(this.values, i, i + 1);
      }
    }
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
}
