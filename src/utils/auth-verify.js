import jwt_decode from "jwt-decode";

const AuthVerify = (props) => {
  const token = localStorage.getItem("token");
  if (token) {
    var decoded = jwt_decode(token);
    if (decoded.exp * 1000 < Date.now()) {
      props.logOut();
    }
  }
  return <div></div>;
};

export default AuthVerify;
