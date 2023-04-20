const prevResults = [];
function fibonacci(n) {
  if (prevResults[n] != null){
    return prevResults[n];
  }
  if (n < 2)
    return n;
  let result = fibonacci(n - 1) + fibonacci(n - 2);
  prevResults[n] = result;
  return result;
}

console.log(fibonacci(6));
console.log(fibonacci(48));
console.log(fibonacci(1203));