Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
 
 
 var lengthOfLastWord = function(s) {
    s=s.trim()
    let a =s.split(" ")
    return a[a.length-1].length
};



let s="hello world"
var lengthOfLastWord = function(s) {
   let b=  s.split(" ")
   return b[b.length -1].length
};

console.log(lengthOfLastWord(s))


var lengthOfLastWord = function(s) {
    s = s.trim();
    var arr = s.split(' ');
    return arr[arr.length - 1].length;
};
