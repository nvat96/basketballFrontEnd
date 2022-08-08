import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import agentService from "../../services/agent.service";
import Navbar from "../../share/Navbar";

export default function UpdateAgent() {
  const urlString = useLocation().pathname;
  const id = urlString.slice(urlString.lastIndexOf("/") + 1, urlString.length);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const agent = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    nationality: nationality,
    dateOfBirth: dateOfBirth,
    phoneNumber: phoneNumber,
    email: email,
  };
  useEffect(() => {
    agentService.get(id).then((response) => {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setGender(response.data.gender);
      setNationality(response.data.nationality);
      setDateOfBirth(response.data.dateOfBirth);
      setPhoneNumber(response.data.phoneNumber);
      setEmail(response.data.email);
    });
  }, []);

  const handleUpdate = () => {
    agentService.update(id, agent);
  };
  return (
    <>
      <Navbar />
      <form className="container-fluid">
        <h2 className="text-center">Update Agent</h2>
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
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#5D096B",
                color: "white",
                border: "none",
              }}
              onClick={(e) => handleUpdate(e)}
            >
              Update
            </button>
            <span>&nbsp;</span>
            <a href="/agent">
              <button
                type="button"
                className="btn"
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
