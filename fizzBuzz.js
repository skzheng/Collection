function fizzBuzz(n){
  let arr = new Array(n);
  for(let i = 0 ; i < arr.length ; i++){
    let count = i + 1;
    arr[i] = (count % 5 === 0) ? 
      (count % 3 === 0) ? 'FizzBuzz': 'Buzz'
    : (count % 3 === 0) ? 'Fizz' : (count + '') 
  }
  return arr;
}

fizzBuzz(15)

/*

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

*/
