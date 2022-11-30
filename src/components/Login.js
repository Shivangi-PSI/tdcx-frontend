import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { loginUser } from "../actions/auth";
import { ToastError, ToastSuccess } from "./common/Toaster";
import UserContext from "../hooks/UserContext";
import CustomButton from "./common/CustomButton";

const Login = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      name: username,
      password: pwd,
    };
    loginUser(data, (user, msg) => {
      if (user) {
        userCtx.setUser({ name: user.name });
        ToastSuccess(msg);
        navigate("/dashboard");
      } else {
        ToastError(msg);
      }
    });
  };

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
      <Form
        onSubmit={loginHandler}
        style={{
          padding: "20px",
          border: "solid 1px #dddddd",
          borderRadius: "10px",
          background: "white",
        }}
      >
        <h5>Login</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </Form.Group>
        <CustomButton
          variant="primary"
          name={"Login"}
          disabled={!(username || pwd)}
          type="submit"
        />
      </Form>
    </div>
  );
};

export default Login;
