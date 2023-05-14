function formatDuration (seconds) {
  var desc = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      final = [];

  if (seconds === 0) return 'now';
  
  for (var key in desc) {
    if (seconds >= desc[key]) {
      var val = Math.floor(seconds/desc[key]);
      final.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % desc[key];
    }
  }
 
  return final.length > 1 ? final.join(', ').replace(/,([^,]*)$/,' and'+'$1') : final[0]
}