var maxSequence = function(arr){
  let maxSeq = 0;
  let currSeq = 0;
  for (const x of arr) {
    currSeq = Math.max(0, currSeq + x);
    maxSeq = Math.max(currSeq, maxSeq);
  }
  return maxSeq;
};