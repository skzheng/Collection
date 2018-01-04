let stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function maxProfit(prices){
  let greatestProfit = 0;
  let low = prices[0];
  for (let i  = 0 ; i < prices.length ; i++){
    if(prices[i] - low > greatestProfit){
      greatestProfit = prices[i] - low;
    }
    if(prices[i] < low){
      low = prices[i];
    }
  }
  return greatestProfit; 
}

maxProfit(stockPricesYesterday); // 6
/* ===========================

Write an efficcient function that takes stockPricesYesterday and returns the best
profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// i // array // numbers representing stock prices 
// o // num // amount of max profit that could have been made
// c // ---
// e // assume we have at least 2 prices to analyze

Strategy: 
As we progress through the array, we can only sell older values
This means that we need to keep track of the lowest value thus far, comparing with the greatest
  value to the right of this low
We can also keep track of the greatest difference so far based on these values
This way we can iterate through the array once only, with better time complexity

Pseudo: 
Create counter for max profit and lowest price thus far
Iterate through the array 
  If current price - lowest price is greater than max profit...
    TRUE: Set max profit to the difference
    FALSE: Continue
  Also If the current price is lower than lowest price ... 
    TRUE: Set low to current price
    FALSE: Continue
Return max profit

*/
