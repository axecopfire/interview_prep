function Node (value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
} 

function Tree () {
    this.root = null;
}

Tree.prototype.add = function (value, root = this.root) {
    var node = new Node(value);
    if(!root) { this.root = node; return; }
    if(value < root.value) {
        if(root.left) {
            this.add(value, root.left);
        } else {
            root.left = node;
            root.left.parent = root;
            return this.balance(root.left);
        }
    } else {
        if(root.right) {
            this.add(value, root.right);
        } else {
            root.right = node;
            root.right.parent = root;
            return this.balance(root.right);
        }
    }
}

Tree.prototype.height = function (node = this.root) {
    // if(!this.root) return -1;
    if(node === null) return 0;

    return (
        (this.height(node.left) + 1)
        //  - 
        // (this.height(node.right) + 1)
        ) 
}
Tree.prototype.balance = function (node) {

   console.log(this.height(node.parent));
}

var avl = new Tree();
avl.add(10)
avl.add(20)
avl.add(15)
avl.add(20);




   





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