var express = require('express')
    , load = require('express-load')

var app = express();

app.use(express.json())

load('src/config')
    .then('src/database')
    .then('src/controllers')
    .then('src/routes')
    .then('src/services')
    .then('src/daos')
    .into(app);

app.listen(3000)