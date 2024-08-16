import React from 'react';
import DATA from "../components/season15stats.json";
import { Link } from 'react-router-dom';


const Players = () => {

  const allPlayersNames = [];
  DATA.forEach(player => {
    let playerObj = {};
    playerObj.firstName = player.playerFName;
    playerObj.lastName = player.playerLName;
    if(player.playerFName && player.playerLName) allPlayersNames.push(playerObj);
    }
  );
  const jsonObject = allPlayersNames.map(JSON.stringify);
  const uniqueSet = new Set(jsonObject);
  const uniquePlayerArray = Array.from(uniqueSet).map(JSON.parse);

  //function to compare last names for alphabetical purposes
  function compare( a, b ) {
    if ( a.lastName < b.lastName ){
      return -1;
    }
    if ( a.lastName > b.lastName ){
      return 1;
    }
    return 0;
  }  
  uniquePlayerArray.sort(compare);


  // return the ReactJS component
  return (
    <div>
      <h2>Players</h2>
      <div className="container_list_of_players">
        <div className="list_of_players">
          {
            [...Array(uniquePlayerArray.length).keys()].map(n => {
                return <li key={n}>
                        <Link to={`/players/${uniquePlayerArray[n].firstName}_${uniquePlayerArray[n].lastName}`}>
                        {uniquePlayerArray[n].firstName} {uniquePlayerArray[n].lastName}
                          <br></br>

                        </Link>
                        <br></br>
                      </li>;
                      
            })
          }
        </div>
      </div>


      {/* <div className="table">
        <SortingTable />
      </div> */}
    </div>
    
  );
};
  
 

export default Players;