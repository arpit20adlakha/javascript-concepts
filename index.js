'use strict'

console.log(q);

//const p = 15;
var q = 14;
// let r = 3;



 // import Vehicle from './Vehicle.js'
const Caller = require( './pomies.js')

const person = {
    name : "arpit",
    class : "10",
    age: 23
}

Caller(abc).then((value) => {
    console.log("tatti krlo");
});



const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {resolve("tap")}, 3000);
})



const promise2 = new Promise((resolve, reject)=> {
    setTimeout(() => {reject(new Error("hat"))}, 4000);
})

//
// let a = promise1.then((response) => {
//     console.log(response)
// }).catch((error)=> {
//     console.log("error")
// }).finally(() => {})
//
//
let arr = [promise1, promise2]
// let repoInfo;

// function abc(...args) {
//     const [key, value] = args;
//     console.log(key);
//     console.log(value);
// }


//
// abc("Impmsg", "don't like you darling");
//
// [1, 2, 4].forEach((i, index)=> {
//     console.log(i);
// })
//
//
// const obj = {
//     item : 1,
//     print: () => {
//         return this.item;
//     }
// }
//
// function asyncForEach(arr, cb) {
//     cb.bind(obj);
//     arr.forEach((item, index) => {
//         setTimeout(cb, 0);
//     });
// }
//
// asyncForEach([1, 2, 4], () => {
//     console.log(print());
// })
// Adding catch to all promises will handle the exceptions and hence it wont fail very imp tip
// console.log(arr.map(p => p.catch(e => e)));





async function abc () {
    let results = await Promise.all(arr.map(p => p.catch(e => e)));
    let answers = results.filter(result => !(result instanceof Error))
    return answers
}

 abc().then((response) => console.log(response))

//
// .then((response) => {
//      console.log(response[0] instanceof Error )
//      repoInfo  = response.filter(result => !(result instanceof Error))
//  }).catch((error)=> {
//     console.log("error")
// }).finally(() => {console.log("promise complete", repoInfo)} )
//
//
//
//
//
// promise2.then(function fullFilled1(result) {
//     console.log(result);
// }, function handleRejected(result) {
//     console.log(result);
// })



// Promise.allSettled(promises).
// then((results) => results.forEach((result) => console.log(result.status)));


// const tapre =  ({client, rep}) =>  {
//     console.log(client, rep);
//     const vehicleObject = new Vehicle("car", 1200);
//     console.log(Vehicle.prototype)
// }


// class Car extends Vehicle {
//     constructor() {
//         super("truck", 4000);
//     }
//
//
// }

// console.log(Car.prototype)

// tapre ({client : "hyperactivity", rep: "this is the repo"});


// The Closures justification and explanation

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

var number = numberGenerator();
number(); // 2



function sayHello() {
    var say = function() { console.log(hello); }
    // Local variable that ends up within the closure
    var hello = 'Hello, world!';
    return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure(); // ‘Hello, world!’




var result = [];

for (var i = 0; i < 5; i++) {
    result[i] = function () {
        console.log(i);
    };
}

result[0](); // 5, expected 0
result[1](); // 5, expected 1
result[2](); // 5, expected 2
result[3](); // 5, expected 3
result[4](); // 5, expected 4


var result = [];

for (var i = 0; i < 5; i++) {
    result[i] = (function inner(x) {
        // additional enclosing context
        return function() {
            console.log(x);
        }
    })(i);
}

result[0](); // 0, expected 0
result[1](); // 1, expected 1
result[2](); // 2, expected 2
result[3](); // 3, expected 3
result[4](); // 4, expected 4


//Another, rather clever approach is to use let instead of var, since let is block-scoped and so a new identifier binding is created for each iteration in the for-loop:
var result = [];

for (let i = 0; i < 5; i++) {
    result[i] = function () {
        console.log(i);
    };
}

result[0](); // 0, expected 0
result[1](); // 1, expected 1
result[2](); // 2, expected 2
result[3](); // 3, expected 3
result[4](); // 4, expected 4


const obd = {
    name : function () { console.log(this.x + " nut job")},
    x : 24
}

obd.name();

const tpd = {
    name: () => console.log(this.x + " total idiot"),
    x : 33
}

tpd.name();

class Person {
    constructor() {
        this.x = 24;
    }

    name() {
        console.log(this.x + " huttt");
    }

}
const t = new Person();

t.name();

class Person1 {
    constructor() {
        this.x = 334;
    }

    name = () => {
        console.log(this.x + " topsieee");
    }
}

const p = new Person1();
p.name();