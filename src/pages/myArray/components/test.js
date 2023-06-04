const terminal = document.querySelector(".terminal");
const startBtn = document.querySelector(".execution button:first-of-type");
const resetBtn = document.querySelector(".execution button:last-of-type");
const console = document.querySelector(".console");
function MyArray() {
  var values =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  this.values = values;
}
MyArray.of = function () {
  for (
    var _len2 = arguments.length, items = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    items[_key2] = arguments[_key2];
  }
  return new MyArray(items);
};
MyArray.isArray = function (obj) {
  if (obj === null || obj === undefined) return false;
  return Object.getPrototypeOf(obj) === Array.prototype;
};
MyArray.from = function (arrayLike) {
  var mapFtn =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : function (v) {
          return v;
        };
  var arr = new MyArray();
  for (var i = 0; i < arrayLike.length; i++) {
    arr.push(mapFtn(arrayLike[i], i));
  }
  return arr;
};
MyArray.prototype.push = function () {
  var idx = this.values.length - 1;
  for (var i = 0; i < arguments.length; i++) {
    this.values[++idx] =
      i < 0 || arguments.length <= i ? undefined : arguments[i];
  }
  return this.values.length;
};
MyArray.prototype.pop = function () {
  if (this.values.length === 0) return undefined;
  var removedElement = this.values[this.values.length - 1];
  var arr = [];
  for (var i = 0; i < this.values.length - 1; i++) {
    arr[i] = this.values[i];
  }
  this.values = arr;
  return removedElement;
};
MyArray.prototype.unshift = function () {
  for (
    var _len = arguments.length, items = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    items[_key] = arguments[_key];
  }
  var idx = items.length - 1;
  for (var i = 0; i < this.values.length; i++) {
    items[++idx] = this.values[i];
  }
  this.values = items;
  return this.values.length;
};
MyArray.prototype.shift = function () {
  if (this.values.length === 0) return undefined;
  var removedElement = this.values[0];
  var arr = [];
  for (var i = 1; i < this.values.length; i++) {
    arr[i - 1] = this.values[i];
  }
  this.values = arr;
  return removedElement;
};
MyArray.prototype.concat = function (items) {
  var arr = new MyArray();
  for (var i = 0; i < this.values.length; i++) {
    arr.push(this.values[i]);
  }
  for (var _i = 0; _i < items.length; _i++) {
    arr.push(items[_i]);
  }
  return arr;
};
MyArray.prototype.slice = function () {
  var begin =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var end =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : this.values.length;
  if (begin < 0) {
    begin = this.values.length + begin;
  }
  if (end < 0) {
    end = this.values.length + end;
  }
  var arr = new MyArray();
  for (var i = begin; i < Math.min(end, this.values.length); i++) {
    arr.push(this.values[i]);
  }
  return arr.values;
};
MyArray.prototype.join = function () {
  var separator =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ",";
  if (this.values.length === 0) return "";
  var str = "";
  for (var i = 0; i < this.values.length - 1; i++) {
    str += this.values[i] + separator;
  }
  str += this.values[i];
  return str;
};
MyArray.prototype.fill = function (value) {
  var start =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : this.values.length;
  if (start < 0) {
    start = this.values.length + start;
  }
  if (end < 0) {
    end = this.values.length + end;
  }
  for (var i = start; i < Math.min(end, this.values.length); i++) {
    this.values[i] = value;
  }
  return this.values;
};
MyArray.prototype.includes = function (target) {
  for (var i = 0; i < this.values.length; i++) {
    if (this.values[i] === target) {
      return true;
    }
  }
  return false;
};
MyArray.prototype.flat = function () {
  var depth =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var res = new MyArray();
  function recursion(depth, arr) {
    if (depth === 0) {
      for (var i = 0; i < arr.length; i++) {
        res.push(arr[i]);
      }
      return;
    }
    for (var _i2 = 0; _i2 < arr.length; _i2++) {
      if (Object.getPrototypeOf(arr[_i2]) === Array.prototype) {
        recursion(depth - 1, arr[_i2]);
      } else {
        res.push(arr[_i2]);
      }
    }
  }
  recursion(depth, this.values);
  return res.values;
};
MyArray.prototype.forEach = function (callback) {
  for (var i = 0; i < this.values.length; i++) {
    callback(this.values[i], i, this.values);
  }
};
MyArray.prototype.map = function (callback) {
  var arr = new MyArray();
  for (var i = 0; i < this.values.length; i++) {
    arr.push(callback(this.values[i], i, this.values));
  }
  return arr.values;
};
MyArray.prototype.filter = function (callback) {
  var arr = new MyArray();
  for (var i = 0; i < this.values.length; i++) {
    if (callback(this.values[i], i, this.values)) {
      arr.push(this.values[i]);
    }
  }
  return arr.values;
};
MyArray.prototype.reduce = function (callback, initialValue) {
  var acc = initialValue;
  var startIdx = 0;
  if (!initialValue) {
    acc = this.values[0];
    startIdx = 1;
  }
  for (var i = startIdx; i < this.values.length; i++) {
    acc = callback(acc, this.values[i], i, this.values);
  }
  return acc;
};
MyArray.prototype.find = function (callback) {
  for (var i = 0; i < this.values.length; i++) {
    if (callback(this.values[i], i, this.values)) {
      return this.values[i];
    }
  }
  return undefined;
};
MyArray.prototype.findIndex = function (callback) {
  for (var i = 0; i < this.values.length; i++) {
    if (callback(this.values[i], i, this.values)) {
      return i;
    }
  }
  return -1;
};
MyArray.prototype.some = function (callback) {
  for (var i = 0; i < this.values.length; i++) {
    if (callback(this.values[i], i, this.values)) {
      return true;
    }
  }
  return false;
};
MyArray.prototype.every = function (callback) {
  for (var i = 0; i < this.values.length; i++) {
    if (!callback(this.values[i], i, this.values)) {
      return false;
    }
  }
  return true;
};
console.log = function format(value) {
  // console.log의 인자 type이 undefined인 경우
  if (value === undefined) {
    console.innerHTML += "undefined" + "\\n";
    return;
  }

  // console.log의 인자 type이 null인 경우
  if (value === null) {
    console.innerHTML += "null" + "\\n";
    return;
  }

  // console.log의 인자 type이 array 경우
  // [1,2,3] -> [1, 2, 3]
  if (Object.getPrototypeOf(value) === Array.prototype) {
    console.innerHTML += JSON.stringify(value).replaceAll(",", ", ") + "\\n";
    return;
  }

  // console.log의 인자 type이 MyArray 경우
  // if (Object.getPrototypeOf(value) === MyArray.prototype) {
  //   console.innerHTML +=
  //     modifyCommaPosition(
  //       makeArrayTypeStringAndDividedByComma("", value.values)
  //     ) + "\\n";
  //   return;
  // }

  // // console.log의 인자 type이 string 경우
  // if (Object.getPrototypeOf(value) === String.prototype) {
  //   console.innerHTML += modifyResultOfString(value) + "\\n";
  //   return;
  // }

  // 기타
  console.innerHTML += value + "\\n";
};
const words = new MyArray([
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
]);

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
