var assert = require('assert');
var BinSearch = require('../algos/binary-search');


describe("Binary Search", function () {
	var arr = [1, 5, 10, 15, 20, 25, 30];	
	it("should find item at place", function () {
		assert.equal(2, BinSearch(arr, 10));
	})
	it("did not find item in array", function () {
		assert.equal(-1, BinSearch(arr, 17));
	})
	it("could not find item because out of array", function () {
		assert.equal(-1, BinSearch(arr, 31));
	})
})