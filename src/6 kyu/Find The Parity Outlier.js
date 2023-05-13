function findOutlier(integers){
  var even = integers.filter(a=>a%2==0);
  var odd = integers.filter(a=>a%2!=0);
  
  return even.length == 1 ? Number(even) : Number(odd);
}