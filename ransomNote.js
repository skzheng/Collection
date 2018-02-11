function ransomNote(arr1,arr2){
  let hash = arr1.reduce((acc,curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1; 
    return acc;
  }, {});
  // 
  for(let i = 0 ; i < arr2.length ; i++){
    if(hash[arr2[i]] && hash[arr2[i]] > 0){
      hash[arr2[i]]--;
    } else {
      return 'No';
    }
  }
  return 'Yes';
}

ransomNote(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']);
ransomNote(['two', 'times', 'three', 'is', 'not', 'four'],['two', 'times', 'two', 'is', 'four']);

/* ====================================

A kidnapper wrote a ransom note but is worried it will be traced back to him. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// i // arr1 , arr2 // two arrays filled with strings to be compared
// o // str // 'Yes' or 'No' depending on if the ransom note can be formed from arr1
// c // ---
// e // ---

The Strategy:
To create our ransom note, we need all strings in arr2 to exit in arr1
We can create a hash from our words in arr1 
We can then iterate through arr2 and check our hash for words
  If a word doesn't exist in our hash, we can return false;
*/
