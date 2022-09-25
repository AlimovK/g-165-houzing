import styled from "styled-components";
import { ReactComponent as arrow } from "../../../assets/icons/right-arrow.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  h1 {
    margin-bottom: 4px;
  }
`;

const Wrapper = styled.div`
  margin-top: 32px;
  display: flex;
  width: 100%;
  padding: 0 130px;
  position: relative;
  justify-content: center;
  .alice-carousel {
    max-width: 1240px;
    width: 100%;
  }
  .alice-carousel__stage {
    padding: 20px;
  }
  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: var(--active-color);
  }
  .alice-carousel__dots-item:not(.__custom) {
    border: 1px solid var(--active-color);
    background-color: white;
  }
`;

const Icon = styled.div``;

Icon.Left = styled(arrow)`
  border: 1px solid #0d263b;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 200px;
  transform: translate(0%, -50%) rotate(180deg);
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
  & path {
    fill: #0d263b;
  }
`;
Icon.Right = styled(arrow)`
  border: 1px solid #0d263b;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 44%;
  right: 200px;
  transform: translate(-0%, -40%);
  width: 45px;
  height: 45px;
  background: white;
  padding: 12px;
  opacity: 0.3;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  & path {
    fill: #0d263b;
  }
`;
export { Container, Wrapper, Icon };
