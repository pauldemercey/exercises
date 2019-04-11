module.exports = (s1,s2) => {

  const digits1 = s1.split('')
    .map(Number).reverse();

  const digits2 = s2.split('')
    .map(Number).reverse();

  const len1 = digits1.length;
  const len2 = digits2.length;

  const rows = digits2.map((v2, idx2) => {
    let row = new Array(len1);
    let ten = 0;

    digits1.forEach((v1,idx1) => {
      const product = (v1*v2)+ten;
      const unit = product%10;
      ten = (product-unit)/10;
      row[idx1] = unit;
    });

    if(ten) row.push(ten);

    return row;
  });

  let output='';
  let tens=0;

  for(let i=0;i<len1+len2;i++) {
    let summ = tens;
    rows.forEach((row, idx) => {
      let position = i-idx;
      if(!(position in row)) return;
      summ += row[position];
    });

    let unit = summ%10;
    tens = (summ-unit)/10;
    output = `${unit}${output}`;
  }

  return output;
};



