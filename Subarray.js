Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.
 
 function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}


This implementation uses a for loop to iterate over the elements in the nums array. 
At each iteration, the currentSum is updated by taking the maximum of the current element and the sum of the current element and the current currentSum. 
The maxSum is updated by taking the maximum of the current maxSum and the current currentSum.

For example, if nums is [-2,1,-3,4,-1,2,1,-5,4], the result of the maxSubArray function will be 6, which is the sum of the subarray [4,-1,2,1].
