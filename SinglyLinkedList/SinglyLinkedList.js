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

    print() {
        let arr = [];
        let current = this.head;
        while (arr.length !== this.length) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.print();
