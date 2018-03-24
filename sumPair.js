const sumPairs = (arr , val) => {
  let hash = {};
  for (let i = 0 ; i < arr.length ; i ++){
    if(hash[val - arr[i]]){
      return [val - arr[i], arr[i]]
    } else {
      hash[arr[i]] = true;
    }
  }
}

//====================================================================

/*
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

// i // arr, num // ARRAY of numbers that may pair to sum VAL
// o // arr // first occurrence of a pair of numbers that sums to val
// c // Lowest time complexity ( time out )
// e // negative nums + duplicates

/*
The Strategy: 

Keep an open record of values passed through in the array. 
We can do this by creating a hash object to store values,
  these values can be set to hash[ current value ]
  now as we continue to iterate through the array, 
  we can search for hash [ val - current value],
  in hopes of finding the complement to the value
IF we find a pair that has been completed, we can return that pair.
else we let the function run.

*/
