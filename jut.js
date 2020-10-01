setTimeout(() => console.log('timeout1'));
setTimeout(() => {
    console.log('timeout2')
    Promise.resolve().then(() => console.log('promise resolve'))
});
setTimeout(() => console.log('timeout3'));
setTimeout(() => console.log('timeout4'));

const arr = ['a', 'b', 'c', 'd']

for(let item of arr) {
    console.log(item);
}

const obj = {
    name: "arpit",
    age: "27",
    color: "white",
    sex: "male"
}
for(let item in obj) {
    console.log(item);
}
let result = Object.keys(obj);
for (let item of result) {
    console.log(item);
}



const values = [2, 3, 4, 5];

const prr = values.map((item) =>  item * item);

prr.forEach((item) => console.log(item));

let arm = values.filter((item) => item != 4 );

arm.forEach((item, index) => console.log(item));