'use strict'

console.log(Promise.resolve());

Promise.resolve().then(() => {
 console.log("Promise resolved");
 setTimeout(() => console.log("Set timeout inside promise"), 1000);

});

process.nextTick(() => {console.log("process next tick is called")});
const x = 5;
const y = x + 2;
console.log(x, y);
const timeout1Id = setTimeout(() => {
    console.log("Set timeout of main one")
}, 1000);
console.log(timeout1Id);

const timeout2Id = setTimeout(() => {
                    console.log("Set timeout of main one")
                }, 400);

console.log(timeout1Id);
const intervalId = setInterval(() => {
    console.log("I am called after every 2000 ms")
}, 2000);
console.log(intervalId);

setImmediate(() => {
    Promise.resolve().then(() => {
        console.log("I am the sexy promise");
    })
    console.log("Howdy bowdy");
});

setImmediate(() => {
    Promise.resolve().then(() => {

    })
    console.log("Howdy bowdy1");
});

const promise  = new Promise((resolve, reject) => {
    setImmediate(() => {
        const date = new Date();
        if (date.getTime() % 2 == 0) {
            resolve("time currently is even");
        } else {
            reject("time is currently odd");
        }
    })
})

promise.then((data) => {
    console.log("the type of date is", data);
}).catch(err => {
    console.log(err.stackTrace);
    console.log(err);
    console.log(err.add("message is nothing"));
}).finally(() => {
    throw new Error("Hupla");
})


function abc(par = "") {
    par = 45;
    return;
}

let p = 34;
abc(p);
console.log(p);
