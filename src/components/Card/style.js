import styled from "styled-components";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as like } from "../../assets/icons/like.svg";
import { ReactComponent as zoom } from "../../assets/icons/zoom.svg";

const Container = styled.div`
  position: relative;
  width: 380px;
  min-width: 350px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
`;

const Featured = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
  /* height: 23px; */
  padding: 5px 12px;
  user-select: none;
  color: #ffffff;
  background: var(--active-color);
  border-radius: 3px;
  text-transform: uppercase;
`;
const ForSale = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
  /* height: 23px; */
  padding: 5px 12px;
  user-select: none;
  color: #ffffff;
  background: var(--primary-color);
  border-radius: 3px;
  text-transform: uppercase;
`;
const Owner = styled.img`
  position: absolute;
  right: 23px;
  top: 201px;
  width: 38px;
  height: 38px;
  /* background: #ffffff; */
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  border-radius: 50%;
  border: 2px solid white;
`;

const Img = styled.img`
  height: 220px;
  width: 100%;
`;
const CardInfo = styled.div`
  border-top: 1px solid #e6e9ec;
  width: 100%;
  padding: 24px 20px 0 20px;
`;
const Icon = styled.div``;
Icon.Bed = styled(bed)``;
Icon.Bath = styled(bath)``;
Icon.Car = styled(car)``;
Icon.Ruler = styled(ruler)``;
Icon.Like = styled(like)``;
Icon.Zoom = styled(zoom)`
  margin-right: 20px;
  cursor: pointer;
`;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
const Details = styled.div`
  text-align: center;
`;

const PriceSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  border-top: 1px solid #e6e9ec;
  .like {
    background: #f6f8f9;
    border-radius: 60px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const OldPrice = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`;
export {
  Container,
  Img,
  CardInfo,
  Icon,
  DetailsWrapper,
  Details,
  PriceSection,
  OldPrice,
  Featured,
  ForSale,
  Owner,
};
