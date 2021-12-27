// While Loops
var names = [
    "Alex",
    "Jamila",
    "Joe",
    "Aisha",
    "Bob"
];

var number = 0;
while (number < 5) {
    console.log(number)
    number += 1;
}
var index = 0;

while (index < names.length) {
    console.log(names[index]);
    index = index + 1;
};

var condition = true;
while (condition) {
    console.log("hello");
    condition = false;
};

//Do while loops
//Difference between do while and while is that
// do while will always execute a piece of code at least once
//which is the piece of code inside the do block
//the code in the do block executes first and the 
// while serves as the condition that determines whether to continue or not
do {
    console.log("hello");
} while (false) {

}