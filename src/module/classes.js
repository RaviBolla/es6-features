class A {
  get x() {
    return this.val;
  }
  set x(val) {
    this.val = val;
  }
}

let ab = new A();
ab.x = 10;
console.log(ab.x);