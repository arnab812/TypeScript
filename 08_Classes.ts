// => Creating a class : 
class Passenger {
    firstName : string;
    lastName : string;
    frequency : number; 
}

var passenger_01 = new Passenger();
console.log(passenger_01.firstName + " " + passenger_01.lastName + " " + passenger_01.frequency);

// showcasing output as "undefined undefined undefined"


// => Creating a constructor : 

// Constructor : A "constructor" is a function using which we can initialize the object properties, right when the object is created.

class Passenger_Template  {
    firstName : string;
    lastName : string;
    frequency : number; 

    constructor (firstName : string, lastName : string, frequency : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequency = frequency;
    }
}

var passenger_02 = new Passenger_Template ('Arnab', 'Chakraborty', 10);
console.log("Welcome " + passenger_02.firstName + " " + passenger_02.lastName + ". Sir, in 2022 you have already visited Indigo " + passenger_02.frequency + " times.")
