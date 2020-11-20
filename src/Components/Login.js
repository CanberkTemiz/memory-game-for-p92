import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import localStorage from "mobx-localstorage";

import styled from "styled-components";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";
import { useStore } from "../Store";

const StyledFormControl = styled(FormControl)`
  width: 200px !important;
`;

const StyledRules = styled.div`
  margin-left: 60px;
`;

const Login = observer(() => {
  const store = useStore();
  const [option, setOption] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //start the game
    store.setOption(option);
    store.setLogin(true);
    localStorage.setItem("isLogged", "true");

    store.setReloadControl();
  };

  return (
    <Row>
      <Col>
        <StyledRules>
          <h2>Rules</h2>
          <ul>
            <li>Click any card to see a hidden number</li>
            <li>Find a card pair that shares same number</li>
            <li>If card are not matching, they be flip back</li>
            <li>Game ends when all cards are removed</li>
          </ul>
        </StyledRules>
      </Col>

      <Col>
        <h3> Set pair of card to start</h3>
        <Form onSubmit={(e) => handleFormSubmit(e)} inline>
          <StyledFormControl
            type="number"
            placeholder="Enter number of pair"
            min="3"
            max="10"
            required
            className="mr-sm-2"
            onChange={(e) => setOption(e.target.value)}
          />

          <Button type="submit" variant="danger">
            Start Game
          </Button>
        </Form>
      </Col>
    </Row>
  );
});

export default Login;
