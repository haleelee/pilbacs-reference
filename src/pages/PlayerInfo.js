import React from 'react';
import { useParams } from 'react-router-dom';
import DATA from "../components/season15stats.json"
import { DataTable } from '../components/DataTable';

export const PlayerInfo = () => {
  const {playerName} = useParams();
  const playerFirstName = playerName.split("_")[0];
  const playerLastName = playerName.split("_")[1];
  console.log(playerFirstName);
  //get data entries that match the player first and last name
  const filteredPlayerData = DATA.filter(x =>{
    return x.playerFName === playerFirstName && x.playerLName === playerLastName;
  });

  console.log(filteredPlayerData)

  return (
    <div>
      <h1>
        {playerName}
      </h1>
      <div>
        <DataTable id= {playerName} stats= {filteredPlayerData} />
      </div>
    </div>
  )
}

