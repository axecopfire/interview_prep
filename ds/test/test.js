var assert = require('assert');
var { Node, LinkedList } = require('../linked-list');

describe('Node', () => {
	var node = new Node(20);
	it('data should return 20', () => {
		assert.equal(node.data, 20);
	});

	let bool = node.key > 0 ? true : false;
	it('key should be greater than 0', () => {
		assert.equal(bool, true);
	})
});


describe('LinkedList', () => {
	var ll = new LinkedList();
	it('should have head', () => {
		let bool = ll.hasOwnProperty('head');
		assert.equal(bool, true);
	})
	it('should have tail', () => {
		let bool = ll.hasOwnProperty('tail');
		assert.equal(bool, true);
	})
	
	describe('append', () => {
		
		describe('init append', () => {
			it('if empty should create head', () => {
				ll.append(22);
				assert.equal(ll.head.data, 22);
			});
			
			it('tail equal to head', () => {
				assert.equal(ll.tail, ll.head);
			});
		})
		
		describe('Second append', () => {
			it('should create a child of head', () => {
				ll.append(55);
				assert.equal(ll.head.child.data, 55);
			});
			it('tail should update', () => {
				assert.equal(ll.tail, ll.head.child);
			});
			it("new node's prev should be head", () => {
				assert.equal(ll.head.child.prev, ll.head);
			}); 
		});
		
	})
	
	describe('prepend', () => {
		it('new node should be head', () => {
			ll.prepend('prepend');
			assert.equal(ll.head.data, 'prepend');
		});
		it("next node's prev should be new node", () => {
			assert.equal(ll.head.child.prev.data, 'prepend');
		})
	});
	
	// array for appending to linked list
	var a = [0, "dfasd", 43, 234, 25, "dfsd3"];
	describe('addMiddle', () => {
		it("")
		a.forEach((i) => {
			ll.append(i);
		})
		console.log(ll);
		
	})
	

})