/* 
The thing that tripped me up was:
return merge(
    mergeSort(left), 
		mergeSort(right));

I understand what it does and why you need it. I just couldn't figure out the symptoms from looking at the console. I guess the symptom was that it was resetting everytime on the merge and there was no maintaining of history.

*/
function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }
  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);
    
  return merge(
    mergeSort(left), 
    mergeSort(right));
}
function merge(left, right) {
  var leftI = 0;
  var rightI = 0;
  var output = [];
  while(leftI < left.length && rightI < right.length) {
    
    if(left[leftI] < right[rightI]) {
      output.push(left[leftI]);
      leftI++;
    } else {
      output.push(right[rightI]);
      rightI++;
    }
  }

  return output
    .concat(left.slice(leftI))
    .concat(right.slice(rightI));
}