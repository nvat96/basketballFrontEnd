import React, { useEffect, useState } from "react";
import teamService from "../../services/team.service";
import Button from "../../share/Button";
import Navbar from "../../share/Navbar";

export default function Team() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    teamService.getAll().then((response) => {
      setTeam(response.data);
    });
  }, []);
  const handleDelete = (name) => {
    teamService.remove(name).then(() => {
      console.log("Deleted");
      teamService.getAll().then((response) => {
        setTeam(response.data);
      });
    });
  };
  return (
    <>
      <Navbar />
      <h2 className="text-center">Team List</h2>
      <div className="container d-flex justify-content-center mt-0">
        <a href="/team/add">
          <Button text={"Add team"} bgColor={"#590DA0"} />
        </a>
      </div>
      <p></p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>League</th>
            <th>Arena name</th>
            <th>Date found</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {team.map((team) => (
            <tr key={team.name}>
              <td>{team.name}</td>
              <td>{team.location}</td>
              <td>{team.league}</td>
              <td>{team.arenaName}</td>
              <td>{team.dateFound}</td>
              <td className="d-flex justify-content-center">
                <a href={`/team/view/${team.name}`}>
                  <Button text={"View"} bgColor={"#093B6B"} />
                </a>
                <span>&nbsp;</span>
                <a href={`/team/update/${team.name}`}>
                  <Button text={"Update"} bgColor={"#09186D"} />
                </a>
                <span>&nbsp;</span>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#6D095A",
                    color: "white",
                    border: "none",
                  }}
                  onClick={() => {
                    handleDelete(team.name);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container d-flex justify-content-center mt-0">
        <a href="/team">
          <Button text={"Back to top"} bgColor={"#590DA0"} />
        </a>
      </div>
    </>
  );
}
