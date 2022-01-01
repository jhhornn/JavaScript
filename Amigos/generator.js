/*A generator allows us to write a function that can be paused

The syntax:
function* name(){
   const variable = yield value;
   gen.next()
   grn.next().value
   gen.next().done
}
*/

const getNumbers = function*() {
    yield 1;
    yield "hello";
    yield true;
    yield { name: 'Alex' };
}

const numbersGen = getNumbers();

console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(JSON.stringify(numbersGen.next().value));
console.log(numbersGen.next().value);


console.log();
console.log('---Generator Function---');

const getNumbers = function*(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        yield numbers[i]
    }
}

const getNumbersGen = getNumbers(["This", "is", "how", "to", "keep", "a", "jobless", "person", "busy"]);

const interval = setInterval(() => {
    const next = getNumbersGen.next();
    if (next.done) {
        console.log("this generator is done");
        clearInterval(interval);
    } else {
        const number = next.value;
        console.log(number)
    }
})