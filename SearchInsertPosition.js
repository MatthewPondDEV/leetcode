/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

var searchInsert = function (nums, target) {
  let index = nums.indexOf(target);
  if (index > -1) {
    return index;
  } else {
    let arr = nums.filter((val) => val < target);
    return arr.length;
  }
};

var searchInsert2 = function (nums, target) {
  let index = nums.indexOf(target);
  if (index > -1) {
    return index;
  } else {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (nums[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return left;
  }
};
