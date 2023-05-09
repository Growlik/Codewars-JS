function parseInt(string) {
  let numberList = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  let arr = [].concat(
    ...string
      .split(" ")
      .map((n) => (n.indexOf("-") ? n.split("-") : n).filter((n) => n != "and"))
  );
  let temp2 = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "million") {
      temp2 = temp * 1000000;
      temp = 0;
      continue;
    }
    if (arr[i] == "thousand") {
      temp = temp * 1000;
      temp2 = temp;
      temp = 0;
      continue;
    }
    if (arr[i] == "hundred") {
      temp = temp * 100;
      continue;
    }
    temp = temp + numberList[arr[i]];
  }

  return temp2 + temp;
}