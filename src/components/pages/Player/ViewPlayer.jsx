import React from "react";
import { useLocation } from "react-router-dom";
import playerService from "../../services/player.service";
import Navbar from "../../share/Navbar.jsx";

const ViewPlayer = () => {
  let urlString = useLocation().pathname;
  let id = urlString.slice(urlString.lastIndexOf("/") + 1, urlString.length);

  
  const player = fetch(playerService.get(id))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return ["player"];
    });


  // const player = async () => {
  //     const res = await fetch(playerService.get(id));
  //     const data = await res.json();
  //     console.log(data);
  //}
  return (
    // <div className="cotainer-fluid">
    //   <Navbar></Navbar>
    //   <div className="row">
    //     <div className="table table-bordered">
    //       <tr>
    //         <td>ID</td>
    //         <td>{player.id}</td>
    //       </tr>
    //       <tr>
    //         <td>First name</td>
    //         <td>{player.firstName}</td>
    //       </tr>
    //       <tr>
    //         <td>Last name</td>
    //         <td>{player.lastName}</td>
    //       </tr>
    //     </div>
    //   </div>
    // </div>
    console.log(player)
  );
};

export default ViewPlayer;
