import React, { useState } from 'react';
import './Login.css'; // Import your custom CSS for styling
import Navbar from './../navbar/Navbar'
import { Link } from "react-router-dom";
import { useHistory, useNavigate } from 'react-router-dom';



function LoginPage() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

    const handleLogin = () => {
    // Implement login functionality here
    const data= {
      email : email ,
      password : password 
    }
    console.log(data)
    if (email === 'admin@gmail.com' ){
      setError(null);
      setSuccessMessage('Logged in successfully as admin');
      localStorage.setItem('token', '123');
      localStorage.setItem('role', 'admin');
       setTimeout(() => {
            console.log("navigating to / page")

            navigate('/');
            console.log("refreshing page")
            window.location.reload();

        }, 1000); 
    }
    else{
      setSuccessMessage(null);
      setError('Invalid credentials');
    } 
  };


  return (
    <div className="container">
    <Navbar />
      <div className="admin-login-form">
        <h1>Admin Login</h1>
        <div>{error && <p className="error-message">{error}</p>}</div>
        <div>{successMessage && <p className="success-message">{successMessage}</p>}</div>        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
        </div>
        <div className="admin-form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="admin-form-group">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="form-links">
          <Link to='/forgotpassword'>
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
