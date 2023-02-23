


var strinfToBeStored = function(s,x){
  const box=[];
  for(let i=0; i<s,length; i++){
    box[x[i]] = s[i];
  }
  return box.join("");
};




var restoreString = function(s, indices) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }
    return result.join('');
};
