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

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/schedule",
        // element: <Schedule />
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Schedule />
          },
          // Paths for Game ID Schedule routes
          { path: "/schedule/20240630_01", element: <Results /> },
          { path: "/schedule/20240630_02", element: <Results /> },
          { path: "/schedule/20240630_03", element: <Results /> },
          { path: "/schedule/20240721_01", element: <Results /> },
          { path: "/schedule/20240721_02", element: <Results /> },
          { path: "/schedule/20240721_03", element: <Results /> },
          { path: "/schedule/20240721_04", element: <Results /> },
          { path: "/schedule/20240728_01", element: <Results /> },
          { path: "/schedule/20240728_02", element: <Results /> },
          { path: "/schedule/20240728_03", element: <Results /> },
          { path: "/schedule/20240728_04", element: <Results /> },
          { path: "/schedule/20240811_01", element: <Results /> },
          { path: "/schedule/20240811_02", element: <Results /> },
          { path: "/schedule/20240811_03", element: <Results /> },
          { path: "/schedule/20240811_04", element: <Results /> },
          // End Game ID Schedule routes
        ]
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

