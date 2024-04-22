/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function (s) {
  let resultArr = [];
  let currentString = "";
  let n = s.length;

  if (s.length === 1) {
    return 1;
  }

  if (s.length === 0) {
    return 0;
  }

  for (let i = 0; i < n; i++) {
    if (currentString.includes(s[i])) {
      resultArr.push(currentString.length);
      i = i - currentString.length + 1;
      currentString = s[i];
    } else {
      currentString += s[i];
    }

    if (i === s.length - 1) {
      resultArr.push(currentString.length);
      currentString = "";
    }
  }

  return Math.max(...resultArr);
};

// This function below was faster than 91% of JS users and memory is better than 87%

var lengthOfLongestSubstring2 = function (s) {
  let n = s.length;
  let result = 0;
  if (s.length === 1) {
    return 1;
  }

  if (s.length === 0) {
    return 0;
  }

  let lastIndex = new Array(256).fill(-1);

  let current = 0;

  for (let i = 0; i < n; i++) {
    current = Math.max(current, lastIndex[s.charCodeAt(i)] + 1);

    result = Math.max(result, i - current + 1);

    lastIndex[s.charCodeAt(i)] = i;
  }

  return result;
};
