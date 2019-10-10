function MergeSort(arr) {
	this.run(arr, [], 0, arr.length - 1);
}
MergeSort.prototype.run = function (arr, temp, start, end) {
	if(start >= end) {
		return;
	}

	
	var middle = Math.floor((end + start) / 2);
	// console.log(start, middle, end)
	this.run(arr, temp, start, middle);
	this.run(arr, temp, middle + 1, end);
	this.stitch(arr, temp, start, end);
}

MergeSort.prototype.stitch = function (arr, temp, start, end) {
	var middle = Math.floor((end + start) / 2);
	var rStart = middle + 1;
	var size = end - start + 1;

	var lIndex = start;
	var rIndex = rStart;
	var index = lIndex;

	console.log("\n----\n","out of loop", { lIndex, middle, rIndex, end });
	while(lIndex <= middle && rIndex <= end) {
		// console.log({lindex:arr[lIndex], rindex:arr[rIndex]});
		if(arr[lIndex] <= arr[rIndex]) {
			temp[index] = arr[lIndex];
			lIndex++;
		}
		else {
			// console.log("I'm right incrementing!", arr[rIndex])
			temp[index] = (arr[rIndex]);
			rIndex++;
		}
		index++;
		// console.log(temp);
	}

	// console.log("right slice",arr.slice(rIndex, end), rIndex, end);
	// var copy = arr.slice(lIndex, middle + 1).length > 0 ? arr.slice(lIndex, middle + 1) : arr.slice(rIndex, end);

	var copy = arr.slice(lIndex, middle - lIndex + 1)
	temp = temp.concat(copy);
	copy = arr.slice(rIndex, end - rIndex + 1);
	temp = temp.concat(copy);

	console.log("before",{arr, temp});
	for(var i = 0; i < temp.length; i ++) {
		arr.splice(start + i, 1, temp[i]);
	}
	console.log("after", {arr, temp});
	
}

var arr = [10, 0, 8, 2, 50];
var ms = new MergeSort(arr);