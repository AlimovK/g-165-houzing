import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  .title {
    margin-bottom: 44px;
  }
`;
const Wrapper = styled.form`
  padding: 30px;
  width: 580px;
  height: 376px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;
export { Container, Wrapper };
