var findNumbers = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let convertToStr = nums[i].toString();
    if (convertToStr.length % 2 === 0) {
      count++;
    }
  }
  return count;
};

var maxNumberOfBalloons = function(text) {
  let b = 0,
    a = 0,
    l = 0,
    o = 0,
    n = 0,
    count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "b") {
      b++;
    } else if (text[i] === "a") {
      a++;
    } else if (text[i] === "l") {
      l++;
    } else if (text[i] === "o") {
      o++;
    } else if (text[i] === "n") {
      n++;
    }
  }
  console.log(b, a, l, o, n);
  while (b >= 1 && a >= 1 && l >= 2 && o >= 2 && n >= 1) {
    count++;
    b -= 1;
    a -= 1;
    l -= 2;
    o -= 2;
    n -= 1;
  }
  return count;
};
