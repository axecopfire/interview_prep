var assert = require('assert');
var bubbleSort = require('../../algos/bubble-sort');

// TODOS: check to see if there are unnecesary comparisons happening
describe('bubble sort', function () {
	it("each item should be less than previous", function() {
		var arr = [9,8,7,6,5,7,4,6,3,1];
		var tmp = arr;
		var bool = true;
		bubbleSort(arr);
		tmp.forEach((el, i) => {
			if(el > tmp[i + 1]) {
				bool = false;
			}
		});

		assert.equal(bool, true);
	});
});