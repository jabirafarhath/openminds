import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./config/firebase-config";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Right from "./components/Right/Right";
import Login from "./pages/login/Login";
import Relax from "./pages/relax/Relax";
import Forum from "./pages/forum/Forum";
import Advice from "./pages/advice/Advice";
import Settings from "./pages/settings/Settings";
import { signOut } from "firebase/auth";

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
          <Routes>
            <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/home" element={
              <div className="app_page">
                <Navbar signUserOut={signUserOut}/>
                <Home />
                <Right />
              </div>
            } />
            <Route path="/advice" element={
              <div className="app_page">
                <Navbar signUserOut={signUserOut} />
                <Advice />
              </div>
            } />
            <Route path="/relax" element={
              <div className="app_page">
                <Navbar signUserOut={signUserOut} />
                <Relax />
              </div>
            } />
            <Route path="/settings" element={
              <div className="app_page">
                <Navbar signUserOut={signUserOut} />
                <Settings />
              </div>
            } />
            <Route path="/forum" element={
              <div className="app_page">
                <Navbar signUserOut={signUserOut} />
                <Forum />
              </div>
            } />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Router>
      </div>

      <div className="Mobile">
        App available only on desktop screens
      </div>
    </>
  );
}

export default App;
