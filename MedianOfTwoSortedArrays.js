/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length;
  const medianIndex = Math.floor(length / 2);
  let current = 0;
  let index1 = 0;
  let index2 = 0;
  let mergedArray = [];

  while (current <= medianIndex) {
    let nums1EmptyCheck = index1 >= nums1.length;
    let nums2EmptyCheck = index2 >= nums2.length;

    if (
      !nums1EmptyCheck &&
      (nums2EmptyCheck || nums1[index1] <= nums2[index2])
    ) {
      mergedArray[current] = nums1[index1];
      index1++;
    } else {
      mergedArray[current] = nums2[index2];
      index2++;
    }
    current++;
  }

  if (length % 2 === 0) {
    return (mergedArray[medianIndex] + mergedArray[medianIndex - 1]) / 2;
  } else {
    return mergedArray[medianIndex];
  }
};
