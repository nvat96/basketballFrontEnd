import React, { useState } from "react";
import { useEffect } from "react";
import agentService from "../../services/agent.service";
import Button from "../../share/Button";
import Navbar from "../../share/Navbar.jsx";

export default function Agent() {
  const [agent, setAgent] = useState([]);
  const init = () => {
    agentService
      .getAll()
      .then((response) => {
        console.log("Printing agent data", response.data);
        setAgent(response.data);
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
    agentService.remove(id).then((response) => {
      console.log("Agent deleted successfully", response.data);
    });
  };
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <h2 className="text-center">Agents List</h2>
      <div className="container d-flex justify-content-center mt-0">
        <a href="http://localhost:3000/agent/add">
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
                  <Button text={"View"} bgColor={"#093B6B"} />
                  <span>&nbsp;</span>
                  <a href={`http://localhost:3000/agent/update/${agent.id}`}>
                    <Button text={"Update"} bgColor={"#09186D"} />
                  </a>
                  <span>&nbsp;</span>
                  <a href="http://localhost:3000/agent">
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
                  </a>
                  {/* <Button
                    text={"Delete"}
                    bgColor={"#6D095A"}
                    onClick={() => {
                      handleDelete(agent.id);
                    }}
                  /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container d-flex justify-content-center mt-0">
        <a href="http://localhost:3000/agent">
          <Button text={"Back to top"} bgColor={"#590DA0"} />
        </a>
      </div>
    </div>
  );
}
