import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import agentService from "../../services/agent.service";
import Navbar from "../../share/Navbar";
export default function ViewAgent() {
  const urlString = useLocation().pathname;
  const id = urlString.slice(urlString.lastIndexOf("/") + 1, urlString.length);
  const [agent, setAgent] = useState({});
  useEffect(() => {
    agentService.get(id).then((response) => {
      setAgent(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <h2 className="text-center">View Agent</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{agent.id}</td>
          </tr>
          <tr>
            <td>First name</td>
            <td>{agent.firstName}</td>
          </tr>
          <tr>
            <td>Last name</td>
            <td>{agent.lastName}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{agent.gender}</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>{agent.nationality}</td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>{agent.dateOfBirth}</td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>{agent.phoneNumber}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{agent.email}</td>
          </tr>
        </tbody>
      </table>
      <div className="container d-flex justify-content-center mt-0">
        <a href="/agent">
          <button
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
    </>
  );
}
