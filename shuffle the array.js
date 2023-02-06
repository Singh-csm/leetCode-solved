#📌1470. Shuffle the Array
- Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
}
