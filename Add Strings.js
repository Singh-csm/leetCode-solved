415. Add Strings
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.


let addStrings = function(num1, num2) {
    let carry = 0;
    let len1 = num1.length;
    let len2 = num2.length;
    let res = '';
    while (len1 > 0 || len2 > 0) {
        let sum = (+num1[len1 - 1] || 0) + (+num2[len2 - 1] || 0) + carry;
        res = sum % 10 + '' + res;
        carry = Math.floor(sum / 10);
        len1--;
        len2--;
    }
    if (carry) res = '1' + res;
    return res;
};
