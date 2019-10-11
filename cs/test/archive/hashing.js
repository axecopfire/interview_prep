var assert = require("assert");
var hashing = require("../../algos/hashing");

describe("hash tables", function () {
	describe("create", function () {
		var hash = new hashing (5);
		it("should create an array", function() {
			assert.equal(Array.isArray(hash._ds), true)
		})
		it("should be an array of 5 items", function () {
			assert.equal(hash._ds.length, 5);
		})
	})
	describe("insert", function () {
		var hash = new hashing (5);
		it("should insert string at 4th position", function () {
			// console.log("Jenny".charCodeAt() % 5);
			hash.insert("Jenny");
			var bool = hash._ds[4] === "Jenny" ? true : false;
			assert.equal(bool, true);
		});
		it("should convert 4th pos value from string to head of LinkedList", function () {
			hash.insert("Jenny");
			var bool = hash._ds[4].head.data === "Jenny" ? true : false;
			assert.equal(bool, true);
		})
		it("should also have child with same name", function () {
			var bool = hash._ds[4].head.child.data === "Jenny" ? true : false;
			assert.equal(bool, true);
		})
	})
})


// db.insert("Kailo");
// db.insert("Jerry");
// db.insert("Jessica");
// db.insert("Malik");
// console.log(db);
