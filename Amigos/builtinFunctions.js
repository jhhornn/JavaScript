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

var person = {
    name: "Oluwaseun"
}


//Object.values and Object.keys are builtin functions
console.log(Object.values(person));
console.log(Object.keys(person));

console.log("Oluwaseun".toLowerCase())
console.log("Oluwaseun".indexOf('u'))