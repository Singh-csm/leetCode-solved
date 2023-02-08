Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).


let runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

In this implementation, the function runningSum takes an array nums as input and returns an array with the running sum. 
The for loop iterates through the array, starting from the second element, and adds the previous element's value to the current element, updating the array in place. 
Finally, the function returns the updated array. ```
