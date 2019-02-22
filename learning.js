/**
 * Sort an array
 * @param {*} arr 
 */
function BubbleSort(arr) {
    const sortedArray = Array.from(arr);
    let swap;
    do {
        swap = false;
        for (let i = 1; i < sortedArray.length; i++) {
            if (sortedArray[i - 1] > sortedArray[i]) {
                [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
                console.log([sortedArray[i], sortedArray[i - 1]] + ' = ' + [sortedArray[i - 1], sortedArray[i]])
                swap = true;
            }
            console.log(sortedArray);
        }
        console.log('\n');
    }
    while (swap)
    return sortedArray;
}
console.log(BubbleSort([15, 2, 4, 8, 6, 12, 5, 11, 3, 1, 10]));

function InsertionSort(arr) {
    var A = Array.from(arr);
    var i, j, key
    for (j = 1; j < A.length; j++) {
        key = A[j];
        i = j - 1;
        while (i > -1 && A[i] > key) {
            A[i + 1] = A[i];
            i = i - 1;
        }
        A[i + 1] = key;
    }
    return A;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));
var result = InsertionSort([5, 2, 4, 3, 1, 6])
console.log(result);