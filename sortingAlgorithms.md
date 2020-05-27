# Sorting Algorithms
## What is sorting?
Sorting is the process of rearranding the items in a collection so that the items are in some kind of order.
* Sorting numbers from smallest to largest
* Sorting names alphabetically
* Sorting movies based on release year
* Sorting movies based on revenue

## Why do we need to learn this?
* Sorting is an incredibly common task, so it's good to know how it works.
* There are many different ways to sort things, and different techniques have their own advantages and disadvantages.
* It's a good challenge and comes up in interviews.

## JavaScript sorting method
* The built-in sort method accepts an optional comparator function
* You can use this comparator function to tell JavaScript how you want it to sort
* The comparator looks at pairs of elements (a and b), determines their sort order based on the return value.
  * If it return a negative number, a should come before b
  * If it returns a positive number, a should come after b
  * If it returns 0, a and b are the same as far as the sort is concerned
<pre>
    function numberCompare(num1, num2) {
        return num1 - num2;
    }

    [6, 4, 15, 10].sort(numberCompare);
</pre>

## Next: [Bubble Sort](bubbleSort.md)