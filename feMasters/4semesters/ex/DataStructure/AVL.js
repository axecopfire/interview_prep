function Node (value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
} 

function Tree () {
    this.root = null;
}

Tree.prototype.add = function (value) {

}





   


//     5
//   /
// 3
//   \
//     4


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


// 5
//   \
//     6
//       \
//         7

// tmp = 6
// node.left = 7
// tmp.right(node) = 5
// 6 -> 5 -> 7

/*
tmp = node.left;
node.left = tmp.right 4
tmp.right = node; tmp's right = 5

        3
      /
    4
  /
5
*/