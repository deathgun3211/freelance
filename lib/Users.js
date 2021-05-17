const express = require("express")
const app = express()
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    login: {type: String, unique: true},
    password: String,
    // firstname: String,
    // lastname: String
})

let User = mongoose.model("user", userSchema)
module.exports = User;