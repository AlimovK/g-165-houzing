import styled from "styled-components";
import { ReactComponent as arrow } from "../../../assets/icons/right-arrow.svg";

// const ResponsiveCard = (item) => {
//   switch (item) {
//     case 0:
//       return { maxWidth: "100%" };
//       case 840: return{maxWidth:}
//   }
// };

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  h1 {
    margin-bottom: 4px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 600px;
  max-width: 1400px;
  .alice-carousel {
    max-width: 1280px;
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
  transition: all 0.4s;
  border-radius: 50%;
  z-index: 999;
  border: 1px solid #e6e9ec;
  cursor: pointer;
  path {
    fill: var(--primary-color);
  }

  box-shadow: 0px 0px 14px 0px rgba(34, 60, 80, 0.2);
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
  /* opacity: 0.3; */
  border-radius: 50%;
  z-index: 999;
  transition: all 0.4s;
  border: 1px solid #e6e9ec;
  cursor: pointer;
  path {
    fill: var(--primary-color);
  }

  box-shadow: 0px 0px 14px 0px rgba(34, 60, 80, 0.2);
`;

export { Container, CardWrapper, Icon };
