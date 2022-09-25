import React, { forwardRef } from "react";
import { Container, Icon, SearchInput } from "./style";

const Input = forwardRef(
  (
    {
      children,
      onChange,
      onClick,
      height,
      width,
      type,
      pl,
      mr,
      ml,
      mb,
      mt,
      placeholder,
      name,
      defaultValue,
      inputType,
    },
    ref
  ) => {
    return (
      <Container
        type={type}
        height={height}
        width={width}
        mr={mr}
        ml={ml}
        mb={mb}
        mt={mt}
      >
        <Icon>{children}</Icon>
        <SearchInput
          ref={ref}
          pl={pl}
          placeholder={placeholder}
          name={name}
          type={inputType}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </Container>
    );
  }
);

export default Input;
