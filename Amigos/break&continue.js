//Break and Continue
//Break and continue is used within loops
for (var i = 0; i <= 10; i++) {
    console.log(i)
    if (i == 5) {
        break;
    }
}
console.log()
for (var i = 0; i <= 10; i++) {
    if (i < 5) {
        continue;
    }
    console.log(i)
}