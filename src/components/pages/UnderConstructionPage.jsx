import React from "react";
import Button from "../share/Button";
import Navbar from "../share/Navbar";

export default function UnderConstructionPage() {
  return (
    <>
      <Navbar />
      <img className="coming-soon m-auto" src="/coming-soon.gif" alt="" />
      <div className="container d-flex justify-content-center m-0">
        <a href="/">
          <Button text={"Return to Homepage"} />
        </a>
      </div>
    </>
  );
}
