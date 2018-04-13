def multiples(num):
  count = 0
  for i in range(num):
    if i % 3 == 0 or i % 5 == 0:
      count += i 
  return count
  
print(multiples(10))

/* ====================================================================

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below N.
// i // num // number to count up to
// o // num // sum of multiples of 3 or 5 up to N
// c // Natural numbers
// e // ---

Strategy :
Iterate from 0 to N
  Check if current number is a multiple of 3 or 5
    TRUE: Add to sum
    FALSE: Continue
Return sum
print(multiples(10)); // 23
print(multiples(100)); // 2318
print(multiples(1000)); // 233168
*/
