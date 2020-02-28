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

var mergeTwoLists = function(l1, l2) {
  result = [];
  for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
      if (l1[i] < l2[j]) {
        result.push(l1[i]);
        i++;
      } else {
        result.push(l2[j]);
        j++;
      }
    }
  }
  return result;
};

console.log(mergeTwoLists([1, 3, 5], [0, 2, 4, 4]));
