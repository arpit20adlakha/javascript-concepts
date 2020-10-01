function getType(...args) {
    console.log(typeof args)
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
}
// If you don't  declare a variable using let or const say and also don't use 'use strict' then it will assigned to global object , global.variable


// And if we use 'use strict '  then it will throw a reference error
getType(12, 13);
getType({"a":"arpit", "b":"babbish"}, ["1", "2", "3"], 12);


const sum = eval('10*10+5');

console.log(sum);

var num = 8;
var num = 10;

console.log(num);

//With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.
//
// You cannot do this with let or const since they're block-scoped.

const abc = function() {
    console.log("happy happilo");
}
console.log(abc.prototype);

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

// All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.
//
// It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.


console.log(obj.hasOwnProperty('1'));
console.log(obj.hasOwnProperty(1));
console.log(set.has('1'));
console.log(set.has(1));



const tap = { a: 'one', b: 'two', a: 'three' };
console.log(tap);

// If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.


// The JavaScript global execution context creates two things for you: the global object, and the "this" keyword. ::: this is true
// The base execution context is the global execution context: it's what's accessible everywhere in your code.

for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

// The continue statement skips an iteration if a certain condition returns true.


new Array("1", "2", "3")


String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

name.giveLydiaPizza();

//String is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();

//We have a setTimeout function and invoked it first. Yet, it was logged last.
//
// This is because in browsers, we don't just have the runtime engine, we also have something called a WebAPI. The WebAPI gives us the setTimeout function to start with, and for example the DOM.
//
// After the callback is pushed to the WebAPI, the setTimeout function itself (but not the callback!) is popped off the stack.
//
//
// Now, foo gets invoked, and "First" is being logged.
//
//
// foo is popped off the stack, and baz gets invoked. "Third" gets logged.
//
//
// The WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the queue.
//
//
// This is where an event loop starts to work. An event loop looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.
//
//
// bar gets invoked, "Second" gets logged, and it's popped off the stack.



const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
//Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.
//
// However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["object Object"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["object Object"] = 456.
//
// Then, we log a[b], which is actually a["object Object"]. We just set that to 456, so it returns 456.



function sayHi() {
    return (() => 0)();
}

console.log(typeof sayHi());

// The sayHi function returns the returned value of the immediately invoked function (IIFE). This function returned 0, which is type "number".
//
//     FYI: there are only 7 built-in types: null, undefined, boolean, number, string, object, and symbol. "function" is not a type, since functions are objects, it's of type "object".
//


const person = { name: 'Lydia' };

function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
console.log(sayHi(21));

// With both, we can pass the object to which we want the this keyword to refer to. However, .call is also executed immediately!
//
// .bind. returns a copy of the function, but with a bound context! It is not executed immediately.

function sayHi() {
    return (() => 0)();
}

console.log(typeof sayHi());



// The sayHi function returns the returned value of the immediately invoked function (IIFE). This function returned 0, which is type "number".
//
//     FYI: there are only 7 built-in types: null, undefined, boolean, number, string, object, and symbol. "function" is not a type, since functions are objects, it's of type "object".

if (0) {
    console.log("hadimba");
}
let nuo = 0;
if (nuo) {
    console.log("fatime");
}
let number  = new Number(0);
if (number) {
    console.log(number.valueOf());
}
if (new Number(0)) {
    console.log("tatimba");
}
('');
(' ');
new Boolean(false);
undefined;
//There are only six falsy values:
//
// undefined
// null
// NaN
// 0
// '' (empty string)
// false
// Function constructors, like new Number and new Boolean are truthy.

console.log(typeof typeof 1);



const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);


// When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of undefined, but you will see something like:
//
//     [1, 2, 3, 7 x empty, 11]
//
// depending on where you run it (it's different for every browser, node, etc.)


