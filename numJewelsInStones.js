var numJewelsInStones = function(J, S) {
    let count = 0;
    let store = J.split('').reduce((acc,curr) => {
        acc[curr] = acc[curr] + 1 || 1;
        return acc;
    }, {});
    for(let i = 0 ; i < S.length; i++){
        if(store[S[i]]){
            count++
        }
    }
    return count;
};

numJewelsInStones('aA', 'aAAbbbb'); // 3
numJewelsInStones('z', 'ZZ'); // 0

/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0

*/

