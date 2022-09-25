import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 280px;
  height: 350px;
  border-radius: 3px;
  cursor: pointer;
  margin-right: ${({ mr }) => `${mr}px`};
  :hover {
    box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
      0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  /* filter: brightness(50%); */
`;
const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 60px;
  height: 60px;
`;

const Title = styled.span`
  font-family: "Montserrat";
  position: absolute;
  text-transform: capitalize;
  top: 55%;
  right: 50%;
  transform: translate(50%, 150%);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;
export { Container, Img, Icon, Title };
