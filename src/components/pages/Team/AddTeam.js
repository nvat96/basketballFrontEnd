import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import teamService from "../../services/team.service";
import Navbar from "../../share/Navbar";

export default function AddTeam() {
  const urlString = useLocation().pathname;
  const teamName = urlString.slice(
    urlString.lastIndexOf("/") + 1,
    urlString.length
  );
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [league, setLeague] = useState("NBA");
  const [arenaName, setArenaName] = useState("");
  const [dateFound, setDateFound] = useState("");
  const [salaryCap, setSalaryCap] = useState("");
  const [action, setAction] = useState("Add");
  const [buttonAction, setButtonAction] = useState("Save")

  const team = {
    name: name,
    location: location,
    league: league,
    arenaName: arenaName,
    dateFound: dateFound,
    salaryCap: salaryCap,
  };
  useEffect(() => {
    if(teamName){
        teamService.get(teamName).then((response)=>{
            setName(response.data.name);
            setLocation(response.data.location);
            setLeague(response.data.league);
            setArenaName(response.data.arena.name);
            setDateFound(response.data.dateFound);
            setSalaryCap(response.data.salaryCap);
            setAction("Update");
            setButtonAction("Update");
        })
    }
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    teamService.create(team);
    
  };
  return (
    <>
      <Navbar />
      <form className="container-fluid">
        <h2 className="text-center">{action} Team</h2>
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Team name</label>
              <input
                type="text"
                className="form-control col"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-control col"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>League</label>
              <select
                className="form-control col form-select"
                name="league"
                id="league"
                value={league}
                onChange={(e) => setLeague(e.target.value)}
              >
                <option value="NBA">NBA</option>
                <option value="WNBA">WNBA</option>
                <option value="G_LEAGUE">G LEAGUE</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Arena name</label>
              <input
                type="text"
                className="form-control col"
                id="arenaName"
                value={arenaName}
                onChange={(e) => setArenaName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date found</label>
              <input
                type="date"
                className="form-control col"
                id="dateFound"
                value={dateFound}
                onChange={(e) => setDateFound(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Salary cap</label>
              <input
                type="text"
                className="form-control col"
                id="salaryCap"
                value={salaryCap}
                onChange={(e) => setSalaryCap(e.target.value)}
              />
            </div>
          </div>
          <div className="container d-flex justify-content-center mt-0">
            <a href="/team">
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#5D096B",
                  color: "white",
                  border: "none",
                }}
                onClick={(e) => handleCreate(e)}
              >
                {buttonAction}
              </button>
            </a>
            <span>&nbsp;</span>
            <a href="/team">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#5D096B",
                  color: "white",
                  border: "none",
                }}
              >
                Return
              </button>
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
