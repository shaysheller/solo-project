const express = require('express');
const app = express();
const path = require('path');


const databaseUpdateRouter = require('./routes/database');
const apiRouter = require('./routes/api.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.use('/api', apiRouter);
app.use('/database', databaseUpdateRouter);










app.listen(1234); // listens on port 3000 -> http://localhost:3000/
