// require
const express = require("express");

// set required express obj to variable
const app = express();

// allows access to post data
app.use(express.urlencoded({ extended: true }));

// tells express to read json
app.use(express.json());
app.use(express.static(__dirname + "/public/dist/public"));


// ALLOWS ACCESS TO MONGOOSE MODELS AND ROUTES
require("./server/config/mongoose.js");
require('./server/config/routes')(app);

// listening port
app.listen(8000, () => console.log("listening on port 8000"));