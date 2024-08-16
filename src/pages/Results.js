import React from 'react';
import { useParams } from 'react-router-dom';
import DATA from "../components/season15stats.json"
import { BoxScoreTable } from '../components/BoxScoreTable';
import { format } from 'date-fns';

function formatTime(timeString) {
  const [time, period] = timeString.split(' ');
  const [hours, minutes] = time.split(':');
  return `${hours}:${minutes} ${period}`;
}

const Results = () => {
  const {gameID} = useParams();
  const filteredGameResults = DATA.filter(x =>{
    return x.game_id === gameID;
  });
  const getUniqueValues = (array, key) => {
    return [...new Set(array.map(team => team[key]))]
  }
  //Establish Home and Away teams and collect stats based on teams
  const awayTeamStats = filteredGameResults.filter(team => team.teamName === getUniqueValues(filteredGameResults, "teamName")[0]);
  const homeTeamStats = filteredGameResults.filter(team => team.teamName === getUniqueValues(filteredGameResults, "teamName")[1]);
  let awayTotalPoints = 0;
  let homeTotalPoints= 0;
  awayTeamStats.forEach(x => awayTotalPoints += parseInt(x.playerPts) )
  homeTeamStats.forEach(x => homeTotalPoints += parseInt(x.playerPts) )

  //Logic to determine who the winning and losing teams are
  let winningTeam, losingTeam = "";
  if(awayTotalPoints < homeTotalPoints){
    winningTeam = getUniqueValues(filteredGameResults, "teamName")[1];
    losingTeam = getUniqueValues(filteredGameResults, "teamName")[0]; 
  } else {
    winningTeam = getUniqueValues(filteredGameResults, "teamName")[0];
    losingTeam = getUniqueValues(filteredGameResults, "teamName")[1]; 
  }

  console.log("Winner is " + winningTeam + ", Losing Team is " + losingTeam)

  return (
  <div>
    {/* Team Names */}
    <div class="results_teamScorePage">
      <div>
        <h2>{getUniqueValues(filteredGameResults, "teamName")[0]}</h2>
        <h2>{awayTotalPoints}</h2>
      </div>
      <div>
        <h2>{getUniqueValues(filteredGameResults, "teamName")[1]}</h2>
        <h2>{homeTotalPoints}</h2>
      </div>
    </div>

    {/* Date */}
    <p>{formatTime(filteredGameResults[0].time) + " | " + format(new Date(filteredGameResults[0].gameDate), "MMMM dd, yyyy")}</p>
    <p>Court {filteredGameResults[0].court}</p>
    <h3>{getUniqueValues(filteredGameResults, "teamName")[0]}</h3>
    <BoxScoreTable id= {gameID} stats= {awayTeamStats} />
    <br></br>
    <h3>{getUniqueValues(filteredGameResults, "teamName")[1]}</h3>
    <BoxScoreTable id= {gameID} stats= {homeTeamStats} />

  </div>

  );
};

export default Results;