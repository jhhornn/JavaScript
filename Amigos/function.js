// Functions
//A function that takes two numbers and returns the sum

function addNumbers(num1, num2) {
    var addition = num1 + num2;
    return addition;
}

var result1 = addNumbers(3, 4);
var result2 = addNumbers(10, 10);

console.log(result1);
console.log(result2);



//Arrow functions
//Looks like a one-liner
//teh use of curly brackets depend on how long 
//the body of your function is

const hello = () => {
    const es6 = 'ES6';
    return `Hello ${es6}`;
};

const powers = [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));


const add = (n1, n2) => n1 + n2;

const milesToKm = miles => miles * 1.60934;

console.log(hello());
console.log(powers);
console.log(add(100, 100));
console.log(milesToKm(100));