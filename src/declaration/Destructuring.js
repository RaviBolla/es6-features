//array
var list = [ 1, 2, 3 ];
var [ a, , b ] = list;
 console.log(a);
console.log(b);

//object
function getPerson() {return {name: 'mario', age: 25} };
let { name, age: ageInYears } = getPerson();
console.log(name);
console.log(ageInYears);

//nested objects
var poets = [ {
    name: 'p1',
    works: [{
      title: 't1',
      date: 'd1'
    }, {
      title: 't2',
      date: 'd2'
    }]
}, {
    name: 'p2',
    works: [{
      title: 't3',
      date: 'd3'
    }]
}];

let [{name: author, works: [,{title, date}]}] = poets;
console.log(author, ' ', title, ' ', date);


//parameter context matching
function f ([ name, val ]) {
  console.log(name, val)
}
function g ({ name: n, val: v }) {
  console.log(n, v)
}
function h ({ name, val }) {
  console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })


//fail soft
var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3] = list
console.log(a, b, c);


//array comprehensions
function square(n) {
  return n * n;
}
var arr = [ for (x of [1,2,3]) square(x) ];
console.log(arr);