import React from "react";
import Button from "../share/Button";
import Navbar from "../share/Navbar";

export default function UnderContructionPage() {
  return (
    <>
      <Navbar />
      <img className="coming-soon m-auto" src="/coming-soon.gif" alt="" />
      <div className="container d-flex justify-content-center m-0">
        <a href="http://localhost:3000/">
          <Button text={"Return to Homepage"} />
        </a>
      </div>
    </>
  );
}
