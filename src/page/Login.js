import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispath = useDispatch();
  const authenticate = useSelector((state) => state.auth.authenticate);
  const loginUser = (event) => {
    event.preventDefault();
    dispath(authenticateAction.login(id, password));
    navigate('/');
    // if (authenticate === false) {
    //   console.log("login user!!!");
    //   dispath();
    //   setAuthenticate(true);
    //   navigate("/");
    // } else {
    //   setAuthenticate(false);
    //   navigate("/");
    // }
  };
  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setId(event.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
     
        <Button variant="danger" type="submit">
          {authenticate === true ? "로그아웃" : "로그인"}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
