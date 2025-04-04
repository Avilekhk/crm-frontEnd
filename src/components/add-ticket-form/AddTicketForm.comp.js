import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt }) => {
  console.log(frmDt);
  return (
    <Form autoComplete="off" onSubmit={handleOnSubmit}>
      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          Subject
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            name="sub"
            placeholder="Subject"
            value={frmDt?.sub}
            onChange={handleOnChange}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          Issue Found
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="date"
            name="issueDate"
            placeholder="Password"
            onChange={handleOnChange}
            value={frmDt?.issueDate}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Password
        </Form.Label>
        <Col sm="9">
          <Form.Control
            as="textarea"
            name="details"
            rows="5"
            onChange={handleOnChange}
            value={frmDt?.details}
            required
          />
        </Col>
      </Form.Group>

      <Button type="Submit" variant="info">
        Submit
      </Button>
    </Form>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
};
