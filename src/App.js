import logo from './logo.svg';
import './App.css';
import { Link,  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Standings from './components/Standings';
import Teams from './components/Teams';
import Players from './components/Players';


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
          </Routes>
        </div>
      </div>
  );
}

export default App;
