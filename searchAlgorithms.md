# Search Algorithms

## Linear Search
* Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.
* indexOf, includes, find, findInex - all examples of methods that incorporate linear search

<pre>
    function linearSearch(arr, val) {

        /* loop through the array and check if the current array element
        is equal to the value */
        for(var i = 0; i < arr.length; i++) {

            // If it is, return the index at which it is found
            if(arr[i] === val) return i;
        }

        // If the value is never found, we return -1 in this case
        return -1;
    }
</pre>
* Big O
  * Best case is O(1)
  * Average is O(N)
  * Worst case is O(N)

## Binary Search
* Binary search is a much faster form of search
* Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
* Binary search only works on sorted arrays!
* Divide and Conquery strategy
<pre>
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;

    // Create a pointer in the middle
    var middle = Math.floor((start + end) / 2);

    // While the left pointer comes before the right pointer: 
    while(arr[middle] !== elem && start <= end) {

        // If the value is too large, move the right pointer down
        if(elem < arr[middle]) {
            end = middle - 1;
        } else {

            // if the value is too small, move the left pointer up
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
// If you find the value you want, return the index
// If you never find the value, return -1
return arr[middle] === elem ? middle : -1;
}
</pre>

* Big O of Binary Search
  * Best Case - O(1)
  * Worst and Average Case - O(log n)

## String Search

* In a case where you want to count the number of times a smaller string appears in a longer string
* A straightforward approach involves checking pairs of characters individually

<pre>
function naiveSearch(long, short) {
    var count = 0;

    // Loop over the longer string
    for(var i = 0; i < long.length; i++) {

        // Loop over the shorter string
        for (var j = 0; j < short.length; j++) {
            
            // If the characters don't match, 
            // break out of the inner loop
            if (short[j] !== long[i+j]) break;
            
            // If you complete the inner loop 
            // and find a match, incremet the count of matches
            if (j === short.length - 1) count++;
        }
    }
    return count;
}
</pre>