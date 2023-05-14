function array_diff(a, b) {
  let counter = {};
  for(let i of b) {
    counter[i] = true;
  }
  let result = a.filter(item => counter[item] !== true);
  return result;
}