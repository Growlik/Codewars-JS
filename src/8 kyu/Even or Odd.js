function evenOrOdd(number) {
  const a = Math.abs(number);
  if (a % 2 == 1){
    return 'Odd';
  } else {
    return 'Even';
  }
}