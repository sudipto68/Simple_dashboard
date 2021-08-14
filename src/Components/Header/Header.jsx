import React from "react";
import { Dropdown } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="header">
        <h3>Logo</h3>
        <div className="list">
          <ul>
            <li>
              <a href="www">Business</a>
            </li>
            <li>
              <a href="www" className="new">
                New
              </a>
            </li>
            <li className="icon icon1">|</li>
            <li>
              <a href="www">Trip</a>
            </li>
            <li className="icon">
              <AiFillHeart />
            </li>
            <li className="logout">
              <a href="www">
                <FiLogOut /> Log out
              </a>
            </li>
            <li>
              <Dropdown className="drop">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img
                    src="https://icons.iconarchive.com/icons/wikipedia/flags/512/US-United-States-Flag-icon.png"
                    alt="usa"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <img
                      src="https://icons.iconarchive.com/icons/wikipedia/flags/512/US-United-States-Flag-icon.png"
                      alt="usa"
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
