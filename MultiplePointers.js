// Write a function called sumZero which accepts a sorted
// array of integers. The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair
// does not exist

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))


// Implement a function called countUniqueValues,
// which accepts a sorted Array, and counts the 
// unique values in the Array. There can be negative
// numbers in the Array, but it will always be sorted.

function countUniqueValues(values) {
    //Edge Case: account for empty array
    if(values.length === 0) {
        return 0;
    }
    // iterator variable which will also hold the number of unique values
    let i = 0;
    // Initialize a second iterator for the comparison
    for (let j = 1; j <= values.length; j++) {
        // if the two numbers are equal, move on to the next numbers
        if (values[i] !== values[j]){
            i++;
            values[i] = values[j];
        }
        console.log(i, j);
    }

    return i;
}

countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7]);