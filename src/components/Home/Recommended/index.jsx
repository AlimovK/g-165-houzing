import React, { useRef } from "react";
import Card from "../../Card";
import AliceCarousel from "react-alice-carousel";
import { CardWrapper, Container, Icon } from "./style";
import "react-alice-carousel/lib/alice-carousel.css";
const Recommended = () => {
  const Cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
  const Slider = useRef("click");
  const responsiveCard = {
    0: {
      items: 1,
    },
    840: {
      items: 2,
    },
    1400: {
      items: 3,
    },
  };
  return (
    <Container>
      <h1 className="title">Recommended</h1>
      <p className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CardWrapper item={responsiveCard}>
          <AliceCarousel
            responsive={responsiveCard}
            items={Cards}
            infinite
            disableButtonsControls
            keyboardNavigation
            ref={Slider}
            controlsStrategy="alternate"
          />
        </CardWrapper>
        <Icon.Left onClick={() => Slider.current.slidePrev()} />
        <Icon.Right onClick={() => Slider.current.slideNext()} />
      </div>
    </Container>
  );
};

export default Recommended;
