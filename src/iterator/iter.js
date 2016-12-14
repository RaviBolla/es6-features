var arr = [1,2,3];

for(var i in arr) {
  console.log(i);
}

for(let val of arr) {
  console.log(val);
}

let itr = arr[Symbol.iterator]();
itr.next();
itr.next();
itr.next();
itr.next();
itr.next();


function get(n) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          return {
            done: (i > n) ? true : false,
            value: i++
          };
        }
      };
    }
  };
}

for(let n of gen(10)) {
  console.log(n);
}