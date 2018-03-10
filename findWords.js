function findWords(arr){
  let store = [];
  for(let i = 0 ; i < arr.length ; i++){
    if(checkWords(arr[i])){
      store.push(arr[i]);
    }
  }
  return store;
}

let board = [
  'qwertyuiop',
  'asdfghjkl',
  'zxcvbnm'
]

function checkWords(word){
  let row = board.filter(item => {
    return item.includes(word[0].toLowerCase());
  })
  let wordArr = word.toLowerCase().split('');
  return wordArr.every(function(letter) {
    return row[0].includes(letter);
  })
}

checkWords('afcaska')

/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
*/
