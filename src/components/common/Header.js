import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import UserContext from "../../hooks/UserContext";
import Profile from "../../assets/images/profile.png";
import { capitalizeFirstLetter } from "../../utils/helper";
import CustomButton from "./CustomButton";

const Header = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  const signOutHandler = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };
  return (
    <Navbar className="header">
      <Container>
        <Navbar.Text>
          <img src={Profile} className="profile-img" />
        </Navbar.Text>
        <Navbar.Text className="header-username">
          {user ? capitalizeFirstLetter(user.name) : ""}
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CustomButton
              variant="link"
              name={"Logout"}
              onClick={signOutHandler}
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
