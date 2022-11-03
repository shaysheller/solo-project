const express = require('express');


const apiController = require('../controllers/apiController');
const dbController = require('../controllers/dbController');

const router = express.Router();



router.get('/', dbController.grabData, dbController.getTeamData, dbController.addData, (req, res) => {
    return res.status(200).json('hi');
})

module.exports = router;