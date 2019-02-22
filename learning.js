
arrayToSort = [15, 2, 4, 8, 6, 12, 5, 11, 3, 1, 10];

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
                console.log(sortedArray)
            }
            //console.log(sortedArray);
        }
        console.log('\n');
    }
    while (swap)
    return sortedArray;
}
console.log('\n[Bubble Sort]');
console.log(BubbleSort(arrayToSort));

function InsertionSort(arr) {
    var sortedArray = Array.from(arr)
    var i, j, key
    for (j = 1; j < sortedArray.length; j++) {
        key = sortedArray[j];
        i = j - 1;
        while (i > -1 && sortedArray[i] > key) {
            sortedArray[i + 1] = sortedArray[i];
            i = i - 1;
        }
        sortedArray[i + 1] = key;
    }
    return sortedArray;
}
console.log('\n[Insert Sort]');
var result = InsertionSort(arrayToSort)
console.log(result);