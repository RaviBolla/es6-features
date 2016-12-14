var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} rupees?`;
console.log(message);


//function call & raw

function get(strings, ...params) {
  console.log(strings);
  console.log(strings.raw);
  return strings[0] + params[0] + strings[1] + params[1];
}
let bar = 3, baz = 4, foo = 8;
get`http://example.com/foo?bar=${foo + bar}&quux=${baz}`;






