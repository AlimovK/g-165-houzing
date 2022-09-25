import React from "react";
import { Container } from "./style";

const Button = ({ onClick, type, width, height, ml, mr, mb, mt, children }) => {
  return (
    <Container
      width={width}
      height={height}
      type={type}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
