/*
Given a sorted array of integers, write a function called search.
This function accepts a value and returns the index where the value
passed to the function is located. If the value is not found, return -1.
*/

function search(array, value) {

    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (array[middle] < value) {
            min = middle + 1;
            console.log(`min is now ${min}`);
        } else if (array[middle] > value) {
            max = middle - 1;
            console.log(`max is now ${max}`)
        } else {
            return middle;
        }
    }

    return -1;
}


search([1,2,3,4,5,6], 4) // should return 3