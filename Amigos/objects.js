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
console.log()
console.log('---Enhanced Object Properties---')

const pricePropName = "PRICE"

const calculator = (name, price) => {
    return {
        name, //if the name equals the function property name,
        //use the name like that, js recognises it
        add(n1, n2) {
            return n1 + n2; //a function
        },
        [pricePropName.toLowerCase()]: price
    }
}

const calc = calculator('porpo', 4500)
console.log(calc.name)
console.log(calc.add(20, 20))
console.log(calc.price)


//Object Destructuring
console.log()
console.log('---Object Destructuring---')

const getUser = () => {
    return {
        name: 'John',
        surname: 'Doe',
        gender: 'male',
        address: {
            country: 'United States',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
                doorNumber: 22,
                street: 'LA st'
            }
        },
        age: 29
    }
};

const user = getUser();

// const name2 = user.name;
// const age = user.age;
// const country = user.address.country;
// const doorNumber = user.address.fullAddress.doorNumber;


const { name, age, address: { country: theCountry } } = user; //destructuring from user
const { address: { fullAddress: { doorNumber: number } } } = user;
console.log(name);
console.log(age);
console.log(theCountry);
console.log(number);