'use strict'

module.exports = ({name}) => {
    console.log("happy");

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am back after some time")
            resolve(100);
        }, 1000);

    })
    return promise;
}