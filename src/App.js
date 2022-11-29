import { Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./routes/protected-routes";
import PageNotFound from "./components/common/PageNotFound";
import { useContext, useEffect } from "react";
import { fetchUser } from "./actions/auth";
import UserContext from "./hooks/UserContext";
import AuthVerify from "./utils/auth-verify";
import Toaster from "./components/common/Toaster";
const App = () => {
  const { setUser, user } = useContext(UserContext);
  const navigator = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchUser((user, msg) => {
        setUser(user);
      });
    }
  }, []);

  const signOutHandler = () => {
    localStorage.clear();
    setUser(null);
    navigator("/login");
  };

  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        <AuthVerify logOut={signOutHandler} />
      </div>
      <Toaster/>
    </>
  );
};

export default App;
