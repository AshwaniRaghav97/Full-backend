const mongoose = require('mongoose');


async function connectDB() {
  await mongoose.connect("mongodb+srv://as:HuhNZNpBvqJEbOuM@cluster0.v2mwqfo.mongodb.net/halley");

  console.log("connect to db");
}

module.exports = connectDB;