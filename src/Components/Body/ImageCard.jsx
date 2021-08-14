import React from "react";
import { Figure } from "react-bootstrap";
import ImageCardButton from "./ImageCardButton";

const ImageCard = () => {
  const imageCardList = [
    {
      id: 1,
      title: "Delhi events 2022",
      description: "A small description goes here",
      btn: "Important",
      link: "https://images.pexels.com/photos/3492589/pexels-photo-3492589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      title: "Top Places to Visit",
      description: "A small description goes here",
      btn: "Important",
      link: "https://images.pexels.com/photos/3492589/pexels-photo-3492589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      title: "Option Without Description",
      description: "A small description goes here",
      btn: "2 mins read",
      link: "https://images.pexels.com/photos/3492589/pexels-photo-3492589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      title: "Delhi events 2022",
      description: "A small description goes here",
      btn: "2 mins read",
      link: "https://images.pexels.com/photos/3492589/pexels-photo-3492589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
          </div>
        </Figure>
      ))}
    </>
  );
};

export default ImageCard;
