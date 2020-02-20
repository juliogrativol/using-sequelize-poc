var express = require('express')
    , load = require('express-load')

var app = express();

app.use(express.json())

load('src/config')
    .then('src/database')
    .then('src/models')
    .then('src/controllers')
    .then('src/services')
    .then('src/daos')
    .then('src/factories')
    .then('src/routes')
    .into(app);

app.listen(3000)