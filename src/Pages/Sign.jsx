import React, { useState } from "react";
import "./sign.css";

function Sign() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Fake Google popup simulation
  const handleGoogleLogin = () => {
    alert("Google Login UI clicked (Firebase removed)");
  };

  return (
    <>
    <div className="sign-container">
      <div className="sign-box">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form>
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="main-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleForm}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
    </>
  );
}

export default Sign;
