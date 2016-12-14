
function f() {

  if(true) {
    var x = 10;
    let y = 20;



    var x = 20;
  }
  console.log(x);
  console.log(y);

}

f();




function f1 (vip) {
  var x = 0;
  if (true) {
    let x = 1;
  }
  {
    let x = 100;
    {
      let x = 1000;
    }
  }
  console.log(x);
}

f1();
