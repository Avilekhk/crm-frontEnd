import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import PageBreadCrumb from "../../components/breadcrumb/Breadcrumb.comp";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  details: "",
};

export const AddedTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  useEffect(() => {}, [frmData]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submit request received");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
          />
        </Col>
      </Row>
    </Container>
  );
};
