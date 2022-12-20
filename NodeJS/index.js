import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Person from "./model/person";

const app = express()

const port = 3002

app.use(cors({
    origin: '*'
}))

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post('/', async (req, res) => {
    console.log("Request is received: ", req.body)
    const request = req.body;
    const person = await Person.create({
        name: request.name,
        gender: request.gender,
        age: request.age
    })
    res.status(200).send("Data received")
})

mongoose.connect("mongodb://localhost:27017/demographic")

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

