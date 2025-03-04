// Binary Search Tree Implementation
export class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  // EASY: Insert a value into the BST
  insert(value: number): void {
    // TODO: Implement insert method
    if (this.root === null) {
      this.root = new BSTNode(value);
      return;
    } else {
      function searchTree(node) {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new BSTNode(value);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new BSTNode(value);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      console.log(bst.root);
      searchTree(bst.root);
    }
  }

  // EASY: Check if a value exists in the BST
  contains(value: number): boolean {
    // TODO: Implement contains method
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // MEDIUM: Find the minimum value in the BST
  findMin(): number | null {
    // TODO: Implement findMin method
    let current = this.root;
    if (current === null) {
      return null;
    }
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  // MEDIUM: Find the maximum depth of the BST
  maxDepth(): number {
    // TODO: Implement maxDepth method
    let current = this.root;

    const depth = (current) => {
      if (current === null) {
        return -1;
      }
      let leftHeight = depth(current.left);
      let rightHeight = depth(current.right);
      return Math.max(leftHeight, rightHeight) + 1;
    };
    return depth(current);
  }

  // MEDIUM: Depth-First Search (DFS) Traversal
  dfs(): number[] {
    // TODO: Implement DFS traversal
    // let inOrder: number[] = [];
    // let current = this.root;
    // function pushNodeInOrder(node) {
    //   if (node === null) {
    //     return;
    //   }
    //   pushNodeInOrder(node.left);
    //   inOrder.push(node.value);
    //   pushNodeInOrder(node.right);
    // }
    // pushNodeInOrder(current);
    // return inOrder;

    let preOrder: number[] = [];
    function pushPreOrder(node: BSTNode | null) {
      if (node) {
        preOrder.push(node.value);
        pushPreOrder(node.left);
        pushPreOrder(node.right);
      }
    }
    pushPreOrder(this.root);
    return preOrder;
  }

  // MEDIUM: Breadth-First Search (BFS) Traversal
  bfs(): number[] {
    // TODO: Implement BFS traversal
    return [];
  }
}

// Test Cases
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

console.log(bst);

console.log("BST Contains 7:", bst.contains(7)); // Expected: true
console.log("BST Min Value:", bst.findMin()); // Expected: 3
console.log("BST Max Depth:", bst.maxDepth()); // Expected: 2
console.log("BST DFS Traversal:", bst.dfs()); // Expected: [10, 5, 3, 7, 15, 13, 17] (or similar)- Pre-Order Traversal
// console.log("BST BFS Traversal:", bst.bfs()); // Expected: [10, 5, 15, 3, 7, 13, 17] (or similar)
