import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: var(--primary-color);
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  color: white;
  h3 {
    margin-bottom: 0;
  }
  .logo-wrapper {
    display: flex;
    align-items: center;
  }
  .title {
    margin-left: 7px;
    text-transform: capitalize;
    color: #fff;
  }
  .nav {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    a {
      color: white;
      padding-bottom: 5px;
    }
    .active {
      font-weight: 600;
      border-bottom: 1px solid white;
    }
  }

  -webkit-touch-callout: none; //IOS safari
  -webkit-user-select: none; //safari
  -khtml-user-select: none; //Konqueror HTML
  -moz-user-select: none; //firefox old version
  -ms-user-select: none; // internet explorer/ Edge
  user-select: none; //Non-prefixed version, supported by chrome,firefox and opera
`;
const Nav_Link = styled(NavLink)`
  margin: 0 32px;
  font-size: 18px;
  line-height: 24px;
`;
const Logo = styled(logo)``;

export { Header, Wrapper, Logo, Nav_Link };
