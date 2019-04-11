const stringToFloat = require('./string-to-float');


[
  {input: "12345.099842", expected: 12345.099842},
  {input: ".099842", expected: 0.099842},
  {input: "-.1", expected: -0.1},
  {input: "12345", expected: 12345},
  {input: "0001.2000", expected: 1.2},
  {input: "0001.9999", expected: 1.9999},
  {input: "0.0", expected: 0},
  {input: "-0.5", expected: -0.5},
  {input: "Infinity", expected: Number.NaN}
].forEach(({ input, expected }) => {
  if(isNaN(expected)){
    console.assert(isNaN(stringToFloat(input)), expected, input);
  } else {
      console.assert(expected === stringToFloat(input), expected, input);
  }
});
