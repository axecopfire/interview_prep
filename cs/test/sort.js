var assert = require('assert');
var algoSort = require('../algos/merge-sort.js/index.js');

// TODOS: check to see if there are unnecesary comparisons happening
describe('algo sort', function () {
	it("ascending order", function() {
		var arr = [9, 20, 15, 5, 30, 1];
		var bool = true;
		var test = algoSort(arr);
		test.forEach((el, i) => {
			if(el > test[i + 1]) {
				bool = false;
			}
		});

		assert.equal(bool, true);
	});
	it("empty should return empty", function () {
		assert.equal([].length, algoSort([]).length)
	});
});