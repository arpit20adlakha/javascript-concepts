'use strict'

const someFunction = require('./ipee');

const params = {
    home : "faq",
    next: "tpae",
    jest: "kite"
};

let answer = someFunction(params);
answer();

const title = "customer_support"
const touchParams = {
    showBackButton: true,
    showDoneButton: true,
}
Object.assign(touchParams, {
    setLiteHeaderHeadline:  title
})

console.log(touchParams);

function greetUser(templateMsg, userName) {
    if (typeof templateMsg == 'function') {
        console.log(templateMsg() + userName);
    } else if(typeof templateMsg === 'object')  {
        console.log(templateMsg , userName);
    } else {
        console.log("Please pass a correct 1st argument" + userName);
    }
}

function myFunc() {
    return "Good Afternoon";
}

greetUser(myFunc, "Andy");

greetUser("tapsi", "amdu");
const top = {abra : "andy"};
greetUser(top, "potry");
console.log(typeof top);

console.log(JSON.parse(JSON.stringify(top)));

console.log(top instanceof Object)

function outerFunc() {
    return function() {
        console.log("Hello from inner function");
    }
}

    const h = outerFunc();
    h();
    outerFunc()();

var varFunc = function() {
    console.log("Hello world");
}

varFunc();

let myName = (function() {
    let name = "Andy";
    return name;
})();

// console.log(name);
console.log(myName);


function outerFunction() {
    let name = "Andy";
    function innerFunction() {
        console.log(name);
    }

    return innerFunction;
}
let myFun = outerFunction();
myFun();