let arr = [10, 20, 30, 40];

for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

class Passenger_Template2 {
    firstName : string;
    lastName : string;
    frequency : number; 

    constructor (firstName : string, lastName : string, frequency : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequency = frequency;
    }

    display(){
        console.log(this.firstName + " " + this.lastName + " " + this.frequency);
    }
}

var passenger_03 = new Passenger_Template2 ('Arnab', 'Chakraborty', 10);
passenger_03.display();
for(let item in passenger_03){
    console.log(item); // prints 'firstName' 'lastName' & 'frequency'
    console.log(passenger_03[item]); // prints the index values - 'Arnab' 'Chakraborty' & 10
}

// If you don't want to showcase the function in the console - 
for(let item in passenger_03){
    if(item !== "display"){
        console.log(item);
        console.log(passenger_03[item]);
    }
}



/* ------------------------------------------------------------------------------------------------------------------- */
// instance of : 
for(let item in passenger_03){
    if(passenger_03[item] instanceof Function){ // 'instanceof' is to check whether there is any 'item' typed as 'function'  
        continue;
    }
    else {
        console.log(item);
        console.log(passenger_03[item]);
    }
}