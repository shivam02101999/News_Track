const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const router = require("./src/Routes/route");
const port = process.env.PORT || 3000


// const country = require("country-state-city").Country;
// const city = require("country-state-city").City;
// const state = require("country-state-city").State;

// console.log(country.getAllCountries())


const route = require('./src/Routes/route');
// const { Country } = require("country-state-city");
// app.use('/api', express.Router);

app.use(bodyParser.json());

mongoose.set('strictQuery', false);


//************************Database Connection************ */
mongoose.connect("mongodb://localhost:27017")
    .then(() => console.log("Database is connected successfully.."))
    .catch((Err) => console.log(Err))

app.use("/", route)

app.listen(port, function () {
    console.log(`Server is connected on Port ${port} ✅✅✅`)
});

// Li6BnjEH2cYgkQNc
//mongodb+srv://Newspaper:Li6BnjEH2cYgkQNc@cluster0.j5zzyto.mongodb.net/