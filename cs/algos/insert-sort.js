function InsertionSort(arr) {
  var unsorted = arr;
  var sorted = [];
  while (unsorted.length) {
    var comp = unsorted.pop();
    if (!sorted.length || comp >= sorted[sorted.length]) {
      sorted.push(comp);
      continue;
    }

    // loop through  our sorted list
    // if our comp is greater or equal to sorted at position
    // add our comp after it and shift the rest of the list

    for (var j = sorted.length; j > 0; j--) {
      if (comp >= sorted[j - 1]) {
        insert(sorted, comp, j - 1);
        break;
      }
    }
  }
  return sorted;
}

function insert(arr, add, pos) {
  var prev = add;
  var temp;

  for (var i = pos; i < arr.length; i++) {
    if (!arr[i + 1]) {
      arr.push(prev);
      return;
    }
    temp = arr[i + 1];
    arr[i + 1] = prev;
    prev = temp;
  }
}
// version 2 
// Does all operations on original array
// Is O(N^2) as opposed to O(N^3)

function v2(arr) {
	for(var i = 0; i < arr.length; i ++) {
		var temp = arr[i];
		for(var j = i; j > 0; j--) {
			if(!arr[j - 1]) { arr[j] = temp; }
			check = arr[j-1];
			if(temp <= check) {
				arr[j - 1] = temp;
				arr[j] = check;
			}
		}
	}
	return arr;
}

var arr = [4, 2, 1, 2];
console.log(v2(arr));

module.exports = v2;
