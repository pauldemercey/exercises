const multiply = require('./multiply-variadic');


console.assert(
  multiply() === 0, "Fail: multiply()"
);
console.assert(
  multiply(1)() === 1, "Fail: multiply(1)"
);
console.assert(
  multiply(5, 5, 10)() === 250, "Fail: multiply(5, 5, 10)"
);
console.assert(
  multiply(5, 5, 10)(2)(2)() === 1000, "multiply(5, 5, 10)(2)(2)()"
);
console.assert(
  multiply(2, 2)(2, 2)() === 16, "multiply(2, 2)(2, 2)()"
);
console.assert(
  multiply(2, 2)(2, 0)() === 0, "multiply(2, 2)(2, 0)()"
);
