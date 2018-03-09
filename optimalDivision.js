function optimalDivision(arr){
  if(arr.length > 2){
    arr[1] = '(' + arr[1];
    arr[arr.length-1] = arr[arr.length-1] + ')';
  }
  return arr.join('/');
}

optimalDivision([1000,100,10,2])

/*
Given a list of positive integers, the adjacent integers will perform the float division. For example, [2,3,4] -> 2 / 3 / 4.

However, you can add any number of parenthesis at any position to change the priority of operations. You should find out how to add parenthesis to get the maximum result, and return the corresponding expression in string format. Your expression should NOT contain redundant parenthesis.

Example:
Input: [1000,100,10,2]
Output: "1000/(100/10/2)"
Explanation:
1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in "1000/((100/10)/2)" are redundant, 
since they don't influence the operation priority. So you should return "1000/(100/10/2)". 

Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2
Note:

The length of the input array is [1, 10].
Elements in the given array will be in range [2, 1000].
There is only one optimal division for each test case.

// i // arr // array of numbers
// o // str // string rep. of operation with parens
// c // 
// e //

The Strategy: 

We are creating an operation with numbers starting left and going right.
We want the largest numbers on the left to be divided by the smallest possible combination of numbers on the right.


*/
