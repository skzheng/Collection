function bonAppetit(ind, arr, price){
  let fullPrice = arr.reduce((acc,curr) => {
    return acc + curr;
  }) / 2;

  let adjusted = arr.slice();
  adjusted[ind] = 0;
  let correctPrice = adjusted.reduce((acc,curr) => {
    return acc + curr;
  }) / 2

  if(correctPrice === price){
    return 'Bon Appetit';
  } else {
    return fullPrice - correctPrice;
  }
}

bonAppetit(1, [3,10,2,9], 7); // Bon Appetit 

/* ======================================

https://www.hackerrank.com/challenges/bon-appetit/problem

*/
