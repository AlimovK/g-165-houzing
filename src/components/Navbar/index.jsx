import React from "react";
import { Header, Logo, Nav_Link, Wrapper } from "./style";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Header>
      <Wrapper>
        <Link
          to="/"
          className="logo-wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Logo />
          <h3 className="title">houzing</h3>
        </Link>
        <nav className="nav">
          {navbar.map(({ id, path, title, hidden }) => {
            return (
              !hidden && (
                <Nav_Link key={id} to={path}>
                  {title}
                </Nav_Link>
              )
            );
          })}
        </nav>
        {location.pathname !== "/signin" && (
          <Button width={"130px"} onClick={() => navigate("/signin")}>
            login
          </Button>
        )}
      </Wrapper>
    </Header>
  );
};

export default Navbar;
