function canWinNim(n){
  return n % 4 !== 0;
}

canWinNim(4); // false;

/*
You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.

// i // num // number of stones in the game
// o // boolean // true or false, to see if we can win
// c // ---
// e // ---

In our game of nim, we want to be the one to grab the last stone. This means that we want to get to the number 4 on our opponents last turn. 
Or maximum amount taken + 1.
To backtrack from 4, we can get there from anywhere from 5 - 7. Or basically any multiple of 4. Otherwise we are in a position to lose the game. If each player plays optimally, we are both trying to get our opponent to land on a multiple of 4. Since we start first, we can always win the game unless we started with a multiple of 4. Although the reasoning process seems difficult, our solution is just a multiple checker.  

*/
