import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../hooks/UserContext";
import Profile from '../../assets/images/profile.jpg'

const Header = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  const signOutHandler = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Profile} width="30" height="30"/>
        </Navbar.Brand>
        <Navbar.Brand href="#home">{user ? user.name : ""}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button className="btn btn-primary" onClick={signOutHandler}>
              Logout
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
