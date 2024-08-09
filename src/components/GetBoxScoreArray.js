import DATA from "./season15stats.json";
import { GetUniqueGameIDs } from "./GetUniqueGameIDs";
import { GameBuilder } from "./GameBuilder";


// Initiate the gamesArray, which contains all the unique game ids. Then we set the values of the array to each unique game id.
export const GetBoxScoreArray = (data, uniqueGameIDArray) => {
  const boxScoreArray = [];
  GetUniqueGameIDs(DATA).forEach(x =>{
      boxScoreArray.push(GameBuilder(DATA, x))
    })
    return boxScoreArray;
}

// console.log(GetBoxScoreArray(data, GetUniqueGameIDs));



