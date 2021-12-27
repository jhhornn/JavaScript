var number = 0;

//postfix
console.log(number++); //returns 0 but has incremented it by 1 behind the scene
console.log(number); //returns 1 from the previous increment
console.log(number--); //returns 1 but decrements behind the scene
console.log(number); //returns 0 as a result of the previous decrement

console.log()
    //prefix
var numberTwo = 0;
console.log(++numberTwo); // increments and returns the new number
console.log(--numberTwo);