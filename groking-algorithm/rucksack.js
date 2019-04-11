// filling a bag with a weight constraint

// n: name, w: weight, v: value
const data = [
  {n:'pajama',  w:2,  v:1},
  {n:'tbrush',  w:1,  v:5},
  {n:'shoes', w:12, v:5},
  {n:'sandals', w:4,  v:3},
  {n:'book',  w:1,  v:4},
  {n:'tshirt',  w:1,  v:1},
  {n:'shirt', w:2,  v:2},
  {n:'speaker', w:8,  v:3},
  {n:'creditcard',  w:1,  v:5},
  {n:'flower',  w:5,  v:1},
  {n:'gold',  w:12, v:22}
];

// max weight to fill the bag
const bagsLimit = [4, 6, 8, 12, 20, 30, 100];

const { minW } = data.reduce((m,i) => {
  if (i.w < m.minW) m.minW = i.w;
  return m;
},{
  minW: Infinity
});

const getV = (list) => {
  if(!list) return 0;

  return list.reduce((m, item) => {
    return m+item.v;
  }, 0);
}

const selectItems = (limit) => {
  const grid = new Array(data.length);

  data.forEach((item,idx) => {

    grid[idx] = new Array(limit-minW);

    for (let i=minW;i<=limit;i++) {
      const prev = (idx>0) ? grid[idx-1][i-minW]:null;
      if(item.w>i) {
        grid[idx][i-minW]=prev;
      continue;
      }
      const prevV = getV(prev);
      let current = [item];
      const freeSpace = i - item.w;
      if (freeSpace && idx>0) {
        const filler = grid[idx-1][freeSpace-minW];
        if(filler){
          current = current.concat(filler);
        }
      }
      const slot = getV(prev)<getV(current) ? current : prev;
      grid[idx][i-minW]=slot;
    }
  });

  const final = (grid.pop()).pop();

  console.log(
  '\nlimit ' + limit
  +' value ' + getV(final)
  + ' weight ' + final.reduce( (m, i) => m + i.w, 0 )
  );
  console.log(final.map(i => i.n).join(' '));
}

bagsLimit.forEach(selectItems);
