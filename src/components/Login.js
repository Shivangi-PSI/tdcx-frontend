import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginUser } from "../actions/auth";
import UserContext from "../hooks/UserContext";

const Login = () => {
	const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const data = { name: emailRef.current.value, password: pwdRef.current.value };
		loginUser(data, (user, msg) => {
      if (user) {
        userCtx.setUser({name: user.name});
				navigate('/dashboard')
      } 
    });
  };
  const emailRef = useRef();
  const pwdRef = useRef();
  return (
    <Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" ref={emailRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={pwdRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
