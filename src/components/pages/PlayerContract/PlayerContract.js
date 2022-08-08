import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import playerContractService from "../../services/playerContract.service";
import Button from "../../share/Button";
import Navbar from "../../share/Navbar";

export default function PlayerContract() {
  const navigate = useNavigate();
  const [playerContract, setPlayerContract] = useState([]);
  useEffect(() => {
    playerContractService.getAll().then((response) => {
      setPlayerContract(response.data);
    });
  }, []);
  const handleDelete = (id) => {
    playerContractService.remove(id).then(() => {
      playerContractService.getAll().then((response) => {
        setPlayerContract(response.data);
      });
    });
  };
  return (
    <div className="container-fluid">
      <Navbar />
      <h2 className="text-center">Player Contract List</h2>
      <div className="container d-flex justify-content-center mt-0">
        <a href="/playerContract/add">
          <Button text={"Add player contract"} bgColor={"#590DA0"} />
        </a>
      </div>
      <p></p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>ID</td>
            <td>Type of contract</td>
            <td>Position</td>
            <td>Date created</td>
            <td>Date expired</td>
            <td>Team name</td>
            <td>Player name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            (playerContract.sort(function (a, b) {
              return a.id - b.id;
            }),
            playerContract.map((playerContract) => (
              <tr key={playerContract.id}>
                <td>{playerContract.id}</td>
                <td>{playerContract.typeOfContract}</td>
                <td>{playerContract.position}</td>
                <td>{playerContract.dateCreated}</td>
                <td>{playerContract.dateExpired}</td>
                <td>{playerContract.teamName}</td>
                <td>{playerContract.playerName}</td>
                <td>
                  <a href={`/playerContract/view/${playerContract.id}`}>
                    <Button text={"View"} bgColor={"#093B6B"} />
                    {/*   onClick={navigate(`/playerContract/view/${playerContract.id}`)} /> */}
                  </a>
                  <span>&nbsp;</span>
                  <a href={`/playerContract/update/${playerContract.id}`}>
                    <Button text={"Update"} bgColor={"#09186D"} />
                  </a>
                  <span>&nbsp;</span>
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#6D095A",
                      color: "white",
                      border: "none",
                    }}
                    onClick={() => handleDelete(playerContract.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )))
          }
        </tbody>
      </table>
      <div className="container d-flex justify-content-center mt-0">
        <a href="/playerContract">
          <Button text={"Back to top"} bgColor={"#590DA0"} />
        </a>
      </div>
    </div>
  );
}
