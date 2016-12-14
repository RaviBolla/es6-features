let f = v => v + 1;

console.log(f(5));

f = v => ({ even: v, odd: v + 1 });
console.log(f(5));

f = () => 10;
console.log(f());

f = (v, i) => v+i;
console.log(f(4, 8));

f = v => {
  if(v%2 == 0)
    return v;
  else
    return v+1;
}

var a = {
  x: function() {return this.v},
  z: function() {return function() {return this.v;}},
  v: 3
};

console.log(a.z()());


//es6
var obj = {
  action: function(n) {alert(n +4);},
  handle: function() {
    document.addEventListener('click', e => this.action(5));
  }
}

//es5 - type1
var obj = {
  action: function(n) {alert(n +4);},
  handle: function() {
    var self = this;
    document.addEventListener('click', function(e) { self.action(5) });
  }
}


//  variant 2
var obj = {
  action: function(n) {alert(n +4);},
  handle: function() {
    document.addEventListener('click', function(e) { this.action(5)}.bind(this));
  }
}


//this.a = function(val) {alert(val)};
//<button onclick = () => { this.a(5);}/>



