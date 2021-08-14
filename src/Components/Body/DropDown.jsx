import React from "react";
import { Dropdown } from "react-bootstrap";

const DropDown = () => {
  const dropdownlist = [
    {
      id: 1,
      title: "Return",
    },
    {
      id: 2,
      title: "1 Adult",
    },
    {
      id: 3,
      title: "Economy",
    },
  ];
  return (
    <>
      {dropdownlist.map((item) => (
        <Dropdown className="drop d-down">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {item.title}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">{item.title}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </>
  );
};

export default DropDown;
