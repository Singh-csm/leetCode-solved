Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

let pivotIndex = function(nums) {
    let sum = 0, leftSum = 0;
    for (let num of nums) sum += num;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]) return i;
        leftSum += nums[i];
    }
    return -1;
};


In this implementation, the function pivotIndex takes an array nums as input and returns the pivot index. 
The variable sum is used to store the sum of all elements in the array, while leftSum is used to store the sum of elements on the left side of the pivot index. 
The for loop iterates through the array and calculates the sum of elements on the left side. 
If the sum of elements on the left side is equal to the sum of elements on the right side, the current index is the pivot index and the function returns it. 
If no pivot index is found, the function returns -1.
