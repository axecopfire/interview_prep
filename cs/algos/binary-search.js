
function binarySearch(arr, target, _low = 0, _high = arr.length) {
	var test = arr.slice(_low, _high);
	var center = Math.floor(test.length / 2);

	// Target is outside of array parameters
	if(target > arr[arr.length - 1] || target < arr[0]) {
		return -1;
	}

	// Here's the answer
	if(target === test[center]) {
		center = center + _low;
		return center;
	} else if (target === test[center - 1]) {
		center = center + _low - 1;
		return center;
	}
	else if (target === test[center + 1]) {
		center = center + _low + 1;
		return center;
	}
	
	// Target is high
	if(target > test[center]) {
		_low = center;
		binarySearch(arr, target, _low, _high);
	} 
	// Target is low
	if (target < test[center]) {
		_high = center;
		binarySearch(arr, target, _low, _high);
	}

	return -1;
} 

module.exports = binarySearch;