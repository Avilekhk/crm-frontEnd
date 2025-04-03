import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  email,
  formSwitcher,
  password,
}) => {
  return (
    <Container>
      <Row>
        <h1> Client Login</h1>

        <Form autoComplete="off" onSubmit={handleOnSubmit}>
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

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="6">
              Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleOnChange}
                value={password}
                required
              />
            </Col>
          </Form.Group>
          <Row>
            <Col>
              <a href="#!" onClick={() => formSwitcher("reset")}>
                Forgot Password?
              </a>
            </Col>
          </Row>
          <Button type="submit">Login</Button>
        </Form>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
