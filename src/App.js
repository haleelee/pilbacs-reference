import logo from './logo.svg';
import './App.css';
import { Link,  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Standings from './pages/Standings';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Results from './pages/Results';
import { PlayerInfo } from './pages/PlayerInfo';
import { TeamInfo } from './pages/TeamInfo';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Pilbacs</h1>
      </header>
      <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/schedule">Schedule & Results</Link> </li>
              <li> <Link to="/standings">Standings</Link> </li>
              <li> <Link to="/teams">Teams</Link> </li>
              <li> <Link to="/players">Players</Link> </li>
              <li> <Link to="/about">About</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
            <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/standings" element={<Standings />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/players" element={<Players />} />
              <Route path="/about" element={<About />} />

              {/* Children routes */}
              <Route path="/schedule/:gameID" element={<Results />} />
              <Route path="/players/:playerName" element={<PlayerInfo />} />
              <Route path="/teams/:teamName" element={<TeamInfo />} />
            </Routes>
        </div>
      </div>

  );
}


export default App;
