import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import playerService from "../../services/player.service";
import Navbar from "../../share/Navbar.jsx";

const ViewPlayer = () => {
  const navigate = useNavigate();
  const urlString = useLocation().pathname;
  const id = urlString.slice(urlString.lastIndexOf("/") + 1, urlString.length);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    playerService.get(id).then((response) => {
      setPlayer(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <h2 className="text-center">View Player</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{player.id}</td>
          </tr>
          <tr>
            <td>First name</td>
            <td>{player.firstName}</td>
          </tr>
          <tr>
            <td>Last name</td>
            <td>{player.lastName}</td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>{player.dateOfBirth}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{player.gender}</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>{player.nationality}</td>
          </tr>
          <tr>
            <td>Started date</td>
            <td>{player.startedDate}</td>
          </tr>
          <tr>
            <td>Type of player</td>
            <td>{player.typeOfPlayer}</td>
          </tr>
          <tr>
            <td>Salary expected</td>
            <td>{player.salaryExpected}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{player.height} cm</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{player.weight} kg</td>
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
          onClick={() => navigate("/player")}
        >
          Return
        </button>
      </div>
    </>
  );
};

export default ViewPlayer;
