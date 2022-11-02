
const url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?seasontype=2&week='
const fetch = require('node-fetch');

const apiController = {

    async grabData(req, res, next) {
        const obj = {};
        res.locals.obj = obj;
        for(let i = 1; i <= 18; i++) {
            const response = await fetch(url + i)
            const j = await response.json();
            const result = [];
            for(let i = 0; i < j.events.length; i++) {
                const curr = j.events[i].shortName;
                result.push(curr);
            }
            res.locals.obj[i] = result;
        }
        return next();


    }




}


module.exports = apiController;