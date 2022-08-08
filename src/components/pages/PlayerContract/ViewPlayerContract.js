import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import playerContractService from "../../services/playerContract.service";
import Navbar from "../../share/Navbar";

export default function ViewPlayerContract() {
  const navigate = useNavigate();
  const [playerContract, setPlayerContract] = useState({});
  const [playerFirstName, setPlayerFirstName] = useState("");
  const [playerLastName, setPlayerLastName] = useState("");
  const [teamName, setTeamName] = useState("");
  const urlString = useLocation().pathname;
  const id = urlString.slice(urlString.lastIndexOf("/") + 1, urlString.length);
  useEffect(() => {
    playerContractService.get(id).then((response) => {
      setPlayerContract(response.data);
      setPlayerFirstName(playerContract.player.firstName);
      setPlayerLastName(playerContract.player.lastName);
      setTeamName(playerContract.team.name);
    });
  });
  return (
    <>
      <Navbar />
      <h2 className="text-center">View Player Contract</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{playerContract.id}</td>
          </tr>
          <tr>
            <td>Player first name</td>
            <td>{playerFirstName}</td>
          </tr>
          <tr>
            <td>Player last name</td>
            <td>{playerLastName}</td>
          </tr>
          <tr>
            <td>Team name</td>
            <td>{teamName}</td>
          </tr>
          <tr>
            <td>Date created</td>
            <td>{playerContract.dateCreated}</td>
          </tr>
          <tr>
            <td>Date expired</td>
            <td>{playerContract.dateExpired}</td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>{playerContract.salary}</td>
          </tr>
          <tr>
            <td>Type of contract</td>
            <td>{playerContract.typeOfContract}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>{playerContract.number}</td>
          </tr>
          <tr>
            <td>Position</td>
            <td>{playerContract.position}</td>
          </tr>
          <tr>
            <td>Body</td>
            <td>{playerContract.body}</td>
          </tr>
        </tbody>
      </table>
      <div className="container d-flex justify-content-center mt-0">
        <button
          className="btn"
          style={{
            backgroundColor: "#5D096B",
            color: "white",
            border: "none",
          }}
          onClick={() => navigate("/playerContract")}
        >
          Return
        </button>
      </div>
    </>
  );
}
