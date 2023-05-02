import React from 'react';

import './RegisterForm.css'
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate=useNavigate();
  return (
    <div>
      <section>
    <div className="login-box">
      <form action="">
        <h2>Sign Up</h2>
        <div className="input-box">
          <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
          <input type="text" required />
          <label >Username</label>
        </div>
        <div className="input-box">
          <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
          <input type="number" required />
          <label >Mobile Number</label>
        </div>
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
          
        </div>
        <button type='submit'>Create Account</button>
        <div className="register-link">
          <p>Already have an account ? <a href="#" onClick={navigate("/login")}>
            Login</a></p>
        </div>
      </form>
    </div>
    </section>
    </div>
  );
}