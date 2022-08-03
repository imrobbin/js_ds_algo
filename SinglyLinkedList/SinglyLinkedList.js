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
list.push(0);
list.push(1);
list.push(2);
list.push(3);
console.log('after push ', list.print());

list.pop();
list.pop();
list.pop();
console.log('after pop ', list.print());
list.unshift('10');

console.log('after unshift ', list.print());

console.log('final list \n ', list);
