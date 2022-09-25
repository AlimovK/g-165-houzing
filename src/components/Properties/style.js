import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin-top: 64px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 130px;
  max-width: 1440px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-bottom: 100px;
`;
export { Container, Wrapper };
