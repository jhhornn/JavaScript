//Objects and nested objects
var person = {
    firstName: "Oluwaseun",
    age: 21,
    isMale: true,
    balance: 100.32,
    dob: new Date(2000, 2, 31).toJSON(),
    address: {
        city: "Ibadan",
        postCode: "200201"
    }
};


//onsole.log(person)
console.log(person.firstName)
console.log(person.age)
console.log(person.balance)
console.log(person.address.city)
console.log(Object.values(person))
console.log(Object.values(person))
console.log(JSON.stringify(person))

//Enhanced Object Properties
console.log('---Enhanced Object Properties---')

const calculator = name => {
    return {
        name //if the name equals the function proprty name,
        //use the nam elike that, js recognises it
    }
}

const calc = calculator('porpo')
console.log(calc.name)