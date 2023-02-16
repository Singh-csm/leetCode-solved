You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.


var plusOne = function(digits) {
 return ( (BigInt(digits.join(""))+BigInt("1")).toString().split("") )
};


var plusOne = function(digits) {
 return ( (Number(digits.join(""))+Number("1")).toString().split("") )
};


var plusOne = function(digits) {
    var one = 1;
    var resultItem = 0;
    for (var i = digits.length - 1; i >= 0; i--) {
        resultItem = digits[i] + one;
        one = parseInt(resultItem / 10);
        if (resultItem == 10) {
            digits[i] = 0;
        } else {
            digits[i] = resultItem;
        }
    }
    if (one > 0) {
        digits.unshift(one);
    }
    return digits;
};



let digits = [1,2,3,4]
var plusOne = function(digits) {
    return (BigInt(digits.join(""))+BigInt(1)).toString().split("")
 };
console.log(plusOne(digits))

let x = [1,2,3];
console.log(  (BigInt(x.join(""))+BigInt(1)).toString().split("")  )

let y= [1,2,3];
console.log(   (Number(y.join(""))+ Number("1") ).toString().split("")  )
