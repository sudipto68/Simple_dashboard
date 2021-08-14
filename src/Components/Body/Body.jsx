import React from "react";
import Header from "../Header/Header";
import DropDown from "./DropDown";
import MainBody from "./MainBody";

const Body = () => {
  return (
    <>
      <div className="col-md-10">
        <Header />
        <h4 className="fw-bold">
          Welcome, Find a flexibile flight for your next trip
        </h4>
        <div className="row">
          <div className="dropdown-row">
            <DropDown />
          </div>
        </div>
        <MainBody />
      </div>
    </>
  );
};

export default Body;
