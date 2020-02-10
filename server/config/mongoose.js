//database connection
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

mongoose.set('runValidators', true);

mongoose.connect('mongodb://localhost/RateMyDrawers', {
    useNewUrlParser: true
});

// create a variable that points to the models folder
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript filescopy
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
})