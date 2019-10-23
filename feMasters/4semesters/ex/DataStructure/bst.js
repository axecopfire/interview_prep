// tree, node, add, toObject


function Node (value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
} 

function Tree () {
    this.root = null;
}

Tree.prototype.toObject = function () {
    return this.root;
}

Tree.prototype.add = function (value, current = this.root) {
    if(this.root === null) {
        this.root = new Node(value);
        return;
    }
    if(value < current.value) {
        if(current.left) {
            this.add(value, current.left);
        } else {
            current.left = new Node(value);
        }
    }
    else {
        if(current.right) {
            this.add(value, current.right);
        } else {
            current.right = new Node(value);
        }
    }

}

var bst = new Tree();
bst.add(20);
bst.add(5);
bst.add(100);