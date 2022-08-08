import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import playerService from "../../services/player.service";
import Navbar from "../../share/Navbar";

export default function UpdatePlayer() {
  const urlString = useLocation().pathname;
  const id = urlString.slice(urlString.lastIndexOf("/") + 1, urlString.length);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [startedDate, setStartedDate] = useState("");
  const [typeOfPlayer, setTypeOfPlayer] = useState("");
  const [salaryExpected, setSalaryExpected] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    const player = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      gender: gender,
      nationality: nationality,
      startedDate: startedDate,
      typeOfPlayer: typeOfPlayer,
      salaryExpected: salaryExpected,
      height: height,
      weight: weight,
    };

    playerService
      .update(id, player)
      .then((response) => {
        console.log("Player updated successfully", response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    playerService.get(id).then((response) => {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setDateOfBirth(response.data.dateOfBirth);
      setGender(response.data.gender);
      setNationality(response.data.nationality);
      setStartedDate(response.data.startedDate);
      setTypeOfPlayer(response.data.typeOfPlayer);
      setSalaryExpected(response.data.salaryExpected);
      setHeight(response.data.height);
      setWeight(response.data.weight);
    });
  }, []);
  return (
    <>
      <Navbar />
      <form className="container-fluid" onSubmit={handleUpdate}>
        <h2 className="text-center">Update Player</h2>
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control col"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control col"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date of birth</label>
              <input
                type="date"
                className="form-control col"
                id="birthday"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                className="form-control col"
                id="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div>
              <p>Gender</p>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    value={"MALE"}
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "MALE"}
                  />
                  Male
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    value={"FEMALE"}
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "FEMALE"}
                  />
                  Female
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    value={"NON_BINARY"}
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "NON_BINARY"}
                  />
                  Non-binary
                </label>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Started date</label>
              <input
                type="date"
                className="form-control col"
                id="startedDate"
                value={startedDate}
                onChange={(e) => setStartedDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Type of player</label>
              <select
                className="form-control col form-select"
                name="type-of-player"
                id="type-of-player"
                value={typeOfPlayer}
                onChange={(e) => setTypeOfPlayer(e.target.value)}
              >
                <option value="ROOKIE">Rookie</option>
                <option value="STANDARD">Standard</option>
                <option value="VETERAN">Veteran</option>
                <option value="TWO_WAY">Two way</option>
              </select>
            </div>
            <div className="form-group">
              <label>Salary expected</label>
              <input
                type="text"
                className="form-control col"
                id="salaryExpected"
                value={salaryExpected}
                onChange={(e) => setSalaryExpected(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Height</label>
              <input
                type="text"
                className="form-control col"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Weight</label>
              <input
                type="text"
                className="form-control col"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>

          <div className="container d-flex justify-content-center mt-0">
            <a href="/player">
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#5D096B",
                  color: "white",
                  border: "none",
                }}
              >
                Update
              </button>
            </a>
            <span>&nbsp;</span>
            <a href="/player">
              <button
                type="button"
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
      </form>
    </>
  );
}
