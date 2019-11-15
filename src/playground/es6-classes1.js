class Person {
    constructor(name = 'First Last', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //return 'Hello ' + this.name;
        return `Hello, I am ${this.name}`;
    }

    getDescription () {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            return `${this.name} is ${this.age} year(s) old and has a ${this.major} major.`
        }
        
        return description;
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super (name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}

const me = new Person('Nikhil Kapre', 43);
console.log(me);

const other = new Person();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());

const stud = new Student('Gaurav Gupta', 42, 'Electrical Engineering');
console.log(stud);
console.log(stud.getGreeting());
console.log(stud.getDescription());
console.log(stud.hasMajor());

const newStud = new Student();
console.log(newStud);
console.log(newStud.getGreeting());
console.log(newStud.getDescription());
console.log(newStud.hasMajor());

const trav = new Traveler('Nikhil Traveler', 43, 'Hyderabad');
console.log(trav);
console.log(trav.getGreeting());

