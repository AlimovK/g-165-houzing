import React, { useState } from "react";
import Filter from "../Filter";
import { Container, Wrapper } from "./style";
import Card from "../Card";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;
const Properties = () => {
  const { search } = useLocation();

  const [data, setData] = useState([]);
  useQuery(
    ["getting started", search],
    () => {
      return fetch(`${url}v1/houses/list${search}`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    }
  );

  return (
    <Container>
      <Filter />
      <h1 className="title">Properties</h1>
      <p className="description center">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <div>{data.length !== 0 && data.length}</div>
      {data.length === 0 ? (
        <h1>{data.length} data found</h1>
      ) : (
        <Wrapper>
          {data.map((value) => {
            return <Card key={value.id} info={value} />;
          })}
        </Wrapper>
      )}
    </Container>
  );
};

export default Properties;
