
function hashFunction (ds) {
	this.ds = ds;
}
hashFunction.prototype.insert = function (name) {
	var val = name.charCodeAt() % this.ds.length;
	if(!ds[val]) {
		ds[val] = name;
	}
	
}

function LinkedList () {
	this.head = null;
}
function Node (data) {
	this.data = data;
	this.child = null;
}

LinkedList.prototype.append = function (data, _node = this.head) {
	if(!this.head) { this.head = new Node(data); return; }
	if(!_node.child) { _node.child = new Node (data); return; }
	this.append(data, _node.child);
}

var ll = new LinkedList();
ll.append(10);
ll.append(20);

var arr = [2,3];
arr[1] = new LinkedList();
arr[1].append(23);
console.log(arr[1]);