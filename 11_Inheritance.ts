/* 
=> Inheritance : 
    Inheritance is the process of defining a new object with the help of an existing object
    Accessing existing objects functionality.
    Updating existing objects functionality.

    Re-Usability & IS-A relation 
    IS-A is a term to refer to inheritance. 
*/

// => Extending a class : 

// Parent class -> 
class BMW {
    make : string;
    model : string;
    manufacturing_year : number; 

    constructor(make : string, model : string, manufacturing_year : number){
        this.make = make; 
        this.model = model;
        this.manufacturing_year = manufacturing_year;
    }

    commonEnginefunctionality(){
        console.log("Common Functionality");
    }

    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
}


// Child class 1 -> 
class ThreeSeries extends BMW {
    cruiseControlEnabled : boolean;

    // Initializing the properties using "constructor" - 
    constructor(make : string, model : string, manufacturing_year : number, cruiseControlEnabled : boolean){
        // Constructors for derved classes must contain a "super" call -
        super(make, model, manufacturing_year) // ***** invoke all the parent class properties.
        // 'super' automatically calls the parent class constructor and all the parent class properties. 

        this.cruiseControlEnabled = cruiseControlEnabled;
    }
    
}

// Child class 2 -> 
class FiveSeries extends BMW {
    ParkingAssistEnabled : boolean;

    constructor(make : string, model : string, manufacturing_year : number, ParkingAssistEnabled: boolean){
        // Constructors for derved classes must contain a "super" call -
        super(make, model, manufacturing_year) // ***** invoke all the parent class properties.
        // 'super' automatically calls the parent class constructor and all the parent class properties. 

        this.ParkingAssistEnabled = ParkingAssistEnabled;
    }
}

// Creating objects of these classes : 

// Object 1 -> 
var Object_Model_ThreeSeries = new ThreeSeries('BMW', '328i', 2012, false) // the object is created. 
console.log(Object_Model_ThreeSeries.make);
console.log(Object_Model_ThreeSeries.model);
console.log(Object_Model_ThreeSeries.manufacturing_year);
console.log(Object_Model_ThreeSeries.cruiseControlEnabled);

// Object 2 -> 
var Object_Model_FiveSeries = new FiveSeries('BMW', '535i', 2012, false) // the object is created. 
console.log(Object_Model_FiveSeries.make);
console.log(Object_Model_FiveSeries.model);
console.log(Object_Model_FiveSeries.manufacturing_year);
console.log(Object_Model_FiveSeries.ParkingAssistEnabled);