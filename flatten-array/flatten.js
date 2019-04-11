const flatten = (input = [], output = []) => {
  const len = input.length;
  let index = output.length;
  for (let i = 0 ; i < len ; i++) {
    const value = input[i];
    if (Array.isArray(value)) {
      flatten(value, output);
      index = output.length;
    } else {
      output[index++] = value;
    }
  }
  return output;
};

module.exports = flatten;
