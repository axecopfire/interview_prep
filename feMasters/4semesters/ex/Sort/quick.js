function QuickSort (arr) {
    if(arr.length < 2) {
        return arr;
    }

    var pivot = arr[arr.length - 1],
        left = [],
        right = [];
        
    for(var i = 0; i < arr.length - 1; i ++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return ([].concat(
        QuickSort(left), 
        pivot,
        QuickSort(right) ))
}

console.log(QuickSort([5, 10, 20, 13, 100, 5, 15, 0]));