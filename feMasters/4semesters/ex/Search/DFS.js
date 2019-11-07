const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null
      },
      right: {
        value: 11,
        left: null,
        right: null
      }
    }
  }
};


const inOrderTraverse = function (node, array) {
  if(!node) return array;

  array = inOrderTraverse(node.left, array);
  array.push(node.value);
  array = inOrderTraverse(node.right, array);
  return array;
}

const preOrderTraverse = function (node, array) {
  if(!node) return array;

  array.push(node.value);
  array = preOrderTraverse(node.left, array);
  array = preOrderTraverse(node.right, array);
  return array;
}

const postOrderTraverse = function (node, array) {
  if(!node) return array;

  array = postOrderTraverse(node.left, array);
  array = postOrderTraverse(node.right, array);
  array.push(node.value);
  return array;
}