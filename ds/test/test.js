var assert = require("assert");
var { Node, LinkedList } = require("../linked-list");

describe("Node", function() {
  var node = new Node(20);
  it("data should return 20", function() {
    assert.equal(node.data, 20);
  });

  let bool = node.key > 0 ? true : false;
  it("key should be greater than 0", function() {
    assert.equal(bool, true);
  });
});

describe("LinkedList", function() {
  describe("init", function() {
    let ll = new LinkedList();
    it("should have head", function() {
      let bool = ll.hasOwnProperty("head");
      assert.equal(bool, true);
    });
    it("should have tail", function() {
      let bool = ll.hasOwnProperty("tail");
      assert.equal(bool, true);
    });
  });

  describe("append", function() {
    let ll = new LinkedList();
    describe("init append", function() {
      it("if empty should create head", function() {
        ll.append(22);
        assert.equal(ll.head.data, 22);
      });

      it("tail equal to head", function() {
        assert.equal(ll.tail, ll.head);
      });
    });

    describe("Second append", function() {
      it("should create a child of head", function() {
        ll.append(55);
        assert.equal(ll.head.child.data, 55);
      });
      it("tail should update", function() {
        assert.equal(ll.tail, ll.head.child);
      });
      it("new node's prev should be head", function() {
        assert.equal(ll.head.child.prev, ll.head);
      });
    });
  });

  describe("prepend", function() {
    let ll = new LinkedList();
    describe("first prepend", function() {
      it("new node should be head", function() {
        ll.prepend("first");
        assert.equal(ll.head.data, "first");
      });
    });
    describe("second prepend", function() {
      it("next node's prev should be new node", function() {
        ll.prepend("second");
        assert.equal(ll.head.child.prev.data, "second");
      });
      it("first node should now be second node", function() {
        assert.equal(ll.head.child.data, "first");
      });
    });
  });

  describe("addMiddle", function() {
    // array for appending to linked list
    let ll = new LinkedList();
    var a = [0, 1, 2];
    a.forEach(i => {
      ll.append(i);
    });
    it("old node with matching key should be returned", function() {
      assert.equal(
        ll.head.child.key,
        ll.addMiddle(3, ll.head.child.key).child.key
			);
		});
	});
	
	describe("frontDelete", function() {
		var ll = new LinkedList();
		ll.append(0);
		ll.append(1);

		it("second node should equal first", function () {
			ll.frontDelete();
			assert.equal(ll.head.data, 1);
		})
	});

	describe("backDelete", function () {
		var ll = new LinkedList();
		ll.append(0);
		ll.append(1);
		ll.append(2);
		it("tail should equal next to last node", function () {
			ll.backDelete();
			assert.equal(ll.tail.data, 1);
		});
	});

	describe("middleDelete", function () {
		var ll = new LinkedList();
		ll.append(0);
		ll.append(1);
		ll.append(2);
		it("with 3 nodes head child's data should equal tail's data", function () {
			ll.middleDelete(ll.head.child.key);
			assert.equal(ll.head.child.data, ll.tail.data);
		})
	});
});
