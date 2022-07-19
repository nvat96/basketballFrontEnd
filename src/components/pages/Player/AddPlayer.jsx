import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import playerService from "../../services/player.service";
import Button from "../../share/Button";
import Navbar from "../../share/Navbar";

const AddPlayer = () => {
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
  const { id } = useParams;
  const savePlayer = (e) => {
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
    if (id) {
      //update
      playerService
        .update(id, player)
        .then((response) => {
          console.log("Player data updated successfullly", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create
      playerService
        .create(player)
        .then((response) => {
          console.log("Player added successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };
  useEffect(() => {
    if (id) {
      console.log(+id);
      playerService
        .get(id)
        .then((player) => {
          setFirstName(player.data.firstName);
          setLastName(player.data.lastName);
          setDateOfBirth(player.data.dateOfBirth);
          setGender(player.data.gender);
          setNationality(player.data.nationality);
          setStartedDate(player.data.startedDate);
          setTypeOfPlayer(player.data.typeOfPlayer);
          setSalaryExpected(player.data.salaryExpected);
          setHeight(player.data.height);
          setWeight(player.data.weight);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);
  return (
    <>
      <Navbar />
      <form className="container-fluid">
        <h2 className="text-center">Add Player</h2>
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
                    checked
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
            <a href="http://localhost:3000/player">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#5D096B",
                  color: "white",
                  border: "none",
                }}
                onClick={(e) => savePlayer(e)}
              >
                Save
              </button>
            </a>
            {/* <Button
              text={"Save"}
              bgColor={"#5D096B"}
              onClick={(e) => savePlayer(e)}
            /> */}
            <span>&nbsp;</span>
            <a href="http://localhost:3000">
              <Button bgColor={"#1A096B"} text={"Return"} />
            </a>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddPlayer;
