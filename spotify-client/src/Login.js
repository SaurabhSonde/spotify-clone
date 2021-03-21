import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL = process.env.REACT_APP_AUTH_URL;

const Login = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg rounded" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
};

export default Login;
