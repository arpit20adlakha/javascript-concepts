// CRUD Create Read Update Delete


// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true},(error, client) => {
    if (error) {
      return global.console.log('Unable to connect' + error);
    }
    console.log('Connected correctly');
    const db = client.db(databaseName);

    db.collection('users').findOne({_id: new ObjectID("5f4d647ae943ffee4bda10f4")}, (error, user) => {
        if (error) {
            console.log("Unable to fetch");
        }
        console.log(user);
    });

    db.collection('users').find({age: 27}).toArray((error, users) => {
        console.log(users);
    });


    db.collection('users').find({age: 27}).count((error, count) => {
        console.log(count);
    });


    // db.collection('users').insertOne({
    //     _id : id,
    //     name: 'vikram',
    //     age: 26
    // }, (error, result) => {
    //     if(error) {
    //         return console.log(error + 'Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {name: "Jen", age: 28},
    //     {name: "Gunther", age: 27}
    //     ], (error1, result) => {
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
