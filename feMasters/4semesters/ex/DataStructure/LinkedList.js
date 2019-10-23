function Node (data) {
    this.data = data;
    this.next = null;
}

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(data) {
        var node = new Node(data);
        this.length++;

        if(!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }
    remove(data) {
        this.length --;
        if(data = this.head.data) {
            let temp = this.head;
            this.head = this.head.next;
            return temp;
        }
        var node = this.head;
        var prev = node;
        
        while(node.data !== data) {
            if(node === this.tail) return undefined;
            prev = node;
            node = node.next;
        }
        
        prev.next = node.next;
        return node;
        
    }
    get(index) {
        if(index >= this.length) return null;
        
        var current = this.head;
        var i = 0;

        while(i < index) {
            i++;
            current = current.next;
        }
        return current.data;
    }
    read() {
        let output = [];
        var node = this.head;
        while(node) {
            output.push(node.data);
            node = node.next;
        }
        return output;
    }

}

var ll = new LinkedList();
ll.add(10);
ll.add(15);
ll.add(20);
console.log(ll.get(3))
// console.log(ll.read());
// ll.remove(15);
// console.log(ll.read());
// ll.remove(20)
// console.log(ll.read());
// ll.add(15);
// ll.add(20);
// ll.remove(10)
// console.log(ll.read());