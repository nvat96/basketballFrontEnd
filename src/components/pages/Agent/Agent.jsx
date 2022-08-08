import React, { useState } from "react";
import { useEffect } from "react";
import agentService from "../../services/agent.service";
import Button from "../../share/Button";
import Navbar from "../../share/Navbar.jsx";

export default function Agent() {
  const [agent, setAgent] = useState([]);
  useEffect(() => {
    agentService
      .getAll()
      .then((response) => {
        console.log("Printing agent data", response.data);
        setAgent(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);
  const handleDelete = (id) => {
    console.log("Printing id", id);
    agentService
      .remove(id)
      .then((response) => {
        console.log("Agent deleted successfully", response.data);
      })
      .then(() => {
        agentService.getAll().then((response) => {
          setAgent(response.data);
        });
      });
  };
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <h2 className="text-center">Agents List</h2>
      <div className="container d-flex justify-content-center mt-0">
        <a href="/agent/add">
          <Button text={"Add agent"} bgColor={"#590DA0"} />
        </a>
      </div>
      <p></p>
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Agent ID</th>
              <th>Agent name</th>
              <th>Agent email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {agent.map((agent) => (
              <tr key={agent.id}>
                <td>{agent.id}</td>
                <td>{agent.agentName}</td>
                <td>{agent.email}</td>
                <td className="d-flex justify-content-center">
                  <a href={`/agent/view/${agent.id}`}>
                    <Button text={"View"} bgColor={"#093B6B"} />
                  </a>

                  <span>&nbsp;</span>
                  <a href={`/agent/update/${agent.id}`}>
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
                    onClick={() => {
                      handleDelete(agent.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container d-flex justify-content-center mt-0">
        <a href="/agent">
          <Button text={"Back to top"} bgColor={"#590DA0"} />
        </a>
      </div>
    </div>
  );
}
