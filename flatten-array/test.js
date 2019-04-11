const flatten = require('./flatten');

const cases = [
  {
    input: [[,1], [2], 0, 3],
    expected: [,1,2,0,3],
  }, {
    input: [1, 2, 3],
    expected: [1, 2, 3],
  }, {
    input: [1, [2], [[3]], [4, [5, 6], [7, 8, [9]]]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }
];


cases.forEach( ({input, expected}) => {
  const testValue = flatten(input);
  const isArray = Array.isArray(testValue);
  console.assert(isArray, input, testValue,
    'not an array');

  if(isArray) {
    console.assert(expected.length === testValue.length, expected, testValue,
      'length discrepancy');
    testValue.forEach( (val, index) => {
      console.assert(val === expected[index], val, expected[index], input);
    });
  }
});
