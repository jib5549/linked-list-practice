class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data)
        let current;

        // if empty, then make it the head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head
            
            while(current.next) {   
                current = current.next
            }

            current.next = node;
        }

        this.size++;
    }

    // Insert at index - anywhere in between

    // Get at index

    // Remove at index

    // Clear the list

    // Print list data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.printListData();