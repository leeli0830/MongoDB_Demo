import mongoose from "mongoose";

const {Schema, model} = mongoose;

const personSchema = new Schema({
    name: String,
    gender: String,
    age: Number
})

const Person = model('Person', personSchema)

export default Person