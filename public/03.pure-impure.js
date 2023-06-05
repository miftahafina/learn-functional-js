// pure
// easy to test and predict
// rule: only works with internal data
function add(x, y) {
  return x + y;
}

console.log(add(1,3));
console.log(add(1,3));


// impure
function add2(x,y) {
  console.log(x+y); // external funct, observable side effect
  return x + y;
}

console.log(add2(1,3));
console.log(add2(1,3));