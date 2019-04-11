const multiply = require('./multiply');

const cases = [{
    input: ["9", "9"],
    expected: "81"
  },
  {
    input: ["55", "3333333"],
    expected: "183333315"
  },
  {
    input: ["5", "5".repeat(100)],
    expected: `2${'7'.repeat(99)}5`
  },
];

cases.forEach( ({input, expected}) => {
  const output = multiply(...input);
  console.assert(
    output === expected,
    `Fail: input:"${input}", output:"${output}", expected:"${expected}"`
    );
});
