class ArrayList {
    constructor(length = 0) {
        this.length = length;
        this.data = {};
    }
    push(item) {
        // var index = 0;
        // while(this.data.hasOwnProperty(index)) {
        //     index++;
        // }
        // this.data[index] = item;
        this.data[this.length] = item;
        this.length++;
        return item;
    } 
    pop() {
        var output = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length --;
        return output;
    }
    get(item) {
        return this.data[item];
    }
    delete(item) {
        let index = item;
        let output = this.data[item];

        while(index < this.length - 1) {
            this.data[index] = this.data[index + 1];
            index ++;
        }
        delete this.data[index];
        this.length --;
        return output;
    }
}

var arr = new ArrayList();
arr.push(5);
arr.push(10);
arr.push(15);
arr.push(20);
console.log(arr.get(1));
arr.delete(2)

console.log(arr.length, arr.data);
