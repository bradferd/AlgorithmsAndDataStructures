# Merge Sort
- It is a combination of two things - Merging and Sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
- This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

## Pseudocode
- Create an empty array, take a look at the smallest values in each input array.
- While there are still values we haven't looked at...
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
  - Once we exhaust one array, push in all remaining values from the other array

<pre>
    function merge(arr1, arr2) {
        let results = [];

        let i = 0, 
            j = 0;

        while(i < arr1.legnth && j < arr2.length){
            if (arr2[j] > arr1[i]){
                results.push(arr1[i]);
                i++
            } else {
                results.push(arr2[j]);
                j++;
            }
        }

        while(i < arr1.length){
            results.psuh(arr1[i])
            i++;
        }

        while(j < arr2.length) {
            results.push(arr2[j])
            j++;
        }

        return results;
    }

    function mergeSort(arr) {

        if(arr.length <= 1) return arr;

        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));

        return merge(left, right);
    }
</pre>

# Big O
## Time Complexity
- O(n log n)

## Space Complexity
- O(n)
