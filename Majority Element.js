Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

var majorityElement = function(nums) {
        var major = nums[0], count = 1;
        for(var i = 1, l = nums.length; i < l; i++){
            if(count === 0){
                count++;
                major = nums[i];
            }else if(major === nums[i]){
                count++;
            }else count--;
            
        }
        return major;
};
