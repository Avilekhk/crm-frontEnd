import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const ResetPassword = ({
  handleOnChange,
  formSwitcher,
  handleOnResetSubmit,
  email,
}) => {
  return (
    <Container>
      <Row>
        <h1> Reset Password</h1>

        <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Col sm="8">
              <Form.Label column sm="6">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={handleOnChange}
                required
              />

              {/* </Form.Label> */}
            </Col>
          </Form.Group>
          <Row>
            <Col>
              <a href="#!" onClick={() => formSwitcher("login")}>
                Login Now
              </a>
            </Col>
          </Row>

          <Button type="submit">Reset Password</Button>
        </Form>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
