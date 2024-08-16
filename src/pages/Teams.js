import React from 'react';
import { GetUniqueTeams } from '../components/GetUniqueTeams';
import { Link } from 'react-router-dom';

const Teams = () => {
  const uniqueTeamArray = GetUniqueTeams().filter(team => !team.includes("PLAYOFFS")); //filter out the 'Playoff' team name placeholder
  return (
  <div>
    <h2>Teams</h2>
    <div className='list_of_teams'>
      {[...Array(uniqueTeamArray.length).keys()].map(n => {
        return <li key={n}>
                <Link to={`/teams/${uniqueTeamArray[n]}`}>
                {uniqueTeamArray[n]}
                  <br></br>

                </Link>
                <br></br>
              </li>;
                        
      })}
    </div>

  </div>
)};

export default Teams;