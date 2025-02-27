const express = require('express');
const app = express();

app 
.use('/static', express.static('static'))

.set('view engine', 'ejs')
.set('views', 'views')
.get ('/', Login)
.get ('/about', onabout)
.get ('/loggedin', LoggedIn)

.listen(8000);


function Login(req, res, next) {
    let login = {
        title: 'loginscherm',
    }
    res.render('login.ejs', {data: login})
}

function LoggedIn(req, res) {
    let loggedIn = {
        title: 'logged in',
    }
    res.render('loggedin.ejs', {data: loggedIn})
}

function onabout(req, res) {
    res.send('<h1>About me</h1>')
}



require('dotenv').config()

// MONGO DB APPLICATION CODE

const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.URI;

const client = new MongoClient(uri);

const db = client.db(process.env.DB_NAME);

//MONGODB CONNECTION

async function connectDB() {
    try {
await client.connect();
console.log("Client connected to database");
    } catch (error) {
        console.log(error);
    }    
}

connectDB();