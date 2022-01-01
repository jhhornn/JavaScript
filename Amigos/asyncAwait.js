/*Combines all the generator and promises function in a
more comprehensive function using the async keyword */

async function logName(name) {
    console.log(name);
    //1. we can yiels promises using the await
    //2. The function returns a promise
    return name
}

logName("Oluwaseun").then(res => {
    console.log("The result from async function = " + res);
})