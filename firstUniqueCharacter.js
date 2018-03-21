function firstUniqChar(s){
  let store = {};
  for(let i = 0 ; i < s.length ; i++){
    if(s[i] in store){
      store[s[i]] = undefined;
    } else {
      store[s[i]] = i;
    }
  }
  
  let sortedStore = Object.values(store).sort((a,b) => {
    return a - b;
  });
  
  return sortedStore[0] !== undefined ? sortedStore[0] : -1;
}

//Method 2 
function firstUniqChar(s){
  for(let i = 0 ; i < s.length ; i++){
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
}

firstUniqChar('leetcode'); // 0 
firstUniqChar('loveleetcode'); // 2
// firstUniqChar('')


/* ====================================

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

// i // str // string to check for first non-repeating Number
// o // num // index of first non-repeating number 
// c // --- 
// e // ---

The Strategy: 
We want to return the first unique character in a string 
We can keep track of each char in a hash, 
  If a char is repeated, we can set the hash value to undefined
  Else we can store the index to sort through later
Finally, we can check for the earliest index, otherwise we return -1 
*/
