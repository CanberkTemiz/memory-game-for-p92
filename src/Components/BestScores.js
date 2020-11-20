import { observer } from "mobx-react";
import React from "react";
import { Accordion, Card, Button, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { useStore } from "../Store";

const StyledWrapper = styled.div`
  margin: 40px 0 40px 0;
  display: flex;
  justify-content: center;
`;

const BestScores = observer(() => {
  const store = useStore();

  return (
    <StyledWrapper>
      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Button} eventKey="0" variant="danger">
            Show Best Results
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup variant="flush">
                {store.bestScore &&
                  store.bestScore.map((element, index) => {
                    return (
                      <ListGroup.Item key={index}>
                        <p>
                          {element.pair}# Pair - Best Score:{element.score}
                        </p>
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
});

export default BestScores;
