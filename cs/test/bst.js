var assert = require('assert');
var BinarySearchTree = require('../algos/binary-search-tree');

describe("Binary Search Tree", function () {
	describe("init", function () {
		it("root insert works", function() {
			var bst = new BinarySearchTree(10);
			assert.equal(bst.data, 10);
		})
		it("left null", function() {
			assert.equal(bst.left, null);
		})
		it("right null", function () {
			assert.equal(bst.right, null);
		})
	})

	describe("should insert left", function () {
		it("data should be left", function () {
			bst.insert(5);
			assert.equal(bst.left.data, 5);
		})
		it("right should be null", function () {
			assert.equal(bst.right.data, null);
		})

	})

})