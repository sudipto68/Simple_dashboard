import React from "react";
import { Button } from "react-bootstrap";
import ImageCard from "./ImageCard";

const MainBody = () => {
  return (
    <>
      <div className="main-body">
        <hr width="100%" />
        <div className="main-content">
          <h4 className="fw-bold">Countries you can travel to right now</h4>
          <div className="d-flex justify-content-between destination">
            <h5 style={{ color: "grey" }}>
              Popular destinations open to visitors from your country
            </h5>
            <Button variant="outline-primary">See all</Button>
          </div>
          <div className="images">
            <div className="row">
              <div className="col-md-3 w-100 d-flex justify-content-between img-row">
                <ImageCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
