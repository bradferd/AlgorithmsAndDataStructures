/* 
Write a function called same which accepts two arrays.
The function should return true if every value in the array has it's corresponding value
squared in the second array. The frequency of values must be the same.
*/


function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Object to count frequency of individual values in the array
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // for each value in array 1 we are going to add 1 if it's already present,
    // or initialize it to 1
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // able to quickly compare the frequency of values in the two objects
    for (let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1,2,3], [1, 9])) // false
console.log(same([1, 2, 1], [4,4,1])) // false (must be same frequency)


/*
Given two strings, write a function to determine if the second string is an
anagram of the first. An anagram is a word, phrase, or name formed by rearranging 
the letters of another, such as cinema, formed from iceman
*/

function validAnagram(arr1, arr2) {
    // make suer length of the two strings are equal before performing check
    if (arr1.length !== arr2.length){
        return false;
    }

    // create a variable object to count the frequency of each character
    const lookup = {};
    // loop through first string to count frequency of each character
    for(let i =  0; i < arr1.length; i++) {
        let char = arr1[i];

        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
    console.log(lookup);

    // quickly able to compare characters in second string to the object
    for (let i = 0; i < arr2.length; i++) {
        let letter = arr2[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram('aaz', 'zza'));