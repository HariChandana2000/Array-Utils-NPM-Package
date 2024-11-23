// index.js

Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0);
};

Array.prototype.unique = function () {
  return [...new Set(this)];
};

Array.prototype.average = function () {
  return this.sum() / this.length;
};

Array.prototype.max = function () {
  return Math.max(...this);
};

Array.prototype.min = function () {
  return Math.min(...this);
};

Array.prototype.chunk = function (size) {
  const result = [];
  for (let i = 0; i < this.length; i += size) {
    result.push(this.slice(i, i + size));
  }
  return result;
};

Array.prototype.flatten = function () {
  return this.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? val.flatten() : val),
    []
  );
};

Array.prototype.without = function (...values) {
  return this.filter((val) => !values.includes(val));
};

Array.prototype.intersection = function (array) {
  return this.filter((val) => array.includes(val));
};

Array.prototype.difference = function (array) {
  return this.filter((val) => !array.includes(val));
};

module.exports = Array;
