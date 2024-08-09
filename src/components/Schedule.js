import React from 'react';
import { Link } from 'react-router-dom';
import DATA from './season15stats.json'
import { GetUniqueGameIDs } from './GetUniqueGameIDs';
import { GetBoxScoreArray } from './GetBoxScoreArray';

const Schedule = () => {
  // Initiate the gamesArray, which contains all the unique game ids. Then we set the values of the array to each unique game id.
  const boxScoreArray = GetBoxScoreArray(DATA, GetUniqueGameIDs);

  return (
  <div>
    <ul>
      {/* Building the links to different pages */}
      {console.log(boxScoreArray)}
      {
        [...Array(boxScoreArray.length).keys()].map(n => {
            return <li key={n}>
                    <Link to={`/schedule/${boxScoreArray[n].gameId}`}>
                      {boxScoreArray[n].gameDate + " | " + boxScoreArray[n].gameTime + " | " + boxScoreArray[n].team1Name + " vs. " + boxScoreArray[n].team2Name}
                    </Link>
                  </li>;
        })
      }
    </ul>
  </div>
  );
};



// const Schedule = () => {
//   return (
//   <div>
//     <ul>
//       {/* Building the links to different pages */}
//       {console.log(boxScoreArray)}
//       {
//         [...Array(boxScoreArray.length).keys()].map(n => {
//             return <li key={n}>
//                     {/* <Link to={`/schedule/${n+1}`}>
//                       Schedule {n+1}
//                     </Link> */}
//                     <Link to={`/schedule/${boxScoreArray[n].gameId}`}>
//                       {boxScoreArray[n].gameDate + " | " + boxScoreArray[n].gameTime + " | " + boxScoreArray[n].team1Name + " vs. " + boxScoreArray[n].team2Name}
//                     </Link>
//                   </li>;
//         })
//       }
//     </ul>
//   </div>
//   );
// };











// //  Function to determine unique gameIDs
// function getUniqueGameIDs(data) {
//   const uniqueGameIDs = [...new Set(data.map(item => item.game_id))];
//   return uniqueGameIDs;
//   // console.log(uniqueGameIDs)
// }

//  Function to determine unique game dates
// function getUniqueGameDates(data) {
//   const uniqueGameDates = [...new Set(data.map(item => item.gameDate))];
//   return uniqueGameDates;
//   // console.log(uniqueGameDates)
// }

// Function to build games.
// This function will take parameter of a gameID array and get the two (2) team names, their scores, and determine a winner and loser
// Returned object: {team1Name, team1Score, team2Name, team2Score, winner, loser} x all games in the json.
// function gameBuilder(data, gameIDs){
//     let gameResult = data.filter(game => game.game_id === gameIDs);
//     let teamsInGame = [];
//     let returnedGameArray = {};
//     let team1Score = 0, team2Score = 0;
//     let gameDate, gameTime, courtNum, gameID  = "";

//     // Loop through the stats to get the 2 team names in the game
//     for (let i = 0; i < gameResult.length; i++){
//       if(!teamsInGame.includes(gameResult[i].teamName)) teamsInGame.push(gameResult[i].teamName); //get 2 team names
//     }

//       // Loop through the stats to get the 2 team scores in the game
//     for (let i = 0; i < gameResult.length; i++){
//       if(gameResult[i].teamName === teamsInGame[0]) team1Score += gameResult[i].playerPts; //set team scores based on what team the player is on
//       else team2Score += gameResult[i].playerPts; //set team scores
//     }

//     gameDate = gameResult[0].gameDate; //set game date
//     gameTime = gameResult[0].time; //set game time
//     courtNum = gameResult[0].court; //set court number
//     gameID = gameResult[0].game_id; //set game id
    
//     // create the array to return for each game built
//     returnedGameArray.team1Name = teamsInGame[0];
//     returnedGameArray.team2Name = teamsInGame[1];
//     returnedGameArray.team1Score = team1Score;
//     returnedGameArray.team2Score = team2Score;
//     returnedGameArray.gameDate = gameDate;
//     returnedGameArray.gameTime = gameTime;
//     returnedGameArray.courtNum = courtNum;
//     returnedGameArray.gameId = gameID;
//     return returnedGameArray;
//   }


export default Schedule;