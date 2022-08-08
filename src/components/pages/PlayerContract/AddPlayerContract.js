import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import playerContractService from "../../services/playerContract.service";
import Navbar from "../../share/Navbar";

export default function AddPlayerContract() {
  const navigate = useNavigate();
  const [typeOfContract, setTypeOfContract] = useState("ROOKIE");
  const [position, setPosition] = useState("PF");
  const [dateCreated, setDateCreated] = useState("");
  const [dateExpired, setDateExpired] = useState("");
  const [body, setBody] = useState("");
  const [number, setNumber] = useState("");
  const [salary, setSalary] = useState("");
  const [teamName, setTeamName] = useState("");
  const [playerFirstName, setPlayerFirstName] = useState("");
  const [playerLastName, setPlayerLastName] = useState("");
  const [text, setText] = useState("Add");
  const [buttonAction, setButtonAction] = useState("Save");
  const id = useParams().id;
  const playerContract = {
    typeOfContract: typeOfContract,
    position: position,
    dateCreated: dateCreated,
    dateExpired: dateExpired,
    body: body,
    number: number,
    salary: salary,
    teamName: teamName,
    playerFirstName: playerFirstName,
    playerLastName: playerLastName,
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (id) {
      playerContractService.update(id, playerContract).then(() => {
        console.log("Updated");
        navigate("/playerContract");
      });
    } else
      playerContractService.create(playerContract).then(() => {
        console.log("Created");
        navigate("/playerContract");
      });
  };

  useEffect(() => {
    console.log(id);
    if (id) {
      playerContractService.get(id).then((response) => {
        setTypeOfContract(response.data.typeOfContract);
        setPosition(response.data.position);
        setDateCreated(response.data.dateCreated);
        setDateExpired(response.data.dateExpired);
        setTeamName(response.data.team.name);
        setPlayerFirstName(response.data.player.firstName);
        setPlayerLastName(response.data.player.lastName);
        setBody(response.data.body);
        setNumber(response.data.number);
        setSalary(response.data.salary);
        setText("Update");
        setButtonAction("Update");
      });
    }
  }, []);
  return (
    <>
      <Navbar />
      <form className="container-fluid" onSubmit={handleSave}>
        <h2 className="text-center">{text} Player Contract</h2>
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Player first name</label>
              <input
                type="text"
                className="form-control col"
                id="playerFirstName"
                value={playerFirstName}
                onChange={(e) => setPlayerFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Player last name</label>
              <input
                type="text"
                className="form-control col"
                id="playerLastName"
                value={playerLastName}
                onChange={(e) => setPlayerLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date created</label>
              <input
                type="date"
                className="form-control col"
                id="dateCreated"
                value={dateCreated}
                onChange={(e) => setDateCreated(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Type of contract</label>
              <select
                className="form-control col form-select"
                name="type-of-contract"
                id="type-of-contract"
                value={typeOfContract}
                onChange={(e) => setTypeOfContract(e.target.value)}
              >
                <option value="ROOKIE">Rookie</option>
                <option value="STANDARD">Standard</option>
                <option value="VETERAN">Veteran</option>
                <option value="TWO_WAY">Two way</option>
                <option value="PART_TIME">Part time</option>
                <option value="SUPERMAX">Supermax</option>
                <option value="TRIAL">Trial</option>
              </select>
            </div>
            <div className="form-group">
              <label>Position</label>
              <select
                className="form-control col form-select"
                name="position"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="PG">PG</option>
                <option value="SG">SG</option>
                <option value="SF">SF</option>
                <option value="PF">PF</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Team name</label>
              <input
                type="text"
                className="form-control col"
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Salary</label>
              <input
                type="text"
                className="form-control col"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date expired</label>
              <input
                type="date"
                className="form-control col"
                id="dateExpired"
                value={dateExpired}
                onChange={(e) => setDateExpired(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Number</label>
              <input
                type="text"
                className="form-control col"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <input
                type="text"
                className="form-control col"
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
          </div>
          <div className="container d-flex justify-content-center mt-0">
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#5D096B",
                color: "white",
                border: "none",
              }}
            >
              {buttonAction}
            </button>
            <span>&nbsp;</span>
            <button
              type="button"
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
        </div>
      </form>
    </>
  );
}
