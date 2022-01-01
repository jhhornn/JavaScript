/*The promise object is used for asynchronous
computations

represents a value which may be available NOW, or in the
FUTURE, or NEVER

Three promises state
1. Pending: initial state, not fulfilled or rejected
2. Fulfilled: meaning that the operation completed successfully.
3. Rejected: meaning that the operation failed.


Promise object
fulfilled: .then method
rejected: .catch method
*/

//Creating Promises

import fetch from "node-fetch";
import pkg from "bluebird";
const { coroutine: co } = pkg;



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data back from the server");
    }, 3000);
    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000);
})

promise.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})

//Promise.all
console.log();
console.log('---Promise.all---');

const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Anna", "Jones", "Ali", "Jake"]);
    }, 3000);
    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000);
})

const surnamesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Williams", "Bravo", "Mohammado", "Smith"]);
    }, 3000);
    setTimeout(() => {
        reject("no data back from the server, there was an error");
    }, 5000);
})

//We want to display names and surname at the same time(full name)
//We can do this by passing the 2 promises to the promise.all method
//Then let the promise resolve the promises. We either get the2 or nothing(all or nothing rule)

Promise.all([namesPromise, surnamesPromise]).then(data => {
    const [names, surnames] = data;
    for (var i = 0; i < names.length; i++) {
        const name = names[i];
        const surname = surnames[i];
        console.log(`${name} ${surname}`);
    }
}).catch(error => {
    console.log(error)
})


//Promise and Fetch API
console.log();
console.log('---Promise and Fetch API---');

const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => {
            console.log(JSON.stringify(randomUsers.results.length));
            randomUsers.results.forEach(user => {
                const { gender, email } = user;
                console.log(`${gender} - ${email}`)
            });
        });
    });
};

getRandomUsers(10);

console.log();
console.log('---Promise and Generator---');

const getRandomUsers2 = co(function*(n) {
    const fetchRandomUsers2 = yield fetch(`https://randomuser.me/api/?results=${n}`);
    const data2 = yield fetchRandomUsers2.json();
    return data2
});

getRandomUsers2(10).then(randomUsers2 => {
    randomUsers2.results.forEach(user => {
        const { gender, email } = user;
        console.log(`${gender} - ${email}`)
    })
}).catch(err => log);