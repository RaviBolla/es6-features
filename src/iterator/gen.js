function* range () {
    yield 1;
    yield 2;
    yield 3;
}

for (let i of range()) {
  console.log(i);
}