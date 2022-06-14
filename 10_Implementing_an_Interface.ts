interface flightTemplate {
    flightModel : number;
    from : string;
    to : string;

    display() : void;
}

class Flight implements flightTemplate {
    flightModel : number;
    from : string;
    to : string;

    flightTime : number; // new property initialized, not in the interface.

    constructor(flightModel : number, from : string, to : string, flightTime : number){
    this.flightModel = flightModel;
    this.from = from;
    this.to = to;
    this.flightTime = flightTime;
    }

    display(): void {
        console.log("Flight " + this.flightModel + " is going to depart from " + this.from + " to " + this.to + " and the flight duration is total " + this.flightTime + " hours"  );
    }
}

var newFlight = new Flight(1010, 'Dubai', 'New York', 12);
newFlight.display();