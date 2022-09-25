import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Generic";
import page_not_found from "../../assets/imgs/page_not_found.png";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={page_not_found} alt="not found" />
      <h1>OOPS 404 page not found</h1>
      <Button width={"140px"} type={"primary"} onClick={() => navigate(-1)}>
        go back
      </Button>
    </div>
  );
};

export default PageNotFound;
