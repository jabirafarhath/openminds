import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./config/firebase-config";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Forum from "./pages/forum/Forum";
import { signOut } from "firebase/auth";
import Settings from "./pages/settings/Settings";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <>
      <div className="App">
        <Router>
          <nav>
            <Link className="menu_item" to="/home">
              Home
            </Link>
            {!isAuth ? (
              <Link className="menu_item" to="/">
                Login
              </Link>
            ) : (
              <Link className="menu_item" onClick={signUserOut}>
                Logout
              </Link>
            )}
            <Link className="menu_item" to="/forum">
              Forum
            </Link>
            <Link className="menu_item" to="/settings">
              Settings
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/home" element={<Home isAuth={isAuth} />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Router>
      </div>

      <div className="Mobile">App available only on desktop screens</div>
    </>
  );
}

export default App;
