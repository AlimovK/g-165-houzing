import React from "react";
import CategoryCard from "./CategoryCard";
import { Container, Wrapper, Icon } from "./style";
import AliceCarousel from "react-alice-carousel";
import { useRef } from "react";
import { useQuery } from "react-query";
import { useState } from "react";

const { REACT_APP_BASE_URL: url } = process.env;

const Category = () => {
  const slider = useRef("click");
  const [data, setData] = useState([]);
  useQuery(
    ["", data],
    () => {
      return fetch(`${url}v1/categories/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        const cardData = res.data.map((value) => {
          return <CategoryCard key={value.id} info={value} />;
        });
        return setData(cardData);
      },
    }
  );
  console.log(data);
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 4,
    },
  };

  return (
    <Container>
      <h1 className="title">Category</h1>
      <p className="description">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Wrapper>
        <AliceCarousel
          ref={slider}
          disableButtonsControls={true}
          controlsStrategy="alternate"
          responsive={responsive}
          items={data}
          infinite
        />
        <Icon.Left onClick={() => slider.current.slidePrev()} />
        <Icon.Right onClick={() => slider.current.slideNext()} />
      </Wrapper>
    </Container>
  );
};

export default Category;
