import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    header: "Welcome",
    key: 1,
    src: "https://picsum.photos/id/123/1200/600",
  },
  {
    header: "Welcome",
    key: 2,
    src: "https://picsum.photos/id/456/1200/600",
  },
  {
    header: "Welcome",
    key: 3,
    src: "https://picsum.photos/id/678/1200/600",
  },
];

const CarouselComponent = () => {
  return (
    <div className="carousel-cont">
      <UncontrolledCarousel items={items} />
    </div>
  );
};

export default CarouselComponent;
