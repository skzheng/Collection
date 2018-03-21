function maxProfit2(prices){
  return prices.reduce((acc,curr,i) => {
    let next = prices[i+1];
    return next > curr ? (acc + (next - curr)) : acc
  }, 0)
}


maxProfit2([10,2,9,1]) // 7

/* =================================

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

// i // arr //  prices on respective days
// o // num // amount to be gained
// c // ---
// e // ---

The Strategy: 
We are given an array of prices and multiple transactions to gain profit. 
We gain any profit if the next day's price is higher than our price today. However, if we wait a day, the price can either go up or down. From this, we would have gained nothing waiting for this next day. If the price goes up, we would have gained the same as if we bought day 1, sold day 2 and bought day 2.
We can iterate through and simple check if the next day's prices are better and then add that. Otherwise we can toss losses.


*/
