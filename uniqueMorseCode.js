function uniqueMorseCode(arr){
  arr = arr.map(item => {
    return convertToMorse(item);
  })
  let sets = new Set([...arr])
  return sets.size;
}

function convertToMorse(str){
  let res = '';
  for(let i = 0 ; i < str.length ; i++){
    res += mapping[str[i]];
  }
  return res;
}

let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

let mapping = morse.reduce((acc,curr,i) => {
  let letter = String.fromCharCode(97 + i);
  acc[letter] = curr;
  return acc;
}, {})
  
uniqueMorseCode(["gin", "zen", "gig", "msg"]); // 2 

/* ==================================================

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
 

Note:

The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
words[i] will only consist of lowercase letters.

// i // arr // strings to be converted to morse 
// o // num // number of unique morse code combinations 
// c // --- 
// e // --- 

The Strategy: 
First we want to create the relationship between letters and morse code 
Afterward we can create a helper function to translate words to concatenated 
  morse code combinations 
We can then map our words into their morse strings 
Finaly we can create a set from these strings and return its' size

*/
