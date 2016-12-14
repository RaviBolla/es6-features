//default
function f1(x, y = 4, z = 6) {
  return x + y + z
}

console.log(f1(1));
console.log(f1(1, 3));


//Rest
function f2(x, y, ...a) {
  console.log(a);
  return (x + y) * a.length;
}
console.log(f2(1, 2, "hello", true, 7));

//Spread
var params = [ "hello", true, 7 ];
var other = [ 1, 2, ...params ]
console.log(other);

var str = "foo";
var chars = [ ...str ];
console.log(chars);

var values = [1, 2, 3];
function sum(a, b, c) {
  return a+b+c;
}
console.log(sum(...values));