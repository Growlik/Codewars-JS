function generateHashtag (str) {
  var hashtag=str.replace(/\b[a-z]/g,function(s){return s.toUpperCase()}).replace(/\s+/g,'');
  console.log(hashtag.length);
  if(hashtag=='') return false;
  else if(hashtag.length>=140) return false;
  else return '#'+hashtag;
}