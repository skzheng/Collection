function judgeCircle(string){
  let horizontal = 0;
  let vertical = 0;
  for(let i = 0 ; i < string.length; i++){
    if(string[i] === 'U'){
      vertical++;
    } else if(string[i] === 'D'){
      vertical--;
    } else if(string[i] === 'L'){
      horizontal--;
    } else if(string[i] === 'R'){
      horizontal++
    }
  }
  console.log(horizontal, vertical)
  return (horizontal === 0) && (vertical === 0);
}
judgeCircle("RLUURDDDLU")

/*

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/
