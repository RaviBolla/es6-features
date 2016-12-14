function f() {

  f1();

  function f1() {
    console.log(x);
    console.log(y);
    let y = 10;
  }
  let x = 20;
  f1();
}
f();