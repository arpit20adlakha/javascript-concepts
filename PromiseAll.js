'use strict'

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({name: "arpit", age: 23}), 1000);

    })
}

const getGroupon = () => {
    return new Promise((resolve, reject) => {
        resolve({id: "244-33434"});
    })
}

async function getAllGroupons() {
    const user = getUser();
    const groupon = user.then(() => getGroupon());
    const results =  await Promise.all([user, groupon]);
    console.log(results);

}

getAllGroupons();