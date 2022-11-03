const express = require('express');



const apiController = require('../controllers/apiController');
const dbController = require('../controllers/dbController');

const router = express.Router();


router.get('/:week', apiController.grabWeek, (req, res) => {
    return res.status(200).json(res.locals.data);
 
})






router.get('/api', (req,res) => {
    return res.status(200);
})





module.exports = router;