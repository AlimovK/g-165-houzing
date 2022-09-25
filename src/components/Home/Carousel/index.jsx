import React, { useRef } from "react";
import { Container, Img, Wrapper, Icon } from "./style";
import home1 from "../../../assets/imgs/home1.png";
import home2 from "../../../assets/imgs/home2.png";

const Carousel = () => {
  const slider = useRef("click");
  console.log(slider);
  return (
    <Wrapper>
      <Container autoplay ref={slider}>
        <Img src={home1} alt="home1" />
        <Img src={home2} alt="home2" />
        <Img src={home1} alt="home1" />
        <Img src={home2} alt="home2" />
      </Container>
      <Icon.Left onClick={() => slider.current.prev()} />
      <Icon.Right onClick={() => slider.current.next()} />
    </Wrapper>
  );
};

export default Carousel;
