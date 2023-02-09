The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:


let convert = function(s, numRows) {
    if (numRows < 2) {
      return s;
    }
    let matrix = [];
    for (var i = 0; i < numRows; i++) {
        matrix.push([]);
    }
    let k = 0;
    i = 0;
    let res = '';
    while (k < s.length) {
        while(i < matrix.length && k < s.length) {
            matrix[i].push(s[k]);
            // down
            i++;
            k++;
        }
        i = i-2;
        while (i >= 0 && k < s.length) {
            matrix[i].push(s[k]);
            // up
            i--;
            k++;
        }
        i = i+2;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            res += matrix[i][k];
        }
    }
    return res;
};
