const cashUnits = require('./cash-units');
const testCases = require('./test-cases');

testCases.forEach(({ input, expected }) => {
  try {
    const output = cashUnits(input);

    const outputKeys = Object.keys(output);
    const expectedOutput = expected.output;
    const expectedKeys = Object.keys(expectedOutput);
    const errs = [];
    if(outputKeys.length !== expectedKeys.length){
      errs.push(`Input: ${input} Output and expected have diferent # keys`);

    }
    for(key in expectedOutput){
      if(expectedOutput[key] !== output[key]){
        errs.push(`Input: ${input} discrepancy on key: ${key}`);
      }
    }
    if(errs.length){
      console.error(...errs, output, expectedOutput);
    } else {
      console.log(`Test passed for input ${input}`);
    }
  }
  catch (err) {
    if(err.message === expected.error){
      console.log(`Test passed for input ${input}`);
    } else {
      console.error(`Input: ${input}`, err);
    }
  }
});
