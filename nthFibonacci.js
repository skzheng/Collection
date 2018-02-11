function nthFibonacci(n){
  if(n < 2){
    return n;
  }
  return nthFibonacci(n-2) + nthFibonacci(n-1);
}

nthFibonacci(3); // 2
nthFibonacci(5); // 5

