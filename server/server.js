const express = require('express');
const app = express();
const path = require('path');

const apiController = require('./controllers/apiController')

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/api', apiController.grabData, (req, res) => {

   return res.status(200).json(res.locals.obj);

})




app.listen(1234); // listens on port 3000 -> http://localhost:3000/
