const person = {
    name: 'Alex',
    cars: ['ferrari', 'lambo'],
    toString: function() {
        //console.log(`${this.name} has ${this.cars}`)
        //const that = this;
        this.cars.forEach(car => {
            console.log(`${this.name} has ${car}`) //.bind(this) can also be used instead of that
        })
    }
}

person.toString();