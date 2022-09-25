import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as arrow } from "../../../assets/icons/right-arrow.svg";

const Container = styled(Carousel)``;

const Wrapper = styled.div`
  position: relative;
  height: fit-content;
`;
const Img = styled.img`
  height: 570px;
  filter: brightness(50%);
`;
const Icon = styled.div``;

Icon.Left = styled(arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translate(100%, -50%) rotate(180deg);
  width: 45px;
  height: 45px;
  padding: 12px;
  background: white;
  opacity: 0.3;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  path {
    fill: #0d263b;
  }
  :hover {
  }
`;
Icon.Right = styled(arrow)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 150px;
  transform: translate(-100%, -50%);
  width: 45px;
  height: 45px;
  padding: 12px;
  background: white;
  padding: 12px;
  opacity: 0.3;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  path {
    fill: #0d263b;
  }
`;

export { Container, Img, Wrapper, Icon };
