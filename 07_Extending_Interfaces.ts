interface Exterior {
    colour : string;
    no_of_doors : number;
}

interface Interior {
    seats : number;
    auto : boolean;
}

interface Car extends Exterior, Interior {
    company : string;
    model_name : string;
    year_of_manufacturing : number;
}

var myCar : Car = {
    company : "Hyundai",
    model_name : "Verna",
    year_of_manufacturing : 2022,

    colour : "Black",
    no_of_doors : 4,

    seats : 4,
    auto : false
}