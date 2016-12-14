
//property
let x =5, y=4, cat="tom";
let obj = { x, y, cat };
console.log(obj);

//method
let obj1 = { f() { console.log("hi");}}
obj1.f();

let qNo = 10, ans = "a";

let obj2 = {
  ['question' + qNo]: 'Question: ' + qNo,
  ['answer' + qNo]() {
      return ans;
    }
};

console.log(obj2.question10);
console.log(obj2.answer10());