(() => {
    let x, y;
    try {
        throw new Error();
    } catch (x) {
        x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();



const  newValue = [...'Lydia'];
console.log(newValue);

const arrayObject = ['2', '4', '5'];
const objectSpecial = {arpit: "good guy", abc: "bad guy"}
const  tpr = Object.assign({chau: "reallly bad"}, objectSpecial)
function testing(...args) {
    console.log(args[0]);
}
testing(...arrayObject)
console.log(tpr);


function* generator(i) {
    yield i;
    yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);


const trekkies = [
    { id: 0, name: "Piccard", planet: "Earth" },
    { id: 1, name: "Spock", planet: "Vulcan" },
    { id: 2, name: "Kirk", planet: "Earth" },
    { id: 3, name: "Worf", planet: "Gault" }
];

const findTrekkiesByPlanet = planet => {
    return trekkies.filter(trekkie => trekkie.planet === planet);
};

console.log(findTrekkiesByPlanet("Earth"));


const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));


// Generator functions

function * too(index) {
 while(index < 4) {
     yield index;
     index ++;
 }
}


const iterator = too(0);
console.log(iterator.next().value);
console.log(iterator.next().value);

function* countAppleSales () {
    let saleList = [3, 7, 5]
    throw new Error("countAppleSales errored out");
    // throw "how u doing";
    for (let i = 0; i < saleList.length; i++) {
        yield saleList[i]
    }
}

let app = countAppleSales();
try {console.log(app.next().value);}catch (e) {
    console.log("there was an error", e);
}
console.log(app.next().value);
console.log(app.next().value);
console.log(app.next().value);
console.log(app.next().value);
console.log(app.next().value);


function Timedelay(ptime, callback) {

    setTimeout(function() {

        callback("Pausing for " + ptime);

    }, ptime);
}

// callback version
// Timedelay(1000, function(msg) {
//
//     console.log(msg);
//     Timedelay(2000, function(msg) {
//
//         console.log(msg);
//         Timedelay(3000, function(msg) {
//
//             console.log(msg);
//         })
//     })
// })

// function* Messages() {
//     console.log(yield(Timedelay(1000, function(string){
//         console.log(string);
//     })));
//     console.log(yield(Timedelay(2000, function(string){
//         console.log(string);
//     })));
//     console.log(yield(Timedelay(3000, function(){})));
// }

// let iter = Messages();
//
// iter.next();
// iter.next();


// Good Example of generators : https://dev.to/rfornal/use-cases-for-javascript-generators-1npc#:~:text=A%20direct%20consequence%20of%20Lazy,with%20generators%2C%20computation%20is%20deferred.

function * throttle(func, time) {
    let timerID = null;
    function throttled(arg) {
        clearTimeout(timerID);
        timerID = setTimeout(func.bind(global, arg), time);
    }
    while(true) throttled(yield);
}

global.console.log("tatti");
class GeneratorThrottle {

    constructor() {};

    start = () => {
        let thr = throttle(console.log, 3000);
        thr.next('');
    };

    toString = () => {
        console.log(throttle);
        console.log('start =', this.start);
    };
};

let generatorObject = new GeneratorThrottle();
generatorObject.start();
generatorObject.start();
generatorObject.toString();




function getInfo(member, year) {
    member.name = 'Lydia';
    year = '1998';
}

const pappy = { name: 'Sarah' };
const birthYear = '1997';

getInfo(pappy, birthYear);

console.log(pappy, birthYear);

// Arguments are passed by value, unless their value is an object, then they're passed by reference. birthYear is passed by value, since it's a string, not an object. When we pass arguments by value, a copy of that value is created (see question 46).
//
// The variable birthYear has a reference to the value "1997". The argument year also has a reference to the value "1997", but it's not the same value as birthYear has a reference to. When we update the value of year by setting year equal to "1998", we are only updating the value of year. birthYear is still equal to "1997".
//
// The value of person is an object. The argument member has a (copied) reference to the same object. When we modify a property of the object member has a reference to, the value of person will also be modified, since they both have a reference to the same object. person's name property is now equal to the value "Lydia"



let uniqueId = setInterval(() => console.log('Hi'), 1000);
clearInterval(uniqueId);

let uniquetimeoutId = setTimeout(() => console.log("Timeout not cleared I made it"), 1000);
clearTimeout(uniquetimeoutId);
// returns a unique id;

function greeting() {
    throw 'Hello world!';
}

function sayHi() {
    try {
        const data = greeting();
        console.log('It worked!', data);
    } catch (e) {
        console.log('Oh no an error:', e);
    }
}

sayHi();

//With the throw statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a string, a number, a boolean or an object. In this case, our exception is the string 'Hello world'.
//
// With the catch statement, we can specify what to do if an exception is thrown in the try block. An exception is thrown: the string 'Hello world'. e is now equal to that string, which we log. This results in 'Oh an error: Hello world'.


function Car() {
    this.make = 'Lamborghini';
    return  {make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make);

//When you return a property, the value of the property is equal to the returned value, not the value set in the constructor function. We return the string "Maserati", so myCar.make is equal to "Maserati".


(() => {
    let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);

// When we set y equal to 10, we actually add a property y to the global object (window in browser, global in Node). In a browser, window.y is now equal to 10.
//
// Then, we declare a variable x with the value of y, which is 10. Variables declared with the let keyword are block scoped, they are only defined within the block they're declared in; the immediately-invoked function (IIFE) in this case. When we use the typeof operator, the operand x is not defined: we are trying to access x outside of the block it's declared in. This means that x is not defined. Values who haven't been assigned a value or declared are of type "undefined". console.log(typeof x) returns "undefined".
//
// However, we created a global variable y when setting y equal to 10. This value is accessible anywhere in our code. y is defined, and holds a value of type "number". console.log(typeof y) returns "number".


class Dog {
    constructor(name) {
        this.name = name;
    }
}

Dog.prototype.bark = function() {
    console.log(`Woof I am ${this.name}`);
};

const pet = new Dog('Mara');

pet.bark();

delete Dog.prototype.bark;

pet.bark();

//We can delete properties from objects using the delete keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the bark function is not available anymore on the prototype after delete Dog.prototype.bark, yet we still try to access it.
//
// When we try to invoke something that is not a function, a TypeError is thrown. In this case TypeError: pet.bark is not a function, since pet.bark is undefined.
