var vals = [];

{
  for (var x = 0; x < 3; x++) {
    vals.push(function () {
      return x;
    });
  }
}

var x;
console.log(vals[0]());
console.log(vals[1]());
console.log(vals[2]());