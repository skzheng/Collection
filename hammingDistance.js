function hammingDistance(x,y){
  let bitX = toBit(x);
  let bitY = toBit(y);
  let count = 0;
  for(let i = 0 ; i < bitX.length ; i++){
    if(bitX[i] !== bitY[i]){
      count++;
    }
  }
  return count;
}

function toBit(val){
  let res = ""
  for(let i = 31; i >= 0 ; i--){
    if(val - Math.pow(2,i) >= 0){
      val -= Math.pow(2,i);
      res += '1'
    } else {
      res += '0'
    }
  }
  return res;
}


/*

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different

Better solution using XOR|


*/
