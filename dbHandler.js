'use strict'

const MongoClient = require('mongodb').MongoClient;
const sessionCreator = require('./createSession');
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'user-data'

// const client = new MongoClient(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true});
//
// function OpenDB() {
//     return new Promise(((resolve, reject) => {
//         if (!client.isConnected()) {
//             client.connect(function(err) {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve("Connected successfully");
//                 }
//             })
//         }
//     }))
// }
let db;


function createDatabaseConnection() {
    MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {

        if (error) {
            return global.console.log('Unable to connect' + error);
        }

        console.log('Connected correctly');

        db = client.db(databaseName);

        // db.collection('users').insertMany([
        //     {name: "Jen", age: 28},
        //     {name: "Gunther", age: 27}
        // ], (error1, result) => {
        //     if (error1) {
        //         return console.log(error + "Unable to insert documents");
        //     }
        //     console.log(result.ops);
        // })
        //
        // db.collection('tasks').insertMany([
        //     {description: "About hagna", completed: true},
        //     {description: "About choop", completed: true},
        //     {description: "About nothing much", completed: false}
        // ], (error, result) => {
        //     if (error) {
        //         return console.log("An error happened" + error);
        //     } else {
        //         console.log(result.ops);
        //     }
        // })
    })
}

function insertSession(session) {
    const user = db.collection('sessions').find({username: session.username});
    if (!user) {
        db.collection('sessions').insertOne({
            username: session.username,
            token: sessionCreator(session.username)
        }, (error, result) => {
            if (error) {
                return console.log(error + 'Unable to insert user');
            }
            console.log(result.ops);
        })
    }
}

function getSessions() {
    const coll = db.collection('sessions');
    const sessions =  coll.find();
    return  sessions.toArray();
}

function checkToken(username, token) {
    const user = db.collection('sessions').find({username: username, token : token}).toArray();
    return user;
}

module.exports = {
    insertSession,
    createDatabaseConnection,
    getSessions,
    checkToken
}