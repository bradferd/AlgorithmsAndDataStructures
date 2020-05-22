# Recursion
## What is recursion?

* A process (function) that calls itself
* JSON.parse/JSON.stringify are recursive functions!


## How can it be used?
* DOM traversal algorithms
* Object traversal
* It's sometimes a cleaner alternative to iteration
## Two essential component of a recursive function
1. The Base Case
      * The Condition where the recursion ends
      * This is the most important concept to understand
2. Different Input
    * In order to reach the base case, you need to be altering your input in some way with each iteration.

<code>
        
    function countDown(fromNumber) {
        if (fromNumber <= 0) {
            // here is our Base Case
            console.log("All Done!");
            return;
        }

        console.log(fromNumber);

        // altering our input with each iteration
        fromNumber--;
        countDown(fromNumber);
    }

</code>

<code>

    function sumRange (num) {
        // base case
        if(num === 1) return 1;
        // altering input each iteration
        return num + sumRange(num - 1);
    }

</code>




## The Call Stack
* In almost all programming languages, there is a built in data structure that manages what happens when functions are invoked (The call stack)
* Any time a function is invoked, it is placed (pushed) on the top of the call stack
* When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)
* When we write recursive functions, we are continually pushing new functions onto the call stack!
## Helper method recursion
* Involves a main outer function that calls an inside helper function that calls itself recursively.

<code>

        function collectOddValues(arr) {
        
            let result = [];


            // Helper method
            function helper(helperInput) {
                // establish a base case
                if(helperInput.length === 0) {
                    return;
                }

                if(helperInput[0] % 2 !== 0) {
                    result.push(helperInput[0]);
                }

                heper(hlperInput.slice(1));
            }

            helper(arr);

            return result;
        }

</code>

## Pure recursion
* Recursive function that is self-contained

<code>


        function collectOddValues(arr) {
            // create a new array with each iteration of function
            let newArray = [];
            // base case
            if(arr.length === 0) {
                return newArray;
            }

            if(arr[0] % 2 !== 0) {
                newArray.push(arr[0]);
            }
            // concatinating each array from every iteration of the function
            newArray = newArray.concat(collectOddValues(arr.slice(1)));
            return newArr;
        }
</code>

* For arrays, use methods like slice, concat, or the spread operator to make copies of arrays so you do not mutate them.
* Strings are immutable. You will need to use methods like slice, substr, or substring to make copies of strings.
* To make copies of objects use Object.assign, or the spread operator.