import DATA from "./season15stats.json";

export const GetUniqueTeams = () => {
  return [...new Set(DATA.map(item => item.teamName))];
}




