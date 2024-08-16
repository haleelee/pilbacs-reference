import DATA from "./season15stats.json";

function compare( a, b ) {
  if ( a.lastName < b.lastName ){
    return -1;
  }
  if ( a.lastName > b.lastName ){
    return 1;
  }
  return 0;
}  

export const GetUniquePlayerArray = () => {
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
  return uniquePlayerArray.sort(compare);
};




