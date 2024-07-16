/*Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

*/

//brute force
var isPalindrome = function (x) {
  if (x === 0) {
    return true;
  }
  if (x < 0 || x % 10 === 0) {
    return false;
  }
  let arr = x.toString().split("");

  return arr.join("") === arr.reverse().join("");
};

//Check from the left and the right-- this was the fastest algorithm
var isPalindrome = function (x) {
  if (x === 0) {
    return true;
  }

  if (x < 0 || x % 10 === 0) {
    return false;
  }

  let check = x.toString();
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

//Using recursion here-- this was the best for memory
function palCheck(check, left, right) {
  if (left >= right) {
    return true;
  } else if (check[left] != check[right]) {
    return false;
  } else {
    left++;
    right--;
    return palCheck(check, left, right);
  }
}

var isPalindrome = function (x) {
  if (x === 0) {
    return true;
  }
  if (x < 0 || x % 10 === 0) {
    return false;
  }

  let check = x.toString();
  let left = 0;
  let right = check.length - 1;

  return palCheck(check, left, right);
};
