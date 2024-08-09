export const GameBuilder = (data, gameIDs) => {
    let gameResult = data.filter(game => game.game_id === gameIDs);
    let teamsInGame = [];
    let returnedGameArray = {};
    let team1Score = 0, team2Score = 0;
    let gameDate, gameTime, courtNum, gameID  = "";

    // Loop through the stats to get the 2 team names in the game
    for (let i = 0; i < gameResult.length; i++){
        if(!teamsInGame.includes(gameResult[i].teamName)) teamsInGame.push(gameResult[i].teamName); //get 2 team names
    }

        // Loop through the stats to get the 2 team scores in the game
    for (let i = 0; i < gameResult.length; i++){
        if(gameResult[i].teamName === teamsInGame[0]) team1Score += gameResult[i].playerPts; //set team scores based on what team the player is on
        else team2Score += gameResult[i].playerPts; //set team scores
    }

    gameDate = gameResult[0].gameDate; //set game date
    gameTime = gameResult[0].time; //set game time
    courtNum = gameResult[0].court; //set court number
    gameID = gameResult[0].game_id; //set game id

    // create the array to return for each game built
    returnedGameArray.team1Name = teamsInGame[0];
    returnedGameArray.team2Name = teamsInGame[1];
    returnedGameArray.team1Score = team1Score;
    returnedGameArray.team2Score = team2Score;
    returnedGameArray.gameDate = gameDate;
    returnedGameArray.gameTime = gameTime;
    returnedGameArray.courtNum = courtNum;
    returnedGameArray.gameId = gameID;
    // return (
    //     <div>GetGamesArray</div>
    // )
    return returnedGameArray;
}
