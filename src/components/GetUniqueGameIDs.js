import DATA from "./season15stats.json"

//  Function to determine unique gameIDs
export const GetUniqueGameIDs = () => {
    return [...new Set(DATA.map(item => item.game_id))];
}

