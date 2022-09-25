import React from "react";
import { Container, Icon, Img, Title } from "./style";
import testImg from "../../../../assets/imgs/category.png";
import { ReactComponent as Office } from "../../../../assets/icons/office.svg";
const CategoryCard = ({ info, mr }) => {
  return (
    <Container mr={mr}>
      <Img src={info?.img || testImg} />
      <Icon>{info?.icon || <Office />}</Icon>
      <Title>{info.name || "Office"}</Title>
    </Container>
  );
};

export default CategoryCard;
