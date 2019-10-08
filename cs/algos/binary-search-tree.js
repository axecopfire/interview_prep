// This implementation heavily inspired by:
// https://www.youtube.com/watch?v=oSWTXtMglKE

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

Node.prototype.insert = function(val) {
  if (val <= this.data) {
    if (this.left === null) {
      this.left = new Node(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === null) {
      this.right = new Node(val);
    } else {
      this.right.insert(val);
    }
  }
};

Node.prototype.arrInOrder = function() {
  var output = [];

  if (this.left === null || this.right === null) {
    return this.data;
  }

  if (this.left !== null) {
    output.push(this.left.arrInOrder());
  }
  output.push(this.data);
  if (this.right !== null) {
    output.push(this.right.arrInOrder());
  }

  return output;
};

module.exports = Node;
