/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

var longestCommonPrefix = function (strs) {
  let result = "";
  let checker = strs[0];
  let counter = 0;

  if (strs.length === 1) {
    return strs[0];
  }

  if (!strs[0]) {
    return "";
  }

  while (counter < checker.length) {
    for (let i = 1; i < strs.length; i++) {
      let value = strs[i];
      if (value[counter] != checker[counter]) {
        return result;
      } else if (i === strs.length - 1) {
        result = result + value[counter];
      }
    }
    counter++;
  }
  return result;
};
