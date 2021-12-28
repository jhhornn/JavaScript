//Classes are blueprints in which we can define properties and behaviour

//We can model anything
//Creating a class that models an animal

//The constructor gets invoked when we call on the class

class Animal {
    constructor(name, age) {
        console.log(`${name} has been created`);
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    theAge() {
        console.log(`${this.name} is ${this.age} years`)
    }
    wakeUp() {
        console.log(`${this.name} is waking up`)
    }
}

const bingo = new Animal('bingo', 3); //new keyword is used to create new instances of the class
bingo.eat();
bingo.sleep();
bingo.wakeUp();
bingo.theAge();


//The concept of inheritance
console.log()
console.log('---Inheritance---')

class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    logBreed() {
        console.log(`The breed of the dog is ${this.breed}`);
    }
}

const jackie = new Dog('Pitbull');
jackie.logBreed();