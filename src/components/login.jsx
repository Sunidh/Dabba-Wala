
import React from 'react';

import './login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  return (
    <div>
      <section>
    <div className="login-box">
      <form action="">
        <h2>Login</h2>
        <div className="input-box">
          <span className="icon">
          <ion-icon name="mail"></ion-icon>

          </span>
          <input type="email" required />
          <label >Email</label>
        </div>
        <div className="input-box">
          <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
          <input type="password" required />
          <label >Password</label>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot Password ?</a>
        </div>
        <button type='submit'>Login</button>
        <div className="register-link">
          <p>Don't have an account ? <a href="#" onClick={navigate("/register")}>Register</a></p>
        </div>
      </form>
    </div>
    </section>
    </div>
  );
}