const units = [
 500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01
];

const intUnits = units.map((unit) => 100*unit );

module.exports = (data) => {
  if(typeof data !== 'number'){
    throw new TypeError("Number expected");
  }
  if(data < 0){
    throw new Error("Positive number expected");
  }
  if( (100*data)%1 !== 0  ){
    throw new Error("Invalid Input");
  }

  const output = {};
  let remainder = 100*data;
  intUnits.forEach((unit, index) => {
    if(remainder < unit) return;
    output[String(units[index])] = Math.floor(remainder/unit);
    remainder %= unit;
  });

  return output;
}
