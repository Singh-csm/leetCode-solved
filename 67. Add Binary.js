Given two binary strings a and b, return their sum as a binary string.

basically toString(2) will convert into binary 

var addBinary=(a, b)=>(BigInt(`0b${a}`)+BigInt(`0b${b}`)).toString(2)



const addBinary = (a, b) => (Number(`0b${a}`) + Number(`0b${b}`)).toString(2)
console.log(addBinary(a,b))


var addBinary = function(a, b) {
    var carry = 0;
    var len1 = a.length;
    var len2 = b.length;
    var res = '';
    while (len1 > 0 || len2 > 0) {
        var sum = (+a[len1 - 1] || 0) + (+b[len2 - 1] || 0) + carry;
        carry = Math.floor(sum / 2);
        res = sum % 2 + res;
        len1--;
        len2--;
    }
    if (carry) res = '1' + res;
    return res;
};
