//Loop allows you to execute a piece of code over and over until a certain condition is reached
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

var names = [
    "Oluwaseun",
    "John",
    "Oluwatobi",
    "Blessing",
    "Awosise"
];
for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}
console.log();
//Other types of loop
//Type forof
for (const name of names) {
    console.log(name);
}
console.log();

//Tuse forEach

names.forEach(function(name) {
    console.log(name)
})