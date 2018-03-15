function primeChecker(num){
  if(num <= 1) {
    return 'Not prime'
  } else {
    return findFactors(num).length > 2 ? 'Not prime' : 'Prime';
  }
}

function findFactors(num){
  let factors = [];
  let root = Math.floor(Math.sqrt(num));
  for(let i = 0 ; i <= root ; i ++){
    if(num % i === 0){
      factors.push(i, num / i);
    }
  }
  return factors;
}

// findFactors(4)
primeChecker(23)
