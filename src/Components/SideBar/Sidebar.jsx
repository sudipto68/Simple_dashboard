import React from "react";
import "../../App.css";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosAirplane } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { GiSchoolBag } from "react-icons/gi";
import { GiDirectionSigns } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { GrDirections } from "react-icons/gr";
import { BiGitRepoForked } from "react-icons/bi";
import { FaBook } from "react-icons/fa";

const SideBar = () => {
  return (
    <>
      <div className="col-md-2 sidebar">
        <div className="top-items">
          <IoMenuSharp style={{ fontSize: "20px", marginTop: "10px" }} />
          <hr style={{ marginBottom: "5px" }} />
          <div style={{ display: "flex" }}>
            <img
              src="https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="girl"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <p style={{ fontWeight: "400" }}>Amanda Victor</p>
          </div>
          <hr style={{ marginTop: "-5px" }} />
        </div>
        <div className="first-list-section">
          <ul>
            <li className="first-li">
              <div>
                <IoIosAirplane
                  style={{ transform: "rotate(-45deg)" }}
                  className="icons"
                />
                Flights
              </div>
            </li>
            <li>
              <div>
                <AiFillHome className="icons" />
                <span>Stays</span>
              </div>
            </li>
            <li>
              <div>
                <AiFillCar className="icons" />
                <span>Car Rental</span>
              </div>
            </li>
            <li>
              <div>
                <CgNotes className="icons" />
                <span>Things to do</span>
              </div>
            </li>
            <li>
              <div>
                <GiSchoolBag className="icons" />
                <span>Flight + Hotel</span>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <div className="section-list-section">
          <ul>
            <li>
              <div>
                <GiDirectionSigns className="icons" />
                <span>Explore</span>
              </div>
            </li>
            <li>
              <div>
                <RiMoneyDollarBoxFill className="icons" />
                <span>Deal</span>
              </div>
            </li>
            <li>
              <div>
                <GrDirections className="icons" />
                <span>Routes</span>
              </div>
            </li>
            <li>
              <div>
                <BiGitRepoForked className="icons" />
                <span>Direct</span>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <div className="last-section">
          <li>
            <div>
              <FaBook className="icons" />
              <span>Trips</span>
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default SideBar;
