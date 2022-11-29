import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginUser } from "../actions/auth";
import { ToastError, ToastSuccess } from "./common/Toaster";
import UserContext from "../hooks/UserContext";

const Login = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      name: emailRef.current.value,
      password: pwdRef.current.value,
    };
    loginUser(data, (user, msg) => {
      if (user) {
        userCtx.setUser({ name: user.name });
        ToastSuccess("Login successfully");
        navigate("/dashboard");
      } else{
        ToastError(msg);
      }
    });
  };
  const emailRef = useRef();
  const pwdRef = useRef();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form onSubmit={loginHandler} style={{padding: '20px', border: 'solid 1px #dddddd', borderRadius: '10px', background: 'white'}}>
        <h5>Login</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwdRef} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{width: '100%'}}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
