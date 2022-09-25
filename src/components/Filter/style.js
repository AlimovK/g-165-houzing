import styled from "styled-components";
import { ReactComponent as house } from "../../assets/icons/house.svg";
import { ReactComponent as setting } from "../../assets/icons/setting-lines.svg";
import { ReactComponent as loupe } from "../../assets/icons/loupe.svg";
const Container = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
  width: 100%;
  .wrapper {
    display: flex;
    width: 100%;
    max-width: 1440px;
  }
`;
const Icon = styled.div``;
Icon.House = styled(house)``;
Icon.Setting = styled(setting)`
  margin-right: 8px;
`;
Icon.Loupe = styled(loupe)`
  margin-right: 8px;
`;

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  text-transform: capitalize;
`;
Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin: 20px 0 10px 0;
  line-height: 24px;
  color: #0d263b;
`;
Advanced.Input = styled.div`
  display: flex;
  gap: 20px;
`;
Advanced.ButtonWrapper = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export { Container, Icon, Advanced };
