const reverseWords = function(s) {
    let arr = s.split(' ');
    arr = arr.map(item => {
        return item.split('').reverse().join('');
    })
    return arr.join('');
};

reverseWords("Let's take LeetCode contest")

/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.

*/

const reverseString = (s) => {
  return s.split('').reverse().join('');
}
