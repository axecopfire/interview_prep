var assert = require('assert');
var algoSort = require('../algos/insert-sort');

// TODOS: check to see if there are unnecesary comparisons happening
describe('algo sort', function () {
	it("ascending order", function() {
		var arr = [9, 20, 15, 5, 30, 1];
		var tmp = arr;
		var bool = true;
		algoSort(arr);
		tmp.forEach((el, i) => {
			if(el > tmp[i + 1]) {
				bool = false;
			}
		});

		assert.equal(bool, true);
	});
	it("empty should return empty", function () {
		assert.equal([].length, algoSort([]).length)
	});
});