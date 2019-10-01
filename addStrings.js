function addStrings(num1, num2) {
  let [large, small] = num1.length > num2.length ? [num1.split('').reverse().join(''), num2.split('').reverse().join('')] : [num2.split('').reverse().join(''), num1.split('').reverse().join('')];
  let carry = 0;
  let sum = '';
  for (let i = 0 ; i < large.length ; i++) {
    let lval = parseInt(large[i], 10);
    let sval = small[i] !== undefined ? parseInt(small[i], 10) : 0;
    let rem = (carry + lval + sval) % 10;
    sum += rem;
    carry = Math.floor((carry + lval + sval) / 10);
  }
  if (carry) sum += carry;
  return sum.split('').reverse().join(''); 
}

addStrings('1', '9')
// parseInt(undefined,10) || true
