import React from "react";
import Homepage from "./components/pages/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./components/pages/Player/Player.jsx";
import "./App.css";
import UnderConstructionPage from "./components/pages/UnderConstructionPage.jsx";
import AddPlayer from "./components/pages/Player/AddPlayer.jsx";
import Agent from "./components/pages/Agent/Agent.jsx";
import AddAgent from "./components/pages/Agent/AddAgent.jsx";
import ViewPlayer from "./components/pages/Player/ViewPlayer.jsx";
import UpdatePlayer from "./components/pages/Player/UpdatePlayer.js";
import UpdateAgent from "./components/pages/Agent/UpdateAgent.js";
import ViewAgent from "./components/pages/Agent/ViewAgent.js";
import Team from "./components/pages/Team/Team.js";
import AddTeam from "./components/pages/Team/AddTeam.js";
import ViewTeam from "./components/pages/Team/ViewTeam.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/nothing" element={<UnderConstructionPage />} />
          <Route exact path="/player" element={<Player />} />
          <Route exact path="/player/add" element={<AddPlayer />} />
          <Route exact path="/player/update/:id" element={<UpdatePlayer />} />
          <Route exact path="/player/view/:id" element={<ViewPlayer />} />
          <Route exact path="/agent" element={<Agent />} />
          <Route exact path="/agent/add" element={<AddAgent />} />
          <Route exact path="/agent/update/:id" element={<UpdateAgent />} />
          <Route exact path="/agent/view/:id" element={<ViewAgent/>}/>
          <Route exact path="/team" element={<Team/>}/>
          <Route exact path="/team/add" element={<AddTeam/>}/>
          <Route exact path="/team/update/:name" element={<AddTeam />}/>
          <Route exact path="/team/view/:name" element={<ViewTeam/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
