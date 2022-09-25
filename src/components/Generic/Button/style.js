import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "primary":
      return {
        border: "none",
        background: "#0061DF;",
        color: "white",
      };
    case "secondary":
      return {
        border: "1px solid #E6E9EC",
        color: "black",
        background: "transparent",
      };
    default:
      return {
        border: "1px solid white",
        color: "white",
        background: "transparent",
      };
  }
};

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  border-radius: 2px;
  font-size: 14px;
  line-height: 20px;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => height || "44px"};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  ${({ type }) => getType(type)}
  cursor: pointer;
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;

export { Container };
