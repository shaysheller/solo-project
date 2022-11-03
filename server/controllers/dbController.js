const url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?seasontype=2&week='
const fetch = require('node-fetch');
const db = require('../models/nflModels');



const dbController = {


    async grabData(req, res, next) {
        const eventsObj = {};
        for(let i = 1; i <= 18; i++) {
            const response = await fetch(url + i)
            const responseJson = await response.json();
            const result = [];
            for(let j = 0; j < responseJson.events.length; j++) {
                const curr = responseJson.events[j]
                result.push(curr);
            }
            eventsObj[i] = result;
        }
        res.locals.apiResult = Object.assign(eventsObj);
        return next();

    },


    getTeamData (req, res, next) {
        let objLength = Object.keys(res.locals.apiResult).length;
        const resultArr = [];
        let count = 0;
        for(let i = 1; i <= objLength; i++) {
            // get game week array 
            let week = res.locals.apiResult[i];

            // iterate through game week array by game 
            for(let j = 0; j < week.length; j++) {
                count++;
                let tie = false;
            
                // get the week we are looking at from Obj
                let weekEvent = week[j];
    
                // get game_id
                let game_id = count;
                //get home_team_id
                let home_id = weekEvent.competitions[0].competitors[0].id;
    
                //get away_team_id
                let away_id = weekEvent.competitions[0].competitors[1].id;
    
    
                // get home score
                let home_team_score = weekEvent.competitions[0].competitors[0].score;
    
                // get away score
                let away_team_score = weekEvent.competitions[0].competitors[1].score;
    
    
                // get winning team id and set tie to true if tie
                // winning team id = -1 if tie
                if(home_team_score > away_team_score) {
                    winning_team_id = home_id;
                } else if(home_team_score < away_team_score) {
                    winning_team_id = away_id;
                } else {
                    winning_team_id = -1; 
                    tie = true;
                }
    
                const game  = [game_id, home_id.toString(), away_id.toString(), i.toString(), winning_team_id.toString(), tie.toString(), home_team_score.toString(), away_team_score.toString()]
                resultArr.push(game);
            }
        }

        res.locals.result = resultArr;
        return next();

    },



    async addData(req, res, next) {

        for(let i = 0; i < res.locals.result.length; i++) {
            
            let elem = res.locals.result[i];

            const values = [...elem];

            const str1 = 'INSERT INTO public.games (_id, home_team_id, away_team_id, week, ';
            const str2 = 'winning_team_id, tie, home_score, away_score) '; 
            const str3 = 'VALUES ($1, $2, $3, $4, $5, $6, $7, $8);'
            const insertStr = str1 + str2 + str3;

            await db.query(insertStr, values);
        }
        return next();
    }
}


module.exports = dbController;


























