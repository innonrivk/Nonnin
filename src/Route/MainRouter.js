import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EnteryScreen from '../Screens/EnteryScreen.js';
import InfoScreen from '../Screens/InfoScreen.js';
import SimulationScreen from '../Screens/SimulationScreen.js';
function MainRouter(props) {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EnteryScreen></EnteryScreen>} />
          <Route path="/simulation" element={<SimulationScreen></SimulationScreen>} />
          <Route path="/infoscreen" element={<InfoScreen></InfoScreen>} />
        </Routes>
      </Router>
    </div>
  );
}
export default MainRouter;

