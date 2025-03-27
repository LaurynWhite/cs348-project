import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomeAppBar from './components/appbar/HomeAppBar';
import Teams from './pages/teams/Teams';
import CreateTeam from './pages/create-team/CreateTeam';
import Team from './pages/team/Team';

function App() {
  return (
    <>
      <HomeAppBar />
      <div className='app-container'>
        <Router>
          <Routes>
            <Route path="/" element={<Teams />} />
            <Route path="/create-team" element={<CreateTeam />} />
            <Route path="/team/:teamId" element={<Team />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
