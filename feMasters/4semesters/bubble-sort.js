// Link https://codepen.io/btholt/pen/PZKPjj

function bubbleSort (nums) {
  var swap = true;
  while(swap) {
    swap = false;
    for(var i = 0; i < nums.length; i ++) {
      if(nums[i] > nums[i + 1]) {
        var temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
        swap = true;
      }
    }
  }
  
  return nums;
}