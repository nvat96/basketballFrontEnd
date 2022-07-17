import React, { useState } from "react";
import { useEffect } from "react";
import playerService from "../../services/player.service";
import Button from "../../share/Button";
import Navbar from "../../share/Navbar.jsx";

export default function Player() {
  const [player, setPlayer] = useState([]);

  const init = () => {
    playerService
      .getAll()
      .then((response) => {
        console.log("Printing player data", response.data);
        setPlayer(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);
  const handleDelete = (id) => {
    console.log("Printing id", id);
    playerService.remove(id).then((response) => {
      console.log("Player deleted successfully", response.data);
    });
  };
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <h2 className="text-center">Players List</h2>
      <div className="container d-flex justify-content-center mt-0">
        <a href="http://localhost:3000/player/add">
          <Button text={"Add player"} bgColor={"#590DA0"} />
        </a>
      </div>
      <p></p>
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Player ID</th>
              <th>Player name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {player.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.playerName}</td>
                <td className="d-flex justify-content-center">
                  <a href={`http://localhost:3000/player/view/${player.id}`}>
                  <Button text={"View"} bgColor={"#093B6B"} />
                  </a>
                  {/* <Button text={"View"} bgColor={"#093B6B"} /> */}
                  <span>&nbsp;</span>
                  <a href={`http://localhost:3000/player/update/${player.id}`}>
                    <Button text={"Update"} bgColor={"#09186D"} />
                  </a>
                  {/* <Button text={"Update"} bgColor={"#09186D"} /> */}
                  <span>&nbsp;</span>
                  <a href="http://localhost:3000/player">
                    <button
                      className="btn btn-primary"
                      style={{ backgroundColor: "#6D095A", color: "white", border:"none" }}
                      onClick={() => {
                        handleDelete(player.id);
                      }}
                    >
                      Delete
                    </button>
                  </a>
                  {/* <Button
                    text={"Delete"}
                    bgColor={"#6D095A"}
                    onClick={() => {
                      handleDelete(player.id);
                    }}
                  /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container d-flex justify-content-center mt-0">
        <a href="http://localhost:3000/player">
          <Button text={"Back to top"} bgColor={"#590DA0"} />
        </a>
      </div>
    </div>
  );
}
