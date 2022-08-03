class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add a new node at the end of the linked list
    push(value) {
        if (value === undefined) return 'Please provide a value';

        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail = this.tail.next = newNode;
        }
        this.length++;
        return this;
    }

    // remove a node from the end of the linked list
    pop() {
        if (this.length === 0) return undefined;

        const poppedNode = this.tail;
        let secondLastNode = this.getSecondLastNode();
        this.tail = secondLastNode;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) this.head = this.tail = null;

        return poppedNode;
    }

    // add a node at the start of the linked list
    unshift(value) {
        if (value === undefined) return 'Please provide a value';

        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // remove a node form the start of the linked list
    shift() {
        if (this.length === 0) return false;

        let poppedNode = this.head;
        this.head = poppedNode.next;
        this.length--;

        if (this.length === 0) this.head = this.tail = null;

        return poppedNode;
    }

    // access a node from the linked list based on it's position
    get(position) {
        if (position === undefined) return 'Please provide a position to get';

        if (position < 0 || position >= this.length) return false;

        let nodeFound = this.head;
        let counter = 0;
        while (counter !== position) {
            nodeFound = nodeFound.next;
            counter++;
        }
        return nodeFound;
    }

    // update value of a node based on it's position
    set(position, value) {
        if (position === undefined || value === undefined) return 'Please provide a position and value to set';

        if (position < 0 || position >= this.length) return false;

        let node = this.get(position);
        node.value = value;
        return true;
    }

    // helper function to get second last node from linked list
    getSecondLastNode() {
        let current = this.head;
        let secondLast = current;
        while (current.next) {
            secondLast = current;
            current = current.next;
        }
        return secondLast;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (arr.length !== this.length) {
            arr.push(current.value);
            current = current.next;
        }
        // console.log(arr);
        return arr;
    }
}

let list = new SinglyLinkedList();
list.push(10);
list.push(11);
list.push(12);
list.push(13);
console.log('after push ', list.print());

// list.pop();
// list.pop();
// console.log('after pop ', list.print());

// list.unshift('10');
// console.log('after unshift ', list.print());

// const shiftedNode = list.shift();
// console.log('shift result \n', shiftedNode, '\n', list.print());

const getResult = list.get(1);
console.log('get result ', getResult);

// const setResult1 = list.set(-4, '111');
// console.log('set result ', setResult1);
// const setResult2 = list.set(0, '111');
// console.log('set result ', setResult2);

console.log(list.print());
// console.log('\n final list \n ', list);
