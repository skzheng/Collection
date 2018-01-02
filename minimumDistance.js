function distance(sentence, wordA, wordB){
  let aInd, bInd, minDist = Infinity;
  let arr = sentence.split(' ');
  for (let i = 0 ; i < arr.length ; i++){
    if(arr[i] === wordA){
      aInd = i;
    }
    if(arr[i] === wordB){
      bInd = i;
    }
    if( Math.abs( aInd - bInd) < minDist){
      minDist = Math.abs(aInd-bInd);
    }
  }
  return minDist !== Infinity ? minDist : "Word not found";
}

distance("the cat in the hat", "cat", "the"); // 1
distance("the cat in the hat", "cat", "hat"); // 3
distance("the cat in the hat", "the", "za"); // Word not found

/* ===================================
Given a string (sentence) of space separated words, find the minimum distance between two words A and B.

// i // string, string2 , string3 // string of words , word A , word B
// o // num // minimum distance between A and B 
// c // ---
// e // Assuming we return "Word not found" if either A or B don't exist in sentence string

The Strategy: 
Keep counters on current index of last seen wordA or wordB, as well as minDist based on these values
Create array of all words in sentence string
Iterate through arr
  If word A or word B appears...
    TRUE: Update Index variables
    ELSE: Continue through array
  If current distance b/t word A and word B is less than previous minDist...
    TRUE: Update minDist
    ELSE: Do not update minDist
Return minDist if words were found in the sentence
*/
