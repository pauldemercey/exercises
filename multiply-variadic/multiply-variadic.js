const multiply = function(){
  const args = arguments;

  let product = 1;

  if(args && args.length) {
    const len = args.length;
    for(let i=0;i<len;i++){
      product *= args[i];
    }
  } else {
    return 0;
  }

  return function() {
    const args = arguments;
    if(!args) return product;

    const len = args.length;
    if (!len) return product;

    const list = [product];
    for(let i=0;i<len;i++){
      list.push(args[i]);
    }
    return multiply(...list);
  }

}

module.exports = multiply;
