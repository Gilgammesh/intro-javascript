// Arreglos en JS

const array = [1, 2, 3, 4];

let array1 = [ ...array, 5];

const array2 = array1.map((ele) => {
    return ele ** 2;
});

console.log(array);
console.log(array1);
console.log(array2);
