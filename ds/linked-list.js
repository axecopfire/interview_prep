function Node (data) {
	this.data = data;
	this.key = new Date().getTime();
	this.child = null;
	this.prev = null;
}

var LinkedList = class {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	append(data) {
		var node = new Node(data);
		var bool = false;
		var current = this.head;
		if(this.head == null) {
			this.head = node;
			this.tail = this.head;
			return;
		} 
		while(!bool) {
			if(!current.child) {
				current.child = node;
				current.child.prev = current;
				this.tail = current.child;
				return;
			} else {
				current = current.child;
			}
		}
	}
	prepend(data) {
		var node = new Node(data);
		var temp = this.head;
		this.head = node;
		this.head.child = temp;
		this.head.child.prev=this.head;
	}
	addMiddle(data, key) {
		var node = new Node(data);
		var bool = false;
		var current = this.head;
		while(!bool) {
			if(current.key === key) {
				var temp = current;
				current = node;
				current.child = temp;
				current.child.prev = current;
				return current;
			} else {
				current = current.child;
			}
		}
	}
	frontDelete () {
		this.head = this.head.child;
	}
	backDelete () {
		var temp = this.tail;
		this.tail = this.tail.prev;
		return temp;
	}
	middleDelete (key) {
		var current = this.head; // add cases for head/tail
		while(current.key !== key) {
			current = current.child;
		}
		var temp = current;
		current.child.prev = current.prev;
		current.prev.child = current.child;
		return temp;
	}
}

module.exports = { Node, LinkedList };