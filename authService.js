'use strict'

const express = require('express');
const app = express();
const {insertSession, createDatabaseConnection, getSessions, checkToken} = require('./dbHandler');

const port = 4000;

 app.use(express.json());

let session = [];

app.post(
    '/login', (req, res) => {
        try {
           let username = req.body.username;
           let password = req.body.password;
           if (!username || !password) {
               throw new Error('username or password missing');
           }
           insertSession({username, password});
           session.push({username, password});
           res.json({"message" : "You are logged in"});

        } catch (e) {
            console.log("Something went wrong", e);
            res.status(400).json({"message": "Please enter a username and password"});
        }
    }
)

app.post('/signup', (req, res) => {

})

app.get('/', (req, res) => {
    console.log("request received");
    res.status(200).json({message: "Server is up"});
})

app.get('/sessions', async (req, res) => {

    res.json({activeSessionsInMemory : session, activeSessionsInDb:  await getSessions()})
})

app.get('/userAuth', async (req, res) => {

    const token = req.headers['Authorization']

    const user =  await checkToken(req.query.username, token);
    if (user.length === 0) {
        res.status(401).json({message : "Invalid Token"});

    } else {
        res.send({"message": "Valid Token"});
    }
})

createDatabaseConnection();

app.listen(port, (err) => {
    console.log(`🌏 Server is running at http://localhost:${port}`)
})