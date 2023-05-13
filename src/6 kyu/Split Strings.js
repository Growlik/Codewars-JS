function solution(str){
  var arr = str.split('');
  var newArr = [];
  for (let i = 0; i < arr.length; i+=2){
    if (arr[i+1]) newArr.push(arr[i]+arr[i+1])
    else newArr.push(arr[i]+'_')
  }
  return newArr;
}