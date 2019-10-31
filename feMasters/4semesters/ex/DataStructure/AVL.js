function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
} 

function Tree () {
    this.root = null;
}

Tree.prototype.add = function (value) {
    var node = new Node(value);
    this.addHelper(this.root, node);
}

Tree.prototype.toObject = function() {
    return JSON.stringify(this.root)
}


Tree.prototype.addHelper = function (root, node) {
    if(root === null) {
        root = node;
    } else if(node.value < root.value) {
        root.left = this.addHelper(root.left, node);
        if(root.left !== null && this.balanceFactor(root) > 1) {
            if(node.value < root.left.value) {
                root = this.rotationLL(root);
            } else {
                root = this.rotationLR(root);
            }
        }
    } else if (node.value >= root.value) {
        root.right = this.addHelper(root.right, node);

        if(root.right !== null && this.balanceFactor(root) < -1) {
            if(node.value > root.right.value) {
                root = this.rotationRR(root);
            } else {
                root = this.rotationRL(root);
            }
        } 
    }
    // console.log(root)
    return root;
}

Tree.prototype.height = function (node = this.root) {
    if(node === null) return 0;

    return (Math.max(this.height(node.left), this.height(node.right)) + 1);
}

Tree.prototype.balanceFactor = function (node) {
    return (this.height(node.left) - this.height(node.right));
}

Tree.prototype.rotationLL = function (node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    if(this.root === node) this.root = tmp;
    return tmp;
}

Tree.prototype.rotationRR = function (node) {

    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    if(this.root === node) this.root = tmp;
    return tmp;
}

Tree.prototype.rotationLR = function (node) {
    node.left = rotationRR(node.left);
    return rotationLL(node);
}

Tree.prototype.rotationRL = function (node) {
    node.right = rotationLL(node.right);
    return rotationRR(node);
}

var avl = new Tree();
avl.add(10);
avl.add(15);
avl.add(30);
console.log(avl);




   





// tmp = 3
// node.left = 4
// tmp.right(node) = 5
// 3 -> 5 ->  4

//         4
//       /
//     3
//   /
// 2

// tmp = 3
// node.left = 2
// tmp.right(node) = 4
// 3 -> 2 -> 4




// tmp = 6
// node.left = 7
// tmp.right(node) = 5
// 6 -> 5 -> 7

/*
LL

        3
      /
    4
  /
5
tmp = node.left; 4
node.left = tmp.right Maybe null if theres something itll b there
tmp.right = node; tmp's right = 5

RR
// 5
//   \
//     6
//       \
//         7

tmp = node.right
node.right = tmp.left;
tmp.left = node;


LR
//     5
//   /
// 3
//   \
//     4
left on parent
node.left = rightRotate(node.left)
tmp = node.right
node.right = tmp.left
tmp.left = node
*/
