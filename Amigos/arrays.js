//Array stores more than one value in a variable name
var firstName = "Oluwaseun";
var names = [
    "Oluwaseun",
    "John",
    "Oluwatobi",
    "Blessing"
];

console.log(names);
console.log("Index 0 - " + names[0]);
console.log("Index 1 - " + names[1]);
console.log("Index 2 - " + names[2]);
console.log("Index 3 - " + names[3]);

console.log("Size = " + names.length)

//Array Destructuring

console.log();
console.log('---Array Destructuring---');

const names2 = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];
const anna = names2[0];
const mariam = names2[1];
const joe = names2[2];

const [Anna, Mariam, Joe] = names2;
const [a, , b, ...theRest] = names2;

console.log(`${Anna} ${Mariam} ${Joe}`);
console.log(`${a} ${b}`);
console.log(theRest);
console.log(theRest.length);