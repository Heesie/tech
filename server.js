const express = require('express')
const app = express()

app 
.use('/static', express.static('static'))

.set('view engine', 'ejs')
.set('views', 'views')
.get ('/', onhome)
.get ('/about', onabout)
.get ('/movie', movie)

.listen(8000)



function onhome(req, res) {
    res.send('<h1>Hello World</h1>')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>')
}

function movie(req, res, next) {
    let movie = {
        title: 'the shawshank redemtion',
        description: 'Andy Dufresne is young and..'
    }
    res.render('details.ejs', {data: movie})
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