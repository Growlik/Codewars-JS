function isIsogram(str){
  let newStr = str.toLowerCase();
 // console.log (str);
 //console.log (newStr);
   for (let i = 0; i < newStr.length; i++) {
     for (let j = i + 1; j < newStr.length; j++) {
       if(newStr[i] === newStr[j]) {
         return false;
       }
     }
   }
   return true;
}