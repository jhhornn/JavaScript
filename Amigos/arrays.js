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

// Multiple Dimensional Array with indexes
const debbyArray = [[1,2,3], 
                    [4,5,6], 
                    [7,8,9] 
                    [[10,11,12], [13,14,15],16,17]
                    [18, 19, 20],
                ];

debbyArray[3][0][1]; //[13,14,15]
debbyArray[4]; // [18,19,20]
debbyArray[3][0]; //[10,11,12]
