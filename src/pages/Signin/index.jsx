import React, { useRef } from "react";
import { Container, Wrapper } from "./style";
import { Button, Input } from "../../components/Generic";
const Signin = () => {
  const loginRef = useRef("");
  const pwRef = useRef("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Wrapper autoComplete="on">
        <h1 className="title">Sign in</h1>
        <Input
          ref={loginRef}
          name="login"
          pl={"2px"}
          type={"primary"}
          placeholder={"login"}
          mb={35}
        />
        <Input
          ref={pwRef}
          pl={"2px"}
          name="password"
          type={"primary"}
          placeholder={"password"}
          mb={35}
          inputType={"password"}
        />
        <Button onClick={onSubmit} type={"primary"} width={"100%"}>
          Login
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
