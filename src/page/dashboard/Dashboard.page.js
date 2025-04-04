import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

 import tickets  from "../../assets/data/dummy-tickets.json";
 
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add new Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className=" mt-2 ">
          <div>Recently Added Tickets</div>
        </Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket ">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
