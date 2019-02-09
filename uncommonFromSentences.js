function uncommonFromSentences(strA, strB) {
  let combined = strA.split(" ").concat(strB.split(" "));
  let hash  = combined.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? ++acc[curr] : 1;
    return acc;
  }, {});
  return Object.keys(hash).filter(item => {
    return hash[item] === 1;
  })
}

// uncommonFromSentences('this apple is sweet apple', 'this apple is sour')
uncommonFromSentences("ini xm vp ea nhe xm nsc xfes vp xm xfes nsc k k x", "k nsc vp j nu nhe x pex nhe lskij nsc lskij nsc")

/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

// i // str, str // two strings to find uncommon words in. Uncommon words appear only once in one of the strings and not the other
// o // arr // list of all uncommon words
// c // ---
// e // ---

*/
