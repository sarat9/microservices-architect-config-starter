const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const route = require('./src/routes')

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// simple route
app.get("/welcome", (req, res) => {
    res.json({ message: "Welcome to the application." });
});

app.use('/api/v1', route)


// set port, listen for requests
const PORT = process.env.PORT || 1004;
app.listen(PORT, () => {
    console.log(`Cart Microservice Started...`);
    console.log(`Node Server is running on port ${PORT}.`);
});