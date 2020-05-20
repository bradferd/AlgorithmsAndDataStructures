# Big O - Objects and Arrays
## How some built in methods for objects and arrays affect the performance of our code

# Objects

## When to use objects
* When you don't need any ordering
* When you don't need fast access / insertion and removal

## Big O of Objects

* Insertion - O(1)
* Removal - O(1)
* Searching - O(N)
* Access - O(1)

## Big O of Object Methods

* Object.Keys - O(N)
* Object.values - O(N)
* Object.entries - O(N)
* hasOwnProperty - O(1)

# Arrays

## When to use arrays
* When you need order
* When you need fast access / insertion and removal

## Big O of Arrays

* Insertion - It depends on position. If inserting at the beginning of an array, the amount of time it takes roughly grows in proportion with the size of the array. Inserting at the beginning is always less performant than adding to the end.
* Deletion - If deleting from the beginning of the array, proportionate to the size of the array because it would require reindexing of each element following the deletion. Deleting from the beginning is always worse than removing from the end.
* Searching - O(N)
* Access - O(1)

## Big O of Array Methods

* pop - O(1)
* push - O(1)
* shift - O(N)
* unshift - O(N)
* concat - O(N)
* slice - O(N)
* splice - O(N)
* sort - O(N * log<sub>2</sub>(N))
* forEach/map/filter/reduce/etc. - O(N)