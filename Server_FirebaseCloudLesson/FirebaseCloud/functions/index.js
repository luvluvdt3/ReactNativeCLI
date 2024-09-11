// const functions = require("firebase-functions");
import * as functions from 'firebase-functions';

import express from 'express';
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send("Hello World!");
})

app.get('/user', (req,res) => {
    res.send("You are getting a user data back!");
})

app.get('/user', (req,res) => {
    console.log("This is never going to run");
    res.send("You cannot get this response back");
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send("We created a user with firstname of "+req.body.firstName);
})

app.delete('/user', (req, res) => {
    console.log(req.body);
    res.send("We deleted a user with firstname of "+req.body.firstName);
})

app.put('/user', (req, res) => {
    console.log(req.body);
    res.send("We updated a user with firstname of "+req.body.firstName);
})

// exports.app = functions.https.onRequest(app);
export const helloWorld = functions.https.onRequest(app);