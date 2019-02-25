function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    ar = ar.sort((a,b) => a - b);
    for ( let i = 0 ; i < ar.length ; i++ ) {
        for (let j = i + 1; j < ar.length ; j++) {
            if ((ar[i] + ar[j]) % k === 0 && i < j){
                counter ++;
            }
        }
    }
    return counter;
}

divisibleSumPairs(6 , 3 , [1, 3, 2, 6, 1, 2]) // 5

/*
https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
*/
