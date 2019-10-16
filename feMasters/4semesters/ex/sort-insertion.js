// Link: https://codepen.io/btholt/pen/mVMMxj
function insertionSort (nums) {
  for(var i = 0; i < nums.length; i++) {
    for(var j = i; j > 0; j--) {
      if(nums[j] > nums[j - 1]) {
        break;
      }
      var temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
    }
  }
  return nums;
}

// Brian's solution
function insertionSort (nums) {
  for(var i = 1; i < nums.length; i++) {
    for(var j = 0; j < i; j++) {
      if(nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return nums;
}