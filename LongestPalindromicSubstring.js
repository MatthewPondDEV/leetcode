/* 
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

var isPal = function (check) {
  let left = 0;
  let right = check.length - 1;

  while (left < right) {
    if (check[left] != check[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
var longestPalindrome = function (s) {
  let length = s.length;

  if (length === 1 || length === 0) {
    return s;
  }

  let current = s[0];
  let longest = s[0];

  for (let i = 0; longest.length <= length - i - 1; i++) {
    let j = i + 1;
    current = s[i];
    while (j < length) {
      current = current + s[j];
      if (isPal(current) === true) {
        if (current.length > longest.length) {
          longest = current;
        }
      }
      j++;
    }
  }

  return longest;
};


// faster version but still slow