'use strict'



async function pp() {
    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("tapo")}, 1000);
    })
    return await newPromise;
}

module.exports = pp;