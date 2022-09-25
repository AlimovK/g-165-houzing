import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "primary":
      return {
        border: "none",
        borderBottom: "1px solid #e6e9ec",
        color: "white",
      };
    default:
      return {
        border: `1px solid #e6e9ec`,
      };
  }
};

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => height || "44px"};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  border-radius: 2px;
  ${({ type }) => getType(type)}
`;

const Icon = styled.span`
  position: absolute;
  transform: translate(-50%, -44%);
  top: 50%;
  left: 30px;
`;

const SearchInput = styled.input`
  display: flex;
  width: 100%;
  padding-left: ${({ pl }) => pl || "0"};
  outline: none;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  :focus {
    box-shadow: 0px 0px 5px 0.1px var(--activeColor);
  }
`;
export { Container, SearchInput, Icon };
