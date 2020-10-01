'use strict'


const promi = require('./newFile');

(async () => {
    console.log(await promi())
})();


const tp = new Promise((resolve, reject) => {
    setTimeout(() => resolve(100), 1000);
})

// tp.then((response) => {console.log(response)});
const someRandomFunction = async () => {
    const abc = tp;
    return abc;
}

console.log(someRandomFunction().then(response => console.log(response)));

hoisting();

function hoisting() {
    console.log("I am hoisted before anything else");
}
var expression = function () {
    console.log("I am hoisted");
}

// console.log(abc);
// console.log(tpr);
expression();
// printName("arpit");
// printChar('c');


//
// let printName = function (name) {
//     console.log("The name passed is" + name);
// }

const printChar = function (c) {
    let PI;
    console.log("the character is printer" + c);
    PI = 3.12;
}

let abc = "howdy";
// const tpr = "chowdy";





