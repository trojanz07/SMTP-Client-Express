const express = require('express');

const config = require('./config.json')

const app = express();

const web = require('./routes/listener');

app.use(express.json())

app.use('/', require('./routes/router'))

web.listen(app, config.PORT);