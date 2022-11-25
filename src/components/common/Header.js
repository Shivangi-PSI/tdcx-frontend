import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../hooks/UserContext";
import Profile from '../../assets/images/profile.jpg'
import { Button } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  const signOutHandler = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };
  return (
    <Navbar bg="light" variant="light" style={{marginBottom: '20px'}}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Profile} width="30" height="30"/>
        </Navbar.Brand>
        <Navbar.Brand href="#home">{user ? user.name : ""}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button onClick={signOutHandler} variant="link">Logout</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
