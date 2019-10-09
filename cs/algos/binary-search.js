
function binarySearch(arr, target, _low = 0, _high = arr.length) {
	var test = arr.slice(_low, _high);
	var center = Math.floor(test.length / 2);

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
	
	if(target > test[center]) {
		_low = center;
		binarySearch(arr, target, _low, _high);
	} 
	if (target < test[center]) {
		_high = center;
		binarySearch(arr, target, _low, _high);
	}
} 

module.exports = binarySearch;