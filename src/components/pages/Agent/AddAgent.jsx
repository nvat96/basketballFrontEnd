import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agentService from "../../services/agent.service";
import Button from "../../share/Button";
import Navbar from "../../share/Navbar";

const AddAgent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("MALE");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams;
  const saveAgent = (e) => {
    e.preventDefault();
    const agent = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      nationality: nationality,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      email: email,
    };

    if (id) {
      agentService
        .update(id, agent)
        .then((response) => {
          console.log("Agent data updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      agentService
        .create(agent)
        .then((response) => {
          console.log("Agent added successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };
  useEffect(() => {
    if (id) {
      console.log(+id);
      agentService
        .get(id)
        .then((agent) => {
          setFirstName(agent.data.firstName);
          setLastName(agent.data.lastName);
          setGender(agent.data.gender);
          setNationality(agent.data.nationality);
          setDateOfBirth(agent.data.dateOfBirth);
          setPhoneNumber(agent.data.phoneNumber);
          setEmail(agent.data.email);
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
        <h2 className="text-center">Add Agent</h2>
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
              <label>Nationality</label>
              <input
                type="text"
                className="form-control col"
                id="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input
                type="text"
                className="form-control col"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control col"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="container d-flex justify-content-center mt-0">
            <a href="http://localhost:3000/agent">
              <button
                className="btn"
                style={{
                  backgroundColor: "#5D096B",
                  color: "white",
                  border: "none",
                }}
                onClick={(e) => saveAgent(e)}
              >
                Save
              </button>
            </a>
            {/* Button as a component */}
            {/* <Button
              text={"Save"}
              bgColor={"#5D096B"}
              onClick={(e) => saveAgent(e)}
            /> */}
            <span>&nbsp;</span>
            {/* <a href="http://localhost:3000/agent">
              <Button bgColor={"#1A096B"} text={"Return"} />
            </a> */}
          </div>
        </div>
      </form>
    </>
  );
};
export default AddAgent;
