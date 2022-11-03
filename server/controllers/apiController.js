
const url = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?seasontype=2&week='
const fetch = require('node-fetch');
const db = require('../models/nflModels');



const apiController = {};


apiController.grabWeek = async (req, res, next) => {



    let str = `SELECT home_team_id, away_team_id, home_score, away_score FROM public.games WHERE week = $1;`

    const result = await db.query(str, [req.params.week]);

    const rowsArr = result.rows;
    res.locals.data = [];

    for(let i = 0; i < rowsArr.length; i++) {
        const {home_team_id, away_team_id, home_score, away_score} = rowsArr[i];
        const arr = [home_team_id, away_team_id, home_score, away_score];

        let q = "SELECT name FROM public.teams WHERE teams._id = $1;"

        let home = await db.query(q, [home_team_id]);
        arr[0] = home.rows[0].name;
        let away = await db.query(q, [away_team_id]);
        arr[1] = away.rows[0].name;

        res.locals.data.push(arr);
    }

    return next();







}
































// const apiController = {

//     async grabData(req, res, next) {
//         res.locals.responseObj = {};
//         res.locals.responseObj.weeks = {};
//         for(let i = 1; i <= 18; i++) {
//             const response = await fetch(url + i)
//             const j = await response.json();
//             const result = [];
//             for(let i = 0; i < j.events.length; i++) {
//                 const curr = j.events[i].shortName;
//                 result.push(curr);
//             }
//             res.locals.responseObj.weeks[i] = result;
//         }
//         return next();


//     },

//     getTeamData(req, res, next) {
//         const teamObj = {};

//         for(let i = 0; i < teamArr.length; i++) {
//             let elem = teamArr[i];
//             teamObj[elem] = [];
//         }

//         res.locals.responseObj.teams = teamObj;
//         // console.log(res.locals.responseObj.teams);

//         for(let i = 1; i <= 18; i++) {
//             const arr = res.locals.responseObj.weeks[i];
//             for(let j = 0; j < arr.length; j++) {
//                 const elem = arr[j].split(' ');
//                 // console.log(elem[0], elem[2]);
//                 // console.log(res.locals.responseObj.teams[elem[0]])
//                 // console.log(res.locals.responseObj.teams[elem[2]])
//                 res.locals.responseObj.teams[elem[0]].push(arr[j]);
//                 res.locals.responseObj.teams[elem[2]].push(arr[j]);
                
//             }

//         }
//         return next();
//     }




// }


// const teamArr = [
//     'BUF',
//     'NO',
//     'LAR',
//     'ATL',
//     'SF',
//     'CHI',
//     'PIT',
//     'CIN',
//     'PHI',
//     'DET',
//     'NE',
//     'MIA',
//     'JAX',
//     'WSH',
//     'CLE',
//     'CAR',
//     'IND',
//     'HOU',
//     'NYG',
//     'TEN',
//     'GB',
//     'MIN',
//     'KC',
//     'ARI',
//     'LV',
//     'LAC',
//     'TB',
//     'DAL',
//     'DEN',
//     'SEA',
//     'BAL',
//     'NYJ'
// ]

module.exports = apiController;