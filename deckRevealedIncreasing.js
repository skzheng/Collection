function deckRevealedIncreasing(deck) {
  let sorted = deck.sort((a,b) => a - b);
  let a = Array(deck.length);
  let skip = false;
  while (sorted.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === undefined) {
        if (!skip) {
          a[i] = sorted.shift();
        }
        skip = !skip;
      }
    }
  }
  return a;
}
 
deckRevealedIncreasing([17,13,11,2,3,5,7]);

/*
https://leetcode.com/problems/reveal-cards-in-increasing-order/

We receive a deck of cards, numbered and in random order
Our operations are 
  1) Take top of deck and reveal
  2) Take top of deck, move to bottom
  3) Repeat 1 & 2
We want to order the deck in a way that lets us reveal cards in increasing order. 

Sort array to get correct order for output
Create array 'template' for new array
Keep a variable for alternating operations
Iterate over this array, alternating between indices
We can slowly shift off our ordered array
Return array
*/
