# Bubble Sort
## A sorting algorithm where the largest values bubble up to the top

## Swapping
* Bubble sort and many other algorithms involve some type of swapping functionality
* How can we accomplish this in JavaScript?
<pre>
    // ES5
    function swap(arr, idx1, idx2) {
        var temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    // ES6
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
</pre>

## Bubble Sort Pseudocode
* Start iterating through the array with a variable called i
* Start an inner loop with a variable named j from the beginning until i - 1
* If arr[j] is greater than arr[j + 1], swap those two values
* Return the sorted array

<pre>
    function bubbleSort(arr) {
        
        for(var i = 0; i < arr.length; i++) {

            for(var i = 0; i < arr.length; i++) {

                if(arr[j] > arr[j + 1]){

                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1]  = temp;
                }
            }
        }
        return arr;
    }
</pre>

## Optimization
* We realize that once the algorithm is no longer swapping values, the array is sorted.
* We can add a check or flag to break out of the loop once the sorting is finished.

<pre>
    function bubbleSort(arr) {
        
        var noSwaps;

        for(var i = arr.length; i > 0; i--) {

            noSwaps = true;

            for (var j = 0; j < i - 1; j++) {

                if(arr[j] > arr[j + 1]) {

                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    noSwaps = false;
                }
            }
            if (noSwaps) break;
        }
        return arr;
    }
</pre>

* Time Complexity for bubbleSort is generally O($n^2$)
* Best Case time complexity for bubbleSort is O(n)