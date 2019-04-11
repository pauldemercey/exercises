const stringToFloat = (entry = "") => {
  const match = entry.match(/^(\+|-)?(\d*)(\.\d+)?$/);
  if(!match) return Number.NaN;

  let [all, sign, left, right] = match;
  const coeff = sign ? {"+": 1, "-": -1}[sign] : 1;
  left = left || "0";
  right = right ? right.slice(1): "0";
  const summ = parseInt(left) + right.split("").reduce(
    (memo, item, index) => {
      memo += parseInt(item) * Math.pow(10, -index-1);
      return memo;
    }, 0);
   return summ * coeff;
};


module.exports = stringToFloat;
