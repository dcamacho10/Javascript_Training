/*
Reversing an Array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in “Functions and Side Effects” on page 54, which variant do you expect to be useful in more situations? Which one runs faster?
*/

function reverseArray(array){
    let queue = [];
    for(let iterator = 0; iterator < array.length; iterator++){
        queue.unshift(array[iterator]);
    }
    return queue;
}

function reverseArrayInPlace(array){
    let size = array.length;
    for (let iterator = (size-1); iterator >= 0; iterator--){
        array.push(array[iterator]);
       // array.shift();
    }
    for (let iterator = 0; iterator < size; iterator++){
        array.shift(array[iterator]);
       // array.shift();
    }
    return array
}