let name = {
    firstname: "Arpit",
    lastname: "Adlakha",

}

const printFullName = function(hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown  + ", " + state);
}

printFullName.call(name, "Karnal", "Haryana");

let name2 = {
    firstname: "Sachin",
    lastname: "TendulKar"
}

// function borrowing

printFullName.call(name2, "Mumbai", "Maharashtra");

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

let printmyName = printFullName.bind(name2, "Mumbai", "Maharashtra");

printmyName();

let multiply = function(x) {
    return function(y) {
        console.log(x, y);
    }
}

let multiply = function(x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2 , 3);

multiplyByTwo(5)

