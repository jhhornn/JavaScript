//Classes are blueprints in which we can define properties and behaviour

//We can model anything
//Creating a class that models an animal

//The constructor gets invoked when we call on the class

//Ststic method allows us to create metrhods or properties that belong to the actual 
//class and not individual method. We don't have to create an instance
//to invoke a static method

console.log()
console.log('---Classes and Static Method---')
class Animal {
    constructor(name, age) {
        console.log(`${name} has been created`);
        this.name = name;
        this.age = age;
    }
    static iAmAStaticMethod() {
        console.log('I am a static method inside of an animal class')
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

Animal.iAmAStaticMethod()

const bingo = new Animal('bingo', 3); //new keyword is used to create new instances of the class
bingo.eat();
bingo.sleep();
bingo.wakeUp();
bingo.theAge();


//The concept of inheritance
console.log()
console.log('---Inheritance---')

class Dog extends Animal { //this passes the properties in the parent(animal)
    //to the class Dog. This concept is known as inheritance
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed;
    }
    logBreed() {
        console.log(`The dog, ${this.name} of breed ${this.breed} is ${this.age} years`);
    }
}

const jackie = new Dog('Jackie', 3, 'Pitbull');
jackie.logBreed();