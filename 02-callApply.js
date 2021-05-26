const normalPerson={
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        return this.firstName+" "+this.lastName;
    },
    chargeBill: function(amount){
        this.salary= this.salary-amount;
        return this.salary;
    }
}

const heroPerson={
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson={
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 30000
}

//normalPerson.chargeBill(150);
//console.log(normalPerson.salary)


//const heroChargeBill= normalPerson.chargeBill.bind(heroPerson);
//Eita ekta function hoye gese

//heroChargeBill(2000);
//console.log(heroPerson.salary);

normalPerson.chargeBill.call(heroPerson, 10000, 2000);
normalPerson.chargeBill.call(friendlyPerson, 100, 200, 300);
console.log(heroPerson.salary);
console.log(friendlyPerson.salary);



//normalPerson.chargeBill.apply(friendlyPerson,[10,20,10]);
//console.log(friendlyPerson);
