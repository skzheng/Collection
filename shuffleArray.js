
var Solution = function(nums) {
    this.nums = nums || []
};

Solution.prototype.reset = function() {
    return this.nums
};

Solution.prototype.shuffle = function() {
    let set = this.nums.slice()
    for(let i = 0 ; i < set.length ; i++){
        let temp = set[i];
        let random = Math.floor(Math.random() * set.length);
        set[i] = set[random];
        set[random] = temp;
    }
    return set;
};


/*
 Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
*/
