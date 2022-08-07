import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import teamService from "../../services/team.service";
import Navbar from "../../share/Navbar";

export default function ViewTeam() {
  const urlString = useLocation().pathname;
  const teamName = urlString.slice(
    urlString.lastIndexOf("/") + 1,
    urlString.length
  );
  
  const [team, setTeam] = useState({});
  const [arenaName, setArenaName] = useState("")
  useEffect(() => {
    teamService.get(teamName).then((response) => {
      setTeam(response.data);
      setArenaName(response.data.arena.name);
    });
  }, []);
  return (
    <>
      <Navbar />
      <h2 className="text-center">View Team</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{team.name}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{team.location}</td>
          </tr>
          <tr>
            <td>League</td>
            <td>{team.league}</td>
          </tr>
          <tr>
            <td>Arena name</td>
            <td>{arenaName}</td>
          </tr>
          <tr>
            <td>Date found</td>
            <td>{team.dateFound}</td>
          </tr>
          <tr>
            <td>Salary cap</td>
            <td>{team.salaryCap}</td>
          </tr>
        </tbody>
      </table>
      <div className="container d-flex justify-content-center mt-0">
        <a href="/team">
          <button
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
    </>
  );
}
