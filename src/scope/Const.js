const val = 5;

const val1 = 10;
val1 = 20;

const val2;
val1 = 30;




const obj = {x: 3};
obj.x = 4;
obj.y = 5;

console.log(obj);


Object.seal(obj);
obj.z = 10;
obj.y = 20;
console.log(obj);

Object.freeze(obj);
obj.newx = 10;
obj.y = 20;
console.log(obj);
