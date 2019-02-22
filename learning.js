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
//console.log(BubbleSort([15, 2, 4, 8, 6, 12, 5, 11, 3, 1, 10]));
//console.log(BubbleSort([11, 8, 14, 3, 0, 2, 7, 1, 6]));


function insertionSort(arr) {
    const A = Array.from(arr);
    var i, key, j;
    for (j = 1; j < A.length; j++) {
        key = A[j];
        i = j - 1;
        while (i > 0 && A[i] > key) {
            A[i + 1] = A[i];
            i = i - 1;
            A[i + 1] = key
        }
    }
    return A;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));