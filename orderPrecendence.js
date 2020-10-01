

var double;

function double(num) {
    return (num*2);
}

console.log(typeof double);

// var double = 22;

//
// var Frodo = new Hobbit();
//
// Frodo.height = 100;
// Frodo.weight = 300;
//
// console.log(Frodo);

class Hobbit {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

// var Square = new Polygon();
// Square.height = 10;
// Square.width = 10;
// console.log(Square);
//
// var Polygon = class {
//     constructor(height, weight) {
//         this.height = height;
//         this.width = width;
//     }
// }



const start = process.hrtime();

setTimeout(() => {
    const end = process.hrtime(start);
    console.log(`timeout callback executed after ${end[0]}s and ${end[1]/Math.pow(10, 6)}ms`)
}, 1000);


 const st = new Date();

 setTimeout(() => {
     let end = new Date() - st;
     console.log('Execution time: %dms', end);
 }, 1000)