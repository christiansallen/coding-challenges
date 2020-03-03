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
