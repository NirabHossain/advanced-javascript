class Person{
    constructor(firstName, lastName, salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }
}


const heroPerson = new Person('Hero', 'Alam', 20000);
const friendlyPerson = new Person('Hero', 'Alam', 25000);
console.log(heroPerson," ",friendlyPerson );
