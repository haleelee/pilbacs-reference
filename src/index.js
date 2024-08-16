import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  } from "react-router-dom";

import App from './App';
import Schedule from './pages/Schedule';
import Home from './pages/Home';
import About from './pages/About';
import Standings from './pages/Standings';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Results from './pages/Results';
import { PlayerInfo } from './pages/PlayerInfo';
import { GetUniquePlayerArray } from './components/GetUniquePlayerArray';
import { GetUniqueGameIDs } from './components/GetUniqueGameIDs';
import { GetUniqueTeams } from './components/GetUniqueTeams';
import { TeamInfo } from './pages/TeamInfo';

// Player name formatting tp get first and last name into each entry in array
const playerArray = GetUniquePlayerArray().map(playerObj =>{
  return playerObj.firstName + "_" + playerObj.lastName
});

//map the player and gameID arrays to create all paths for each unique element
const playerRoutes = playerArray.map(player => ({
  path: `/players/${player}`,
  element: <PlayerInfo />
}));

const gameIDRoutes = GetUniqueGameIDs().map(game => ({
  path: `/schedule/${game}`,
  element: <Results />
}));

const teamRoutes = GetUniqueTeams().map(team => ({
  path: `/teams/${team}`,
  element: <TeamInfo />
}));


const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [      
      { path: "/standings", element: <Standings /> },
      { path: "/about", element: <About /> },
      // { path: "/teams", element: <Teams /> },
      { path: "/", element: <Home /> },
      {
        path: "/schedule",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Schedule />
          },
          ...gameIDRoutes //routes for each game ID based on the variable above
        ]
      },
      {
        path: "/players",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Players />
          },
          ...playerRoutes //routes for each player name based on the variable above
        ]
      },
      {
        path: "/teams",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Teams />
          },
          ...teamRoutes //routes for each team based on the variable above
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

