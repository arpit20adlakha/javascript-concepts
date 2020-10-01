setImmediate(() => console.log('this is set immediate 1'));
setImmediate(() => console.log('this is set immediate 2'));
setImmediate(()=> console.log('this is set immediate 3'));

setTimeout(() => console.log('this is set timeout 1'), 0);
