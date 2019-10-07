function swap (a, x, y) {
	var temp = a[x];
	a[x] = a[y];
	a[y] = temp;
	return a;
}

function bubbleSort(a) {
	var isSorted = false;
	var lastUnsorted = a.length - 1;
	while(!isSorted) {
		isSorted = true;

		for(var i = 0; i < lastUnsorted; i ++) {
			if(a[i] > a[i + 1]) {
				swap(a, i, i + 1);
				isSorted = false;
			}
		}
		lastUnsorted --;
	}
	return a;
}

var array = [100, 3, 8, 10, 2];
bubbleSort(array);

module.exports = bubbleSort;