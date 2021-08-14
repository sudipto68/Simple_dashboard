import React from "react";
import { Figure } from "react-bootstrap";
import ImageCardButton from "./ImageCardButton";
import ImageCardTopButton from "./ImageCardTopButton";

const ImageCard = () => {
  const imageCardList = [
    {
      id: 1,
      title: "Delhi events 2022",
      description: "A small description goes here",
      btn: "- Important",
      topBtn: "Open",
      link: "https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      title: "Top Places to Visit",
      description: "A small description goes here",
      btn: "- Important",
      topBtn: "Restriction",
      link: "https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      title: "Option Without Description",
      description: "goes here",
      btn: "- 2 mins read",
      topBtn: "Covid Travel updates",
      link: "https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      title: "Delhi events 2022",
      description: "A small description goes here",
      btn: "- 2 mins read",
      topBtn: "Open",
      link: "https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  return (
    <>
      {imageCardList.map((i) => (
        <Figure>
          <Figure.Image className="fig-img" src={i?.link} />
          <div className="text-part">
            <h6>{i.title}</h6>
            <p>{i.description}</p>
            <ImageCardButton btn={i.btn} />
            <div className="top-btn">
              <ImageCardTopButton btn={i.topBtn} />
            </div>
          </div>
        </Figure>
      ))}
    </>
  );
};

export default ImageCard;
