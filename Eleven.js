/*
Flattening

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

*/

    function reduce(array, combine, start) {
        let current = start;  
        for (let element of array){
                current = combine(current, element);
        }  
    return current;
}

//console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

reduce([[2, 3],[4, 5], [6, 7], [8,9]], (a, b) => a.concat(b), []);