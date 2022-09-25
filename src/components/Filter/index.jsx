import React, { useState } from "react";
import { Input, Button } from "../Generic";
import { Advanced, Container, Icon } from "./style";
import { Popover } from "antd";
import { UseReplace } from "../../hooks/useReplace";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
const Filter = () => {
  const query = useSearch();

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const changeVisible = () => {
    setVisible(!visible);
  };
  const hide = () => {
    setVisible(false);
  };

  const change = ({ target }) => {
    const { name, value } = target;
    navigate(`${UseReplace(name, value)}`);
  };

  const AdvancedContent = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Advanced.Input>
        <Input
          onChange={change}
          name="country"
          defaultValue={query.get("country")}
          width={"200px"}
          placeholder={"Country"}
        />
        <Input
          onChange={change}
          name="region"
          defaultValue={query.get("region")}
          width={"200px"}
          placeholder={"Region"}
        />
        <Input
          onChange={change}
          name="city"
          width={"200px"}
          defaultValue={query.get("city")}
          placeholder={"City"}
        />
        <Input
          onChange={change}
          name="zip_code"
          defaultValue={query.get("zip_code")}
          width={"200px"}
          placeholder={"Zip Code"}
        />
      </Advanced.Input>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Advanced.Input>
        <Input width={"200px"} placeholder={"Rooms"} />
        <Input width={"200px"} placeholder={"Size"} />
        <Input width={"200px"} placeholder={"Sort"} />
      </Advanced.Input>
      <Advanced.Title>Price</Advanced.Title>
      <Advanced.Input>
        <Input width={"200px"} placeholder={"Min price"} />
        <Input width={"200px"} placeholder={"Max price"} />
      </Advanced.Input>
      <Advanced.ButtonWrapper>
        <Button
          onClick={() => hide()}
          mr={30}
          width={"128px"}
          type={"secondary"}
        >
          Cancel
        </Button>
        <Button mr={20} width={"128px"} type={"primary"}>
          Submit
        </Button>
      </Advanced.ButtonWrapper>
    </Advanced>
  );

  return (
    <Container>
      <div className="wrapper">
        <Input
          pl={"50px"}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icon.House />
        </Input>
        <Popover
          trigger="click"
          visible={visible}
          onVisibleChange={changeVisible}
          content={AdvancedContent}
          placement="bottomRight"
        >
          <Button ml={20} width={"140px"} type={"secondary"}>
            <Icon.Setting />
            Advanced
          </Button>
        </Popover>
        <Button ml={20} width={"180px"} type={"primary"}>
          <Icon.Loupe />
          Search
        </Button>
      </div>
    </Container>
  );
};

export default Filter;
