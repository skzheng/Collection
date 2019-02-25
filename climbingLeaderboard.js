function climbingLeaderboard(scores, alice) {
  let places = [];
  let ranks = Array.from(new Set([...scores]));
  for (let i = 0 ; i < alice.length ; i++) {
    for (let j = places[places.length-1] || ranks.length - 1; j >= 0 ; j--) {
      if (ranks[j] > alice[i]) {
        places.push(j + 2);
        break;
      } else if (ranks[j] === alice[i]) {
        places.push(j + 1);
        break;
      } 
    } 
    if (places[i] === undefined) {
      places.push(1)
    }
  }
  return places;
}
climbingLeaderboard([100,100,50,40,40,20,10], [5,25,50,120]);
climbingLeaderboard([100,90,90,80,75,60], [50,65,77,90,102]);


/*

https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

// i // arr, arr // scores array + alices scores
// o // arr // alice's placings
// c // (prone to timeout)
// e // ---

We want a set of unique scores because we are using dense ranking
Iterating through Alice's scores from lowest to highest, we can find a fitting inside scores
To decrease time complexity we keep a marker (last inserted place) to continue where we left off (because each score in ascending order)
Return places!

*/
