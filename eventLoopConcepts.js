
'use strict'

Promise.resolve().then(() => {
    console.log('promise3 resolved');
    process.nextTick(() => console.log('next tick inside promise resolve handler'));
});
setTimeout(() => console.log('set timeout'), 0);
setImmediate(() => console.log('set immediate1'));

process.nextTick(() => console.log('next tick1'));
process.nextTick(() => console.log('next tick2'));


setImmediate(() => console.log('set immediate4'));

// function recursiveCalls(count) {
//
//     process.nextTick(() => {
//         console.log("proccess.nextList" + count);
//         count++;
//         recursiveCalls(count);
//     })
// }
debugger
for(var i= 0; i< 5 ; i++) {
    setTimeout(() => console.log("a" + i), 0);
}

setTimeout(() => {
    console.log("abc")
}, 0);

// recursiveCalls(0);

let animals = ['frog', 'cat', 'dog'];
let names = ['a', 'b', 'c', 'd'];

for (let animal of animals) {
    let namex = Math.floor(Math.random() * names.length);

    console.log(`${names[namex]} the ${animal}`);
}


function tpr() {
    // vegetable = "kheera";
    console.log("Inside functions" + vegetable);
    var vegetable = "kheera";
}

tpr();

// let are block scoped and not function scoped or global scoped
// console.log(hoist);
//
// let hoist= "the variable has been hoisted";


const obj = {b : "animal"};
 const faltu = {...obj};
 console.log(obj === faltu);


















