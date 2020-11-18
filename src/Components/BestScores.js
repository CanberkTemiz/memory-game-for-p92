import React from "react";
import { Accordion, Card, Button, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { useStore } from "../Store";

const StyledWrapper = styled.div`
  margin: 40px 0 40px 0;
`;

const BestScores = () => {
  const store = useStore();
  return (
    <StyledWrapper>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Show Best Results
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup variant="flush">
                {store.bestScore.map((element, index) => {
                  return (
                    <ListGroup.Item key={index}>
                      <h3>
                        {element.pair}# Pair - Best Score:{element.score}
                      </h3>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </StyledWrapper>
  );
};

export default BestScores;
