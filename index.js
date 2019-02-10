const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

global.basePath = __dirname + '/';
global.path = require('path');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(expressValidator());

var dbConfig = require(path.join(basePath, 'config/database.js'));

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected to the database...");
    })
    .catch(err => {
        console.log("Error in connection with database!!!");
        process.exit();
    })

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});

    
app.use('/', require(path.join(basePath, 'app/routes/config.js')));

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})