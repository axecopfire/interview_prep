
function HashFunction (length = 10) {
	this._ds = new Array(length);
}
HashFunction.prototype.insert = function (name) {
	var val = name.charCodeAt() % this._ds.length;
	if(!this._ds[val]) {
		this._ds[val] = name;
		return name + " added into base array";
	}
	if(this._ds[val] && !this._ds[val].head) {
		var tmp = this._ds[val];
		this._ds[val] = new LinkedList();
		this._ds[val].append(tmp);
	}
	this._ds[val].append(name);
	return name + " added to linked list";
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

module.exports = HashFunction;