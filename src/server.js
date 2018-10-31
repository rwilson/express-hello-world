/* eslint-disable no-console */
const express = require('express');
const routes = require('./routes');

const app = express();
app.get('/', routes.hello);

const port = 3000;
const onStart = () => console.log(`Hello World app listening on port ${port}!`);

module.exports = app.listen(port, onStart);
