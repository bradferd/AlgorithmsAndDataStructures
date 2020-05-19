# Big O Notation
## Establishing a framework to talk about code
### What is the need for Big O notation?

* Imagine we have multiple implementations of the same function. How can we determine which one is the "best"?
* Important to have a precise vocabulary to talk about how our code performs
* Useful for discussing trade-offs between different approaches
* When code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
* Interviews!

### What is Big O notation?

* Big O allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
* We don't care about any formal details, only the trends.

### Big O Expressions
* Constants don't matter
    * O(2n) is the same as O(n)
    * O(500) is the same as O(1)
* Smaller terms don't matter
    * O(n + 10) is the same as O(n)
    * O(1000n + 50) is the same as O(n)
* Arithmetic operations are constant
* Variable assignment is constant
* Accessing elements in an array or object is constant
* In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
### Time Complexity
* Analyzing the runtime of an algorithm as the size of the inputs increase

### Space Complexity
* How much additional memory do we need to allocate in order to run the code in our algorithm?
* Most primitives (booleans, numbers, undefined, null) are constant space
* Strings require O(n) space (where n is the string length)
* Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

### What is a logarithm?
* The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.
* Certain searching algorithms have logarithmic time complexity.
* Efficient sorting algorithms involve logarithms.
* Recursion sometimes involves logarithmic time complexity.