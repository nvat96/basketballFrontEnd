import { useState } from "react";
import { useNavigate } from "react-router-dom";
import agentService from "../../services/agent.service";
import Navbar from "../../share/Navbar";

const AddAgent = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const handleCreate = (e) => {
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
    agentService
      .create(agent)
      .then(() => {
        console.log("Created");
        navigate("/agent");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  return (
    <>
      <Navbar />
      <form className="container-fluid" onSubmit={handleCreate}>
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
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#5D096B",
                color: "white",
                border: "none",
              }}
            >
              Save
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
              onClick={() => navigate("/agent")}
            >
              Return
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddAgent;
