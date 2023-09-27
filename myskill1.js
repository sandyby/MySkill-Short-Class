/* 3 Types of Variables*/

let letVariable = "Sandy";
const constVariable = "Bonfilio"; // Can't reassign values
var varVariable = "Yuvens"; // Not Recommended

console.log(letVariable); // Prints "Sandy"
console.log(constVariable); // Prints "Bonfilio"
console.log(varVariable); // Prints "Yuvens"

letVariable = "Bonfilio"; // Changes "Sandy" to "Bonfilio"
constVariable = "Sandy"; // TypeError

/* Functions */

function sumOfTwoIntegers(int_a, int_b) { // functioon "name of the function"(parameter1, parameter2, ... ) { commands }
    return int_a + int_b; // return the sum of int_a and int_b
}

console.log(sumOfTwoIntegers(5, 7)); // Prints 5 + 7 = 12

/* Arrays */

let colorsArray = ["Merah", "Kuning", "Hijau", "Biru", "Ungu"];
console.log(colorsArray[2]); // Prints "Hijau" because an array is 0-indexed

/* Objects */

let animals = {hewan: "Ayam", tipe: "Omnivora"}; // Properties: value
console.log(animals.hewan); // Prints "Ayam"

/* Objects in an Array */

let animalsArray = [{hewan: "Harimau", tipe: "Karnivora"}, {hewan: "Sapi", tipe: "Herbivora"}]; // Objects in an Array are separated with commas

/* Calling an Object Prop in an Array */

let animalsType = animalsArray[0].tipe; // Selects the first object's property "tipe" in the array
console.log(animalsType); // Prints "Karnivora"

/* Conditionals */

const numOne = 10;

if (numOne >= 10) { // Checks if numOne is greater than or equal to 10
    console.log(true);  // Prints true because 10 is indeed greater than or equal to 10
} else {
    console.log(false); // Prints false if the condition is not fulfilled
}

/* Loops or Repetition 

-- Factorial Of A Number -- */

const inputNumber = 5;
let factorial = 1;

if (inputNumber < 0) {
    console.log("Invalid Number"); // If inputNumber is negative integers, prints "Invalid Number"
} else if (inputNumber <= 1) {
    console.log(1); // If inputNumber is 0 or 1, it will automatically prints 1 as the factorial
} else {
    for (let i = inputNumber; i > 1; i--) { // Keeps multiplying the value of factorial to i decremented in each loops.
        factorial *= i;
    }
    console.log(factorial); // Prints 5 * 4 * 3 * 2 * 1 = 120
}

/* Summation of Numbers in an Array */

// let numArrays = [2, 7, 3, 6, 9];
let numArrays = [1, 4, 5, 8, 101]; // The summation of these numbers should be 119
let sum = 0;

for (let i = 0; i < numArrays.length; i++) { // Keeps adding the numbers from index 0 until the length of numArrays
    sum += numArrays[i];                     // Using JavaScript built-in method
}    
console.log(sum); // Prints 1 + 4 + 5 + 8 + 101 = 119