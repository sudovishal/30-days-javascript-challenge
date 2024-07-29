// Activity 1
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Add a node to the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Print the list
    printList() {
      let current = this.head;
      let list = '';
      while (current) {
        list += current.data + ' -> ';
        current = current.next;
      }
      console.log(list + 'null');
    }
  }
  
  const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.printList();
console.log(list.head.data)  // Output: 5 -> 10 -> 20 -> null

function multiplyByTwo(head) {
    let current = head
    while(current) {
        current.data = current.data * 2
        current = current.next
    }
    return head
}
// Activity 2
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);

// Activity 3
// program to implement queue data structure
class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    //adds a new element
    enqueue(element) {
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }

    //removes an element from head of the queue
    dequeue() {
        let removedElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removedElement;
    }

    //shows the head element of the  queue
    peek() {
        let peekElement = this.items[this.headIndex];
        return peekElement;
    }

    //shows the number of items in queue
    size() {
        return this.tailIndex - this.headIndex;
    }

    //checks if queue is empty or not
    isEmpty() {
        if (this.tailIndex - this.headIndex == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    //empty the queue
    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}
let queue = new Queue();

// add items to queue
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);

console.log("Queue after adding items: ");
console.log(queue.items);

// remove the first item
queue.dequeue();

console.log("Queue after deleting the first item:");
console.log(queue.items);

// show the first item
console.log("First item of the queue = " + queue.peek());

// empty the queue
queue.clear();

console.log("After clearing the queue: ");
console.log(queue.items);


// Activity 4
class BinaryTreeNode {
    constructor(key, value = key, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
    }
  
    get isLeaf() {
      return this.left === null && this.right === null;
    }
  
    get hasChildren() {
      return !this.isLeaf;
    }
  }
  
  class BinaryTree {
    constructor(key, value = key) {
      this.root = new BinaryTreeNode(key, value);
    }
  
    *inOrderTraversal(node = this.root) {
      if (node.left) yield* this.inOrderTraversal(node.left);
      yield node;
      if (node.right) yield* this.inOrderTraversal(node.right);
    }
  
    *postOrderTraversal(node = this.root) {
      if (node.left) yield* this.postOrderTraversal(node.left);
      if (node.right) yield* this.postOrderTraversal(node.right);
      yield node;
    }
  
    *preOrderTraversal(node = this.root) {
      yield node;
      if (node.left) yield* this.preOrderTraversal(node.left);
      if (node.right) yield* this.preOrderTraversal(node.right);
    }
  
    insert(
      parentNodeKey,
      key,
      value = key,
      { left, right } = { left: true, right: true }
    ) {
      for (let node of this.preOrderTraversal()) {
        if (node.key === parentNodeKey) {
          const canInsertLeft = left && node.left === null;
          const canInsertRight = right && node.right === null;
          if (!canInsertLeft && !canInsertRight) return false;
          if (canInsertLeft) {
            node.left = new BinaryTreeNode(key, value, node);
            return true;
          }
          if (canInsertRight) {
            node.right = new BinaryTreeNode(key, value, node);
            return true;
          }
        }
      }
      return false;
    }
  
    remove(key) {
      for (let node of this.preOrderTraversal()) {
        if (node.left.key === key) {
          node.left = null;
          return true;
        }
        if (node.right.key === key) {
          node.right = null;
          return true;
        }
      }
      return false;
    }
  
    find(key) {
      for (let node of this.preOrderTraversal()) {
        if (node.key === key) return node;
      }
      return undefined;
    }
  }

// Activity 5
class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  
    bfs(start, end) {
      const queue = [[start]];
      const visited = new Set();
  
      while (queue.length > 0) {
        const path = queue.shift();
        const vertex = path[path.length - 1];
  
        if (vertex === end) {
          return path;
        }
  
        if (!visited.has(vertex)) {
          visited.add(vertex);
  
          for (const neighbor of this.adjacencyList.get(vertex)) {
            if (!visited.has(neighbor)) {
              queue.push([...path, neighbor]);
            }
          }
        }
      }
  
      return null; // No path found
    }
  }
  
 
  const graph = new Graph();
  
  // Add vertices and edges to represent a simple network
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('D', 'F');
  graph.addEdge('E', 'F');
  
  // Perform BFS to find the shortest path between two nodes
  const shortestPath = graph.bfs('A', 'F');
  
  console.log("Shortest path from A to F:", shortestPath);
  