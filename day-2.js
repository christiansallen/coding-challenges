const fibonacciRecursion = num => {
  if (num <= 2) {
    return 1;
  }

  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
};

console.log(fibonacciRecursion(4));

// 1 1 2 3 5 8 13 21 34 55 89

const fibonacciIterative = num => {
  let a = 0;
  let b = 1;
  let temp;

  if (num <= 2) {
    return 1;
  }
  while (num > 1) {
    temp = a;
    a = b;
    b = a + temp;
    num--;
    // console.log("a:", a);
    // console.log("b:", b);
    // console.log("temp:", temp);
  }
  return b;
};

console.log(fibonacciIterative(4));

const numPalindrome = num => {
  num = num.toString();
  for (let i = 0; i < Math.floor(num.length / 2); i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(numPalindrome(234));
console.log(numPalindrome(23432));
console.log(numPalindrome(234234));
console.log(numPalindrome(-23412341));

const anagram = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  obj1 = {};
  obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] ? (obj1[str1[i]] += 1) : (obj1[str1[i]] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    obj2[str2[i]] ? (obj2[str2[i]] += 1) : (obj2[str2[i]] = 1);
  }

  for (let key in obj1) {
    if (obj1[key] == obj2[key]) {
      return true;
    }
  }
  for (let key in obj2) {
    if (obj1[key] == obj2[key]) {
      return true;
    }
  }
  return false;
};

console.log(anagram("string", "stirng"));
console.log(anagram("strng", "stirng"));
console.log(anagram("striiing", "stiiirng"));
