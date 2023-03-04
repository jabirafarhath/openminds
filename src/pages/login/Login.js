import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", result.user);
      setIsAuth(true);
      navigate("/home");
    });
  };

  return (
    <div className="login_page">
      <div className="login_btn" onClick={signInWithGoogle}>
        <i>
          <FcGoogle />
        </i>
        <span>Sign in with Google</span>
      </div>
    </div>
  );
}

export default Login;
