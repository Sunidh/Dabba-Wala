import { useNavigate } from 'react-router-dom'
import './Signup.css'
export default function Signup() {
  
    return (
      <div className='container'>
         
        {/* <form className="signupForm">

          <label className='email'>Email/Mobile Number</label><br></br>
          <input type="text" className="signupInput" placeholder="Enter your email..." /><br></br>
          <label className='password'>Password</label><br></br>
          <input type="password" className="signupInput" placeholder="Enter your password..." /><br></br>
          
        </form>
       <p className='already'>Have a  account?Login </p>
       
     <button className="RegisterButton">Sign Up</button> */}
      <form>
        <h1>Sign Up</h1>
  <div class="form-group">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required/>
  </div>
  <div class="form-group">
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required/>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required/>
  </div>
  <button type="submit">Sign Up</button>
</form>

     </div>

  
      
    )
  }