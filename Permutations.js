Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 function permute(nums) {
  let result = [];

  function backtrack(first = 0) {
    if (first === nums.length) {
      result.push(nums.slice());
    }

    for (let i = first; i < nums.length; i++) {
      [nums[first], nums[i]] = [nums[i], nums[first]];
      backtrack(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]];
    }
  }

  backtrack();
  return result;
}



This function uses a backtracking approach to generate all possible permutations. 
The backtrack function takes an optional argument first which represents the current starting index. 
If first is equal to the length of the nums array, it means that a new permutation has been generated and it is added to the result array. 
Then, the function iterates through the elements in the nums array, swapping the current element with the 
first element and calling the backtrack function with the updated array. 
Finally, the function swaps the elements back to their original positions and continues with the next iteration.
