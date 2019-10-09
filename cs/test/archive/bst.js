var assert = require('assert');
var BinarySearchTree = require('../../algos/binary-search-tree');

describe("Binary Search Tree", function () {
	describe("init", function () {
		var bst = new BinarySearchTree(10);
		it("root insert works", function () {
			assert.equal(bst.data, 10);
		})
		it("left null", function() {
			assert.equal(bst.left, null);
		})
		it("right null", function () {
			assert.equal(bst.right, null);
		})
	})
	describe("insert", function () {
		var bst = new BinarySearchTree(10);
		it("init low should go left", function () {
			bst.insert(5);
			assert.equal(bst.left.data, 5);
		});
		it("right should be null", function () {
			assert.equal(bst.right, null);
		});

		it("second high insert data should be right", function () {
			bst.insert(15);
			assert.equal(bst.right.data, 15);
		})
		it("left should be null", function () {
			assert.equal(bst.left.data, 5);
		})
	})

	describe("creates an array in order", function () {
		var bst = new BinarySearchTree(10);
		bst.insert(5);
		bst.insert(10);
		bst.insert(15);
		var arr = bst.arrInOrder();
		it("should read in preOrder", function () {
			var bool = false;
			var test = [5, 10, 15];
			arr.forEach((el, i) => bool = el === test[i] ? true : false);

			assert.equal(bool, true);
		})
	})

})