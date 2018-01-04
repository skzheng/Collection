function breakingRecords(arr){
  let high = arr[0],
      low = arr[0],
      highCounter = 0,
      lowCounter = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > high){
      highCounter++;
      high = arr[i];
    }
    if(arr[i] < low){
      lowCounter++;
      low = arr[i];
    }
  }
  return [highCounter,lowCounter];
}

breakingRecords([10,5,20,20,4,5,2,25,1]) // [2,4]

/* =======================================
Given Maria's array of scores for a season of n games, find and print the number of times she breaks her record for most and least points scored during the season.

// i // array // collection of num scores throughout season
// o // array // pair of numbers depicting how many times HighScore & LowScore were broken
// c // ---
// e // ---


The Strategy: 
Create counter for highs and lows
Create record for current high and current low (starting with first value for reference)
Iterate through the array 
  Check whether current value is greater than high OR lower than low
    TRUE : Increment respective counter and set new current record
    FALSE: Continue 
Return highCounter and lowCounter
*/
