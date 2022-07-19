import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import playerService from "../../services/player.service";
import Navbar from "../../share/Navbar.jsx";

const ViewPlayer = () => {
  let urlString = useLocation().pathname;
  let id = urlString.slice(urlString.lastIndexOf("/") + 1, urlString.length);
  const [player, setPlayer] = useState([]);
  const init = () => {
    playerService
      .get(Number(id))
      .then((response) => {
        console.log("Printin player data", response.data);
        setPlayer(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);
  // const gender =
  return (
    <>
      <div className="cotainer-fluid">
        <Navbar></Navbar>
        <h2 className="text-center">Player detail</h2>
        <div className="table table-bordered d-flex flex-column align-items-center playerDetail mb-0">
          <tbody>
            <tr>
              <td>ID</td>
              <td>{id}</td>
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
              <td>Date of Birth</td>
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
              <td>{player.salaryExpected} m/year</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{player.height} m</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{player.weight} kg</td>
            </tr>
          </tbody>
        </div>
        <div className="container d-flex justify-content-center mt-2">
            <a href="http://localhost:3000/player">
              <button
                className="btn btn-primary"
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
    </>
  );
};

export default ViewPlayer;
