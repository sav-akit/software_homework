// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster {
    constructor(name) {
        this.owner ='';
        this.name = name;
        this.price = 15;
    }
    WheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
}
const Ham = new Hamster('Beetle');
const Ham1 = new Hamster('Chole');
console.log(Ham);
console.log(Ham1);
Ham.WheelRun();
Ham.eatFood();
console.log(Ham.getPrice());
console.log('**********************');

// attributes:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hello ${this.name}, Welcome!`)
    }
    eat() {
        this.weight += 1;
        this.mood += 1;
    }
    exercise() {
        this.weight -= 1;
    }
    ageUp() {
        this.age += 1;
        this.height += 1;
        this.weight += 1;
        this.mood -= 1;
        this.bankAccount += 10;
    }
    eat(num) {
        this.weight += num;
        this.mood += 1;
    }
    exercise(num) {
        this.weight -= num;
    }
    ageUp(num){
        while(this.age < num){
            this.age += 1;
            this.height += 1;
            this.weight += 1;
            this.mood -= 1;
            this.bankAccount += 10;
        }
    }
    buyHamster(hamObj) {
       this.hamsters.push(hamObj);
       this.mood += 10;
       this.bankAccount -= hamObj.getPrice(); 
    }
}
const Person1 = new Person('Sav');
console.log(Person1);
console.log(Person1.getName());
console.log(Person1.getAge());
console.log(Person1.getWeight());
Person1.greet();
Person1.eat();
console.log(Person1);
Person1.exercise()
console.log(Person1);
Person1.ageUp();
Person1.ageUp();
Person1.ageUp();
Person1.ageUp();
console.log(Person1);
Person1.buyHamster(Ham);
console.log(Person1.bankAccount);
console.log(Person1.hamsters)
Person1.buyHamster(Ham1);
console.log(Person1.hamsters);
console.log(Person1.bankAccount);
console.log(Person1);

const Timmy = new Person('Timmy');
Timmy.ageUp(5);
//console.log(Timmy.getAge());
Timmy.eat(5);
Timmy.exercise(5);
Timmy.ageUp(9);
//console.log(Timmy.getAge());
const Gus =new Hamster('Chole');
//console.log(Gus);
Gus.owner = 'Timmy';
//console.log(Gus);
Timmy.ageUp(15);
Timmy.buyHamster(Gus);
Timmy.eat(2);
Timmy.exercise(2);
console.log(Timmy)
console.log(Timmy.hamsters);































