var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  x = x + "";
  for (let i = 0; i < Math.floor(x.length / 2); i++) {
    if (x[i] !== x[x.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
