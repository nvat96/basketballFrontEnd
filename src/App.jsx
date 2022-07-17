import React from "react";
import Homepage from "./components/pages/Homepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./components/pages/Player/Player.jsx";
import "./App.css";
import UnderContructionPage from "./components/pages/UnderContructionPage.jsx";
import AddPlayer from "./components/pages/Player/AddPlayer.jsx";
import Agent from "./components/pages/Agent/Agent.jsx";
import AddAgent from "./components/pages/Agent/AddAgent.jsx";
import ViewPlayer from "./components/pages/Player/ViewPlayer.jsx";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nothing" element={<UnderContructionPage />} />
          <Route path="/player" element={<Player />} />
          <Route path="/player/add" element={<AddPlayer />} />
          <Route path="/player/update/:id" element={<AddPlayer/>}/>
          <Route path="/player/view/:id" element={<ViewPlayer/>}/>
          <Route path="/agent" element={<Agent/>}/>
          <Route path="/agent/add" element={<AddAgent/>}/>
          <Route path="/agent/update/:id" element={<AddAgent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
