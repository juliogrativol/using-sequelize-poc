var express = require('express')
    , load = require('express-load')

var app = express();

load('src/config')
    .then('src/database')
    .then('src/controllers')
    .then('src/routes')
    .into(app);

app.listen(3000)