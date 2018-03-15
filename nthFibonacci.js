function nthFibonacci(n){
  if(n < 2){
    return n;
  }
  return nthFibonacci(n-2) + nthFibonacci(n-1);
}

const nthFibonacciCached = ((n) => {
  let cache = {};
  return (n) => {
    let res;
    
    // console.log(cache) // Checking cache items
    
    if(cache[n]) {
      return cache[n]
    } else {
      if(n < 2) {
        res = n;
      }
      else {
        res = nthFibonacciCached(n- 1) + nthFibonacciCached(n-2);
      }
      cache[n] = res;
      return res;
    }
  }
})();

nthFibonacci(3); // 2
nthFibonacci(5); // 5

