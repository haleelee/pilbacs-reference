import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";

import App from './App';
import Schedule from './components/Schedule';
import Home from './components/Home';
import About from './components/About';
import Standings from './components/Standings';
import Teams from './components/Teams';
import Players from './components/Players';

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/standings",
        element: <Standings />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/players",
        element: <Players />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

